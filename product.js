import express from "express";
import Product from "../models/Product.js";
import jwt from "jsonwebtoken";
import upload from "../middleware/upload.js";

const router = express.Router();


// 🔒 VERIFY ADMIN
const verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "No token ❌" });
    }

    jwt.verify(token, "secret");
    next();

  } catch (err) {
    console.log("JWT ERROR 👉", err.message);
    return res.status(401).json({ error: "Unauthorized ❌" });
  }
};


// ✅ ADD PRODUCT
router.post("/", verifyAdmin, upload.single("image"), async (req, res) => {
  try {
    console.log("====== DEBUG START ======");
    console.log("BODY 👉", req.body);
    console.log("FILE 👉", req.file);
    console.log("====== DEBUG END ======");

    // ❗ if image missing
    if (!req.file) {
      return res.status(400).json({
        error: "Image not uploaded ❌",
      });
    }

    const { name, price, category } = req.body;

    // ❗ validate fields
    if (!name || !price || !category) {
      return res.status(400).json({
        error: "Missing fields ❌",
      });
    }

    const product = new Product({
      name,
      price,
      category,
      image: req.file.path, // ✅ Cloudinary URL
    });

    await product.save();

    return res.status(200).json({
      message: "Product added ✅",
      product,
    });

  } catch (err) {
    console.log("🔥 FULL SERVER ERROR 👉", err);

    return res.status(500).json({
      error: err.message || "Server error ❌",
    });
  }
});


// ✅ GET PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);

  } catch (err) {
    console.log("GET ERROR 👉", err);
    return res.status(500).json({ error: err.message });
  }
});

export default router;