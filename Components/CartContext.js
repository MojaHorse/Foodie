import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (item, action) => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex(cartItem => cartItem.id === item.id);

    if (action === 'add') {
      if (index === -1) {
        updatedCart.push({ ...item, quantity: 1 });
      } else {
        updatedCart[index].quantity += 1;
      }
    } else if (action === 'remove') {
      if (index !== -1) {
        if (updatedCart[index].quantity > 1) {
          updatedCart[index].quantity -= 1;
        } else {
          updatedCart.splice(index, 1);
        }
      }
    }
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
