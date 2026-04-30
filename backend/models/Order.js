import mongoose from "mongoose";

// garment sub-schema
const garmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    pricePerItem: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { _id: false }, // prevents extra _id for each garment
);

// main order schema
const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    garments: [garmentSchema],

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["RECEIVED", "PROCESSING", "READY", "DELIVERED"],
      default: "RECEIVED",
    },

    estimatedDeliveryDate: {
      type: Date,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
