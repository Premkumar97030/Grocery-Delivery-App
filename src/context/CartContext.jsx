// src/context/CartContext.jsx
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('freshmart_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('freshmart_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate cart count
  const cartCount = cartItems.reduce((count, item) => count + (item.quantity || 1), 0);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  };

  // Calculate totals
  const subtotal = calculateSubtotal();
  const deliveryCharge = subtotal > 499 ? 0 : 40;
  const total = subtotal + deliveryCharge;

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      // Check if item already exists in cart
      const existingItemIndex = prev.findIndex(item => 
        item.id === product.id && item.unit === product.unit
      );
      
      if (existingItemIndex >= 0) {
        // Update existing item quantity
        const updatedCart = [...prev];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: (updatedCart[existingItemIndex].quantity || 1) + quantity
        };
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prev, { 
          ...product, 
          quantity: quantity,
          unit: product.unit || 'piece' // Default unit if not provided
        }];
      }
    });
  };

  const removeFromCart = (id, unit) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.unit === unit)));
  };

  const updateQuantity = (id, quantity, unit) => {
    if (quantity < 1) {
      removeFromCart(id, unit);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        (item.id === id && item.unit === unit) 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemQuantity = (id, unit) => {
    const item = cartItems.find(item => item.id === id && item.unit === unit);
    return item ? item.quantity || 1 : 0;
  };

  const isInCart = (id, unit) => {
    return cartItems.some(item => item.id === id && item.unit === unit);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      calculateSubtotal,
      subtotal,
      deliveryCharge,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getItemQuantity,
      isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};