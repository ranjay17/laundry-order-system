import express from "express";
import {
  createOrder,
  updateOrderStatus,
  getOrders,
} from "../controllers/orderController.js";

const router = express.Router();

// POST /api/orders
router.post("/", createOrder);

router.patch("/:id/status", updateOrderStatus);

// get orders
router.get("/", getOrders);

export default router;
