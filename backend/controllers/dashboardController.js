import Order from "../models/Order.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const revenueResult = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalAmount" },
        },
      },
    ]);

    const statusResult = await Order.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const ordersPerStatus = {
      RECEIVED: 0,
      PROCESSING: 0,
      READY: 0,
      DELIVERED: 0,
    };

    statusResult.forEach((item) => {
      ordersPerStatus[item._id] = item.count;
    });

    return res.status(200).json({
      success: true,
      data: {
        totalOrders,
        totalRevenue: revenueResult[0]?.totalRevenue || 0,
        ordersPerStatus,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
