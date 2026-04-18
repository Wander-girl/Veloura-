import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,

  items: [
    {
      name: String,
      price: Number,
      image: String,
      quantity: Number,
    },
  ],

  total: Number,

  status: {
    type: String,
    default: "Placed",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);