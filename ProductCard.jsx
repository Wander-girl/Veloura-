import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function ProductCard({ image, name, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      
      <img src={image} alt={name} style={styles.image} />

      <h3 style={styles.name}>{name}</h3>

      <p style={styles.price}>₹{price}</p>

      <button
        style={styles.button}
        onClick={() => addToCart({ image, name, price })}
      >
        Add to Cart 🛒
      </button>

    </div>
  );
}

export default ProductCard;

const styles = {
  card: {
    width: "220px",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    background: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "0.3s ease",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  name: {
    marginTop: "12px",
    fontWeight: "600",
    fontSize: "16px",
  },

  price: {
    color: "#bfa14a", // gold tone
    fontWeight: "bold",
    margin: "8px 0",
  },

  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    background: "#bfa14a",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },
};