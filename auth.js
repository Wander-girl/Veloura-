import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("Auth route working ✅");
});

// ================= SIGNUP =================
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: "user", // ✅ default role
    });

    await user.save();

    res.json({ message: "Signup successful ✅" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ error: "Wrong password" });

    const token = jwt.sign({ id: user._id }, "secret");

    // ✅ IMPORTANT: Send clean user (NO password)
    res.json({
      message: "Login successful ✅",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (err) {
    res.json({ error: err.message });
  }
});

// ================= GET PROFILE =================
router.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, "secret");

    const user = await User.findById(decoded.id).select("-password");

    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// ================= UPDATE PROFILE =================
router.put("/profile", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "secret");

    const { name, phone } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      decoded.id,
      { name, phone },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (err) {
    res.json({ error: err.message });
  }
});

// ================= UPDATE ADDRESS =================
router.put("/address", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "secret");

    const { address } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      decoded.id,
      { address },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (err) {
    res.json({ error: err.message });
  }
});

export default router;