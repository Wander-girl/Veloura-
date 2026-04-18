import express from "express";
import Order from "../models/Order.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// CREATE ORDER
router.post("/create", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "secret");

    const { items, total } = req.body;

    const order = new Order({
      userId: decoded.id,
      items,
      total,
    });

    await order.save();

    res.json({ message: "Order placed successfully ✅" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

// GET USER ORDERS
router.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "secret");

    const orders = await Order.find({ userId: decoded.id });

    res.json(orders);
  } catch (err) {
    res.json({ error: err.message });
  }
});

export default router;