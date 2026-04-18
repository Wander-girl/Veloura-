import { useEffect, useState } from "react";
import API from "../api/api";
import "./account.css";

function Account() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  // edit states
  const [editing, setEditing] = useState(false);
  const [addingAddress, setAddingAddress] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const token = localStorage.getItem("token");

  // 🔥 FETCH USER + ORDERS
  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ USER
        const userRes = await API.get("/auth/profile", {
          headers: { Authorization: token },
        });

        setUser(userRes.data);
        setName(userRes.data.name);
        setPhone(userRes.data.phone || "");
        setAddress(userRes.data.address || "");

        // ✅ ORDERS (THIS WAS MISSING)
        const orderRes = await API.get("/order", {
          headers: { Authorization: token },
        });

        setOrders(orderRes.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // 🔥 UPDATE PROFILE
  const handleUpdateProfile = async () => {
    try {
      const res = await API.put(
        "/auth/profile",
        { name, phone },
        { headers: { Authorization: token } }
      );

      setUser(res.data);
      setEditing(false);
      alert("Profile updated ✅");
    } catch (err) {
      alert("Update failed ❌");
    }
  };

  // 🔥 UPDATE ADDRESS
  const handleUpdateAddress = async () => {
    try {
      const res = await API.put(
        "/auth/address",
        { address },
        { headers: { Authorization: token } }
      );

      setUser(res.data);
      setAddingAddress(false);
      alert("Address saved ✅");
    } catch (err) {
      alert("Address failed ❌");
    }
  };

  // 🔓 LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="account-container">
      
      <h2 className="account-title">My Account 👤</h2>

      {/* PROFILE */}
      <div className="account-card">
        <h3>Profile Details</h3>

        {editing ? (
          <>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />

            <button onClick={handleUpdateProfile} className="edit-btn">
              Save
            </button>
          </>
        ) : (
          <>
            <div className="account-info">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone || "Not added"}</p>
            </div>

            <button
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>

      {/* ADDRESS */}
      <div className="account-card">
        <h3>Address 📍</h3>

        {addingAddress ? (
          <>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />

            <button onClick={handleUpdateAddress} className="edit-btn">
              Save Address
            </button>
          </>
        ) : (
          <>
            <p>{user.address || "No address added"}</p>

            <button
              className="edit-btn"
              onClick={() => setAddingAddress(true)}
            >
              Add Address
            </button>
          </>
        )}
      </div>

      {/* 🔥 ORDERS (UPDATED UI) */}
      <div className="account-card">
  <h3>Order History 📦</h3>

  {orders.length === 0 ? (
    <p>No orders yet</p>
  ) : (
    <div className="orders-container">
      {orders.map((order, index) => (
        <div key={index} className="order-card">

          <div className="order-top">
            <span className="order-id">Order #{index + 1}</span>
            <span className="order-status">{order.status}</span>
          </div>

          <div className="order-body">
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
          </div>

        </div>
      ))}
    </div>
  )}
</div>

      {/* ACTIONS */}
      <div className="account-actions">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        <button className="delete-btn">
          Delete Account
        </button>
      </div>

    </div>
  );
}

export default Account;