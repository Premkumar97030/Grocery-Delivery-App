// src/Pages/Cart.jsx - UPDATED VERSION
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { 
    cartItems, 
    cartCount, 
    updateQuantity, 
    removeFromCart, 
    subtotal,
    deliveryCharge,
    total,
    addToCart,
    clearCart 
  } = useCart();
  
  const navigate = useNavigate();

  // Calculate values based on actual cart items
  const tax = subtotal * 0.05;
  const finalTotal = subtotal + (deliveryCharge || 0) + tax;
  
  // Free delivery threshold
  const freeDeliveryThreshold = 499;
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  
  // Suggested products with actual images
  const suggestedProducts = [
    { 
      id: 101, 
      name: "Red Bull", 
      category: "beverages", 
      price: 95, 
      unit: "250ml", 
      image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400&h=400&fit=crop&q=80"
    },
    { 
      id: 102, 
      name: "Pepsi", 
      category: "beverages", 
      price: 44, 
      unit: "500ml", 
      image: "https://images.unsplash.com/photo-1551024709-8f23berc6t87?w=400&h=400&fit=crop&q=80"
    },
    { 
      id: 103, 
      name: "Coca Cola", 
      category: "beverages", 
      price: 45, 
      unit: "500ml", 
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop&q=80"
    },
    { 
      id: 104, 
      name: "Monster Energy", 
      category: "beverages", 
      price: 120, 
      unit: "can", 
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop&q=80"
    }
  ];

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add some items first!");
      return;
    }
    
    // Navigate to checkout page with cart data as state
    navigate("/checkout", { 
      state: { 
        cartItems: cartItems,
        subtotal: subtotal,
        deliveryCharge: deliveryCharge,
        tax: tax,
        finalTotal: finalTotal,
        cartCount: cartCount
      } 
    });
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      clearCart();
    }
  };

  const handleIncrement = (item) => {
    updateQuantity(item.id, (item.quantity || 1) + 1, item.unit);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1, item.unit);
    } else {
      removeFromCart(item.id, item.unit);
    }
  };

  const handleAddSuggested = (product) => {
    addToCart(product, 1);
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'beverages': return '#FF6B6B';
      case 'fruits': return '#4ECDC4';
      case 'vegetables': return '#7ED321';
      case 'bakery': return '#FFD166';
      case 'dairy': return '#A78BFA';
      case 'snacks': return '#FF9A76';
      default: return '#6C757D';
    }
  };

  const getCategoryName = (category) => {
    return category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Beverage';
  };

  return (
    <div className="cart-container">
      {/* Header */}
      <header className="cart-header">
        <div className="container">
          <Link to="/" className="logo">
            <div className="logo-icon">🛒</div>
            <div className="logo-text">FreshMart</div>
          </Link>
          
<div className="header-actions">
  <Link to="/" className="back-button">
    ← Continue Shopping
  </Link>
  <Link to="/trackorder" className="back-button" style={{ marginRight: '10px' }}>
    📦 Track Order
  </Link>
  <div className="cart-indicator">
    <span className="cart-icon">🛒</span>
    <span className="item-count">{cartCount} items</span>
  </div>
</div>
         
        </div>
      </header>

      <main className="cart-main">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h2>Your Cart is Empty</h2>
              <p>Add some delicious groceries to get started!</p>
              <Link to="/" className="shop-button">
                Start Shopping →
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              {/* Left Column - Cart Items */}
              <div className="cart-items-column">
                <div className="cart-header-section">
                  <div>
                    <h1>Your Shopping Cart</h1>
                    <p className="item-count-text">{cartCount} item{cartCount !== 1 ? 's' : ''} in cart</p>
                  </div>
                  <button 
                    className="clear-cart-button"
                    onClick={handleClearCart}
                  >
                    Clear All
                  </button>
                </div>

                <div className="cart-items-wrapper">
                  {cartItems.map(item => (
                    <div key={`${item.id}-${item.unit}`} className="cart-item-card">
                      <div className="item-image-section">
                        {item.image ? (
                          <div className="item-image-container">
                            <img src={item.image} alt={item.name} />
                          </div>
                        ) : (
                          <div className="item-image">{item.imageEmoji || '🛒'}</div>
                        )}
                        <div 
                          className="category-tag"
                          style={{ backgroundColor: getCategoryColor(item.category) }}
                        >
                          {getCategoryName(item.category)}
                        </div>
                      </div>

                      <div className="item-details-section">
                        <div className="item-info">
                          <h3 className="item-name">{item.name}</h3>
                          <div className="item-pricing">
                            <span className="price">₹{item.price}</span>
                            <span className="unit">/ {item.unit}</span>
                          </div>
                        </div>

                        <div className="quantity-section">
                          <div className="quantity-controls">
                            <button 
                              className="quantity-btn minus-btn"
                              onClick={() => handleDecrement(item)}
                              disabled={item.quantity <= 1}
                            >
                              −
                            </button>
                            <div className="quantity-display">{item.quantity}</div>
                            <button 
                              className="quantity-btn plus-btn"
                              onClick={() => handleIncrement(item)}
                            >
                              +
                            </button>
                          </div>
                          <div className="item-total">
                            <span>Total: </span>
                            <span className="total-amount">₹{item.price * item.quantity}</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        className="remove-button"
                        onClick={() => removeFromCart(item.id, item.unit)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <div className="delivery-info-card">
                  <div className="delivery-icon">🚚</div>
                  <div className="delivery-content">
                    <h4>30-Minute Delivery</h4>
                    <p>Your order will be delivered within 30 minutes</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="order-summary-column">
                <div className="order-summary-card">
                  <h2 className="summary-title">Order Summary</h2>
                  
                  <div className="price-breakdown">
                    <div className="price-row">
                      <span className="label">Subtotal ({cartCount} items)</span>
                      <span className="value">₹{subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="price-row">
                      <span className="label">Delivery Fee</span>
                      <span className={`value ${deliveryCharge === 0 ? 'free' : ''}`}>
                        {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                      </span>
                    </div>
                    
                    <div className="price-row">
                      <span className="label">Tax (5%)</span>
                      <span className="value">₹{tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="divider"></div>
                    
                    <div className="price-row total-row">
                      <span className="label">Total Amount</span>
                      <span className="value total-amount">₹{finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Delivery Message */}
                  {deliveryCharge === 0 ? (
                    <div className="free-delivery-message">
                      <span className="icon">🎉</span>
                      <span>Free delivery applied!</span>
                    </div>
                  ) : (
                    <div className="delivery-progress">
                      <div className="progress-text">
                        Add ₹{amountNeededForFreeDelivery.toFixed(2)} more for free delivery
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <button 
                    className="checkout-button"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout →
                  </button>

                  <div className="payment-methods">
                    <p className="payment-title">We accept:</p>
                    <div className="payment-icons">
                      <span>💳</span>
                      <span>📱</span>
                      <span>🏦</span>
                      <span>💵</span>
                    </div>
                  </div>
                </div>

                <div className="support-card">
                  <div className="support-icon">📞</div>
                  <div className="support-details">
                    <h4>Need Help?</h4>
                    <p><strong>Call:</strong> +91 98765 43210</p>
                    <p><strong>Email:</strong> support@freshmart.com</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Suggested Products */}
      {cartItems.length === 0 ? (
        <section className="suggested-products">
          <div className="container">
            <h2 className="suggested-title">Popular Items</h2>
            <div className="suggested-grid">
              {suggestedProducts.map(product => (
                <div key={product.id} className="suggested-card">
                  <div className="suggested-image-container">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h4>{product.name}</h4>
                  <div className="suggested-price">₹{product.price} / {product.unit}</div>
                  <button 
                    className="add-button"
                    onClick={() => handleAddSuggested(product)}
                  >
                    + Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="suggested-products">
          <div className="container">
            <h2 className="suggested-title">Frequently Added Together</h2>
            <div className="suggested-grid">
              {suggestedProducts.map(product => (
                <div key={product.id} className="suggested-card">
                  <div className="suggested-image-container">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h4>{product.name}</h4>
                  <div className="suggested-price">₹{product.price} / {product.unit}</div>
                  <button 
                    className="add-button"
                    onClick={() => handleAddSuggested(product)}
                  >
                    + Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;