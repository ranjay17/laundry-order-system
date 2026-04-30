import Order from "../models/Order.js";
import priceList from "../utils/priceList.js";

export const createOrder = async (req, res) => {
  try {
    const { customerName, phone, garments } = req.body;

    // basic validation
    if (!customerName || !phone) {
      return res.status(400).json({
        success: false,
        message: "Customer name and phone are required",
      });
    }

    if (!garments || !Array.isArray(garments) || garments.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one garment is required",
      });
    }

    // calculate garment prices
    const calculatedGarments = garments.map((item) => {
      const pricePerItem = priceList[item.name];

      if (!item.name || !pricePerItem) {
        throw new Error(`Invalid garment: ${item.name}`);
      }

      if (!item.quantity || item.quantity < 1) {
        throw new Error(`Invalid quantity for ${item.name}`);
      }

      const totalPrice = pricePerItem * item.quantity;

      return {
        name: item.name,
        quantity: item.quantity,
        pricePerItem,
        totalPrice,
      };
    });

    // calculate total amount
    const totalAmount = calculatedGarments.reduce(
      (sum, item) => sum + item.totalPrice,
      0,
    );

    // generate unique order id
    const orderId = `ORD-${Date.now()}`;

    // estimated delivery date: 3 days from today
    const estimatedDeliveryDate = new Date();
    estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 3);

    // create order
    const order = await Order.create({
      orderId,
      customerName,
      phone,
      garments: calculatedGarments,
      totalAmount,
      estimatedDeliveryDate,
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["RECEIVED", "PROCESSING", "READY", "DELIVERED"];

    // validate status
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    // find order by _id
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // update status
    order.status = status;

    const updatedOrder = await order.save();

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const { status, search } = req.query;

    const filter = {};

    // filter by status
    if (status) {
      filter.status = status;
    }

    // search by customerName or phone
    if (search) {
      filter.$or = [
        {
          customerName: {
            $regex: search,
            $options: "i", // case-insensitive
          },
        },
        {
          phone: {
            $regex: search,
          },
        },
      ];
    }

    const orders = await Order.find(filter).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};