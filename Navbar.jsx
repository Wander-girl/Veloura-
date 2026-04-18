import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const token = localStorage.getItem("token");

  // ✅ GET USER
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Veloura</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Category">Category</Link>

        {/* 🛒 CART */}
        <Link to="/Cart" className="cart-link">
          Cart
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>

        {/* ✅ ADMIN LINK (ONLY FOR YOU) */}
        {user?.role === "admin" && (
          <Link to="/admin" className="admin-link">
            Admin
          </Link>
        )}

        {/* 🔐 AUTH */}
        {!token ? (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/Signup">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/Account">Account</Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;