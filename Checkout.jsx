import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext.jsx";
import API from "../api/api"; // ✅ ADD THIS
import "./checkout.css";

function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [step, setStep] = useState(1);

  // 🔥 PLACE ORDER (CONNECTED TO BACKEND)
  const handleOrder = async () => {
    try {
      await API.post(
        "/order/create",
        {
          items: cartItems,
          total: getTotalPrice(),
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      setOrderPlaced(true);
      clearCart();

    } catch (err) {
      alert("Order failed ❌");
      console.log(err);
    }
  };

  // 🔥 AUTO STEP ANIMATION
  useEffect(() => {
    if (orderPlaced) {
      setTimeout(() => setStep(2), 2000);
      setTimeout(() => setStep(3), 4000);
      setTimeout(() => setStep(4), 6000);
      setTimeout(() => setStep(5), 8000);
    }
  }, [orderPlaced]);

  // ✅ ORDER SUCCESS PAGE
  if (orderPlaced) {
    return (
      <div className="success-page">
        <h1>🎉 Order Confirmed!</h1>
        <p>Your order has been placed successfully.</p>

        {/* 🔥 TRACKING UI */}
        <div className="tracking-container">
          <div className="progress-line">
            <div
              className="progress-fill"
              style={{ width: `${(step - 1) * 25}%` }}
            ></div>
          </div>

          <div className="steps">
            <div className={step >= 1 ? "circle active" : "circle"}>
              <span>✔</span>
              <p>Confirmed</p>
            </div>

            <div className={step >= 2 ? "circle active" : "circle"}>
              <span>📦</span>
              <p>Packed</p>
            </div>

            <div className={step >= 3 ? "circle active" : "circle"}>
              <span>🚚</span>
              <p>Shipped</p>
            </div>

            <div className={step >= 4 ? "circle active" : "circle"}>
              <span>🚴</span>
              <p>Out</p>
            </div>

            <div className={step >= 5 ? "circle active" : "circle"}>
              <span>🏠</span>
              <p>Delivered</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ CHECKOUT PAGE
  return (
    <div className="checkout-page">
      <h2>Checkout 💳</h2>

      {/* ADDRESS */}
      <div className="section">
        <h3>Shipping Address</h3>
        <input placeholder="Full Name" />
        <input placeholder="Phone Number" />
        <textarea placeholder="Address"></textarea>
      </div>

      {/* PAYMENT */}
      <div className="section">
        <h3>Payment Method</h3>
        <label>
          <input type="radio" name="payment" /> Credit/Debit Card
        </label>
        <label>
          <input type="radio" name="payment" /> GPay / UPI
        </label>
        <label>
          <input type="radio" name="payment" /> Cash on Delivery
        </label>
      </div>

      {/* SUMMARY */}
      <div className="section">
        <h3>Order Summary</h3>

        {cartItems.map((item, index) => (
          <div key={index} className="summary-item">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <h3>Total: ₹{getTotalPrice()}</h3>
      </div>

      {/* BUTTON */}
      <button className="place-order" onClick={handleOrder}>
        Place Order ✅
      </button>
    </div>
  );
}

export default Checkout;