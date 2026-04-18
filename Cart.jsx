import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate(); // ✅ MUST be inside function

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getTotalPrice,
  } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                {/* 🔥 QUANTITY */}
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.name)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.name)}>+</button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove ❌
              </button>
            </div>
          ))}

          {/* 🔥 TOTAL */}
          <h3 className="total">
            Total: ₹{getTotalPrice()}
          </h3>

          {/* 🔥 CHECKOUT BUTTON */}
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout 💳
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;