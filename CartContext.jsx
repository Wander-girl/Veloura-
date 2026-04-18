import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
  setCartItems((prev) => {
    const existing = prev.find((item) => item.name === product.name);

    if (existing) {
      return prev.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};
    
    const increaseQty = (name) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (name) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.name === name && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};


  // ✅ REMOVE
  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ TOTAL PRICE
 const getTotalPrice = () => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
  const clearCart = () => {
  setCartItems([]);
};

  return (
    <CartContext.Provider
  value={{
    cartItems,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getTotalPrice,
    clearCart,
  }}
>
      {children}
    </CartContext.Provider>
  );

}

export default CartProvider;