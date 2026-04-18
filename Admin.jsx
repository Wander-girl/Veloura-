import { useState } from "react";
import API from "../api/api";
import "./admin.css";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleAddProduct = async () => {
    try {
      if (!name || !price || !category || !image) {
        alert("Please fill all fields ⚠️");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("image", image);

      // ✅ NO manual headers here
      const res = await API.post("/product", formData);

      alert(res.data.message || "Product added ✅");

      // 🔄 reset form
      setName("");
      setPrice("");
      setCategory("");
      setImage(null);

    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      alert("Error adding product ❌");
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel 👑</h1>
      <p>Add New Product</p>

      <div className="admin-form">

        {/* PRODUCT NAME */}
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* PRICE */}
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* CATEGORY */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="earrings">Earrings</option>
          <option value="rings">Rings</option>
          <option value="necklaces">Necklaces</option>
          <option value="hairs">Hair Accessories</option>
        </select>

        {/* IMAGE */}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {/* BUTTON */}
        <button onClick={handleAddProduct}>
          Add Product 🚀
        </button>

      </div>
    </div>
  );
}

export default Admin;