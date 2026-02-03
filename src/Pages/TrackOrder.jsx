// src/Pages/TrackOrder.jsx - COMPLETE REWRITE WITH PERFECT LIVE MAP
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./TrackOrder.css";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [activeOrder, setActiveOrder] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trackError, setTrackError] = useState("");
  const [timeLeft, setTimeLeft] = useState(25);
  const [progressPercent, setProgressPercent] = useState(70);

  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, cartCount } = useCart();

  // Sample order history
  const sampleOrders = [
    {
      id: "FRESH-2024-12345",
      date: "Today, 10:30 AM",
      total: 1499.00,
      status: "delivered",
      deliveryTime: "Delivered in 30 mins",
      items: [
        { name: "Organic Apples", quantity: 2, price: 120, image: "🍎", category: "fruits" },
        { name: "Fresh Milk", quantity: 1, price: 60, image: "🥛", category: "dairy" },
        { name: "Whole Wheat Bread", quantity: 1, price: 40, image: "🍞", category: "bakery" }
      ],
      address: "123 Main St, New Delhi 110001",
      paymentMethod: "UPI Payment",
      tracking: {
        stages: [
          { id: 1, name: "Order Placed", status: "completed", time: "10:30 AM", icon: "📝" },
          { id: 2, name: "Order Confirmed", status: "completed", time: "10:32 AM", icon: "✅" },
          { id: 3, name: "Picked Up", status: "completed", time: "10:45 AM", icon: "📦" },
          { id: 4, name: "On the Way", status: "completed", time: "10:50 AM", icon: "🚚" },
          { id: 5, name: "Delivered", status: "completed", time: "11:00 AM", icon: "🏠" }
        ],
        deliveryPerson: {
          name: "Rahul Sharma",
          phone: "+91 98765 43210",
          rating: "4.8",
          photo: "👨‍🍳"
        },
        estimatedDelivery: "11:00 AM"
      }
    },
    {
      id: "FRESH-2024-12346",
      date: "Yesterday, 03:15 PM",
      total: 899.00,
      status: "delivered",
      deliveryTime: "Delivered in 28 mins",
      items: [
        { name: "Bananas", quantity: 6, price: 30, image: "🍌", category: "fruits" },
        { name: "Eggs", quantity: 12, price: 60, image: "🥚", category: "dairy" }
      ],
      address: "456 Park Ave, New Delhi 110002",
      paymentMethod: "Credit Card",
      tracking: {
        stages: [
          { id: 1, name: "Order Placed", status: "completed", time: "03:15 PM", icon: "📝" },
          { id: 2, name: "Order Confirmed", status: "completed", time: "03:17 PM", icon: "✅" },
          { id: 3, name: "Picked Up", status: "completed", time: "03:25 PM", icon: "📦" },
          { id: 4, name: "On the Way", status: "completed", time: "03:30 PM", icon: "🚚" },
          { id: 5, name: "Delivered", status: "completed", time: "03:43 PM", icon: "🏠" }
        ],
        deliveryPerson: {
          name: "Priya Singh",
          phone: "+91 98765 43211",
          rating: "4.9",
          photo: "👩‍🍳"
        },
        estimatedDelivery: "03:43 PM"
      }
    }
  ];

  useEffect(() => {
    // Load order history on mount
    setOrderHistory(sampleOrders);
    
    // Check for order data from navigation state
    if (location.state?.cartItems) {
      createOrderFromCheckout(location.state);
    } else if (location.state?.orderId) {
      setOrderId(location.state.orderId);
      handleTrackOrder(null, location.state.orderId);
    }

    // Progress animation for live tracking
    const progressInterval = setInterval(() => {
      setProgressPercent(prev => {
        if (prev >= 95) return 95;
        return prev + 0.5;
      });
      setTimeLeft(prev => Math.max(0, prev - 0.5));
    }, 10000);

    return () => clearInterval(progressInterval);
  }, [location]);

  const createOrderFromCheckout = (checkoutData) => {
    const newOrderId = `FRESH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const order = {
      id: newOrderId,
      date: `Today, ${currentTime}`,
      total: checkoutData.finalTotal || checkoutData.subtotal + checkoutData.deliveryCharge,
      status: "on_the_way",
      deliveryTime: `${timeLeft} mins left`,
      items: checkoutData.cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image || "🛒",
        category: item.category || "general"
      })),
      address: "Your delivery address",
      paymentMethod: "Online Payment",
      tracking: {
        stages: [
          { id: 1, name: "Order Placed", status: "completed", time: currentTime, icon: "📝" },
          { id: 2, name: "Order Confirmed", status: "completed", time: currentTime, icon: "✅" },
          { id: 3, name: "Picked Up", status: "completed", time: currentTime, icon: "📦" },
          { id: 4, name: "On the Way", status: "active", time: currentTime, icon: "🚚" },
          { id: 5, name: "Delivered", status: "pending", time: calculateETA(), icon: "🏠" }
        ],
        deliveryPerson: {
          name: "Amit Kumar",
          phone: "+91 98765 43212",
          rating: "4.7",
          photo: "👨‍🍳",
          location: "0.8 km away"
        },
        estimatedDelivery: calculateETA(),
        currentLocation: "Near your location"
      }
    };
    
    setActiveOrder(order);
    setOrderId(newOrderId);
    setOrderHistory(prev => [order, ...prev]);
  };

  const calculateETA = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleTrackOrder = (e, autoId = null) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setTrackError("");
    
    const trackId = autoId || orderId;
    
    if (!trackId.trim() && !phoneNumber.trim()) {
      setTrackError("Please enter Order ID or Phone Number");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const foundOrder = orderHistory.find(order => 
        order.id.toLowerCase().includes(trackId.toLowerCase())
      );
      
      if (foundOrder) {
        setActiveOrder(foundOrder);
      } else {
        const demoOrder = createDemoOrder(trackId);
        setActiveOrder(demoOrder);
        setOrderHistory(prev => [demoOrder, ...prev]);
      }
      setIsLoading(false);
    }, 1500);
  };

  const createDemoOrder = (trackId) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return {
      id: trackId || `FRESH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
      date: `Today, ${currentTime}`,
      total: calculateOrderTotal(cartItems),
      status: "on_the_way",
      deliveryTime: `${timeLeft} mins left`,
      items: cartItems.length > 0 ? cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image || "🛒",
        category: item.category || "general"
      })) : [
        { name: "Mixed Fruits Basket", quantity: 1, price: 499, image: "🍎", category: "fruits" },
        { name: "Fresh Bread", quantity: 2, price: 80, image: "🍞", category: "bakery" },
        { name: "Organic Milk", quantity: 1, price: 60, image: "🥛", category: "dairy" }
      ],
      address: "Your delivery address",
      paymentMethod: "Online Payment",
      tracking: {
        stages: [
          { id: 1, name: "Order Placed", status: "completed", time: currentTime, icon: "📝" },
          { id: 2, name: "Order Confirmed", status: "completed", time: currentTime, icon: "✅" },
          { id: 3, name: "Picked Up", status: "completed", time: currentTime, icon: "📦" },
          { id: 4, name: "On the Way", status: "active", time: currentTime, icon: "🚚" },
          { id: 5, name: "Delivered", status: "pending", time: calculateETA(), icon: "🏠" }
        ],
        deliveryPerson: {
          name: "Amit Kumar",
          phone: "+91 98765 43212",
          rating: "4.7",
          photo: "👨‍🍳",
          location: "0.8 km away"
        },
        estimatedDelivery: calculateETA(),
        currentLocation: "Near your location"
      }
    };
  };

  const calculateOrderTotal = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0) || 639.00;
  };

  const getStatusConfig = (status) => {
    const configs = {
      delivered: {
        color: "#10B981",
        bgColor: "#D1FAE5",
        icon: "✅",
        text: "Delivered"
      },
      on_the_way: {
        color: "#3B82F6",
        bgColor: "#DBEAFE",
        icon: "🚚",
        text: "On the Way"
      },
      preparing: {
        color: "#F59E0B",
        bgColor: "#FEF3C7",
        icon: "⏳",
        text: "Preparing"
      },
      cancelled: {
        color: "#EF4444",
        bgColor: "#FEE2E2",
        icon: "❌",
        text: "Cancelled"
      }
    };
    return configs[status] || { color: "#6B7280", bgColor: "#F3F4F6", icon: "📦", text: "Processing" };
  };

  const handleViewOrderDetails = (orderId) => {
    const order = orderHistory.find(o => o.id === orderId);
    if (order) {
      setActiveOrder(order);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReorder = (order) => {
    alert(`Added ${order.items.length} items from order ${order.id} to cart!`);
    navigate('/cart');
  };

  const handleShareTracking = () => {
    if (navigator.share) {
      navigator.share({
        title: `Track Order ${activeOrder.id}`,
        text: `Track my FreshMart order #${activeOrder.id}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Tracking link copied to clipboard!");
    }
  };

  const handleCallDelivery = (phone) => {
    window.open(`tel:${phone}`);
  };

  const handleShopNow = () => {
    navigate('/products/all');
  };

  const renderTrackingTimeline = () => {
    if (!activeOrder?.tracking?.stages) return null;

    return (
      <div className="tracking-timeline">
        <div className="timeline-container">
          {activeOrder.tracking.stages.map((stage, index) => (
            <div key={stage.id} className="timeline-step">
              <div className={`step-indicator ${stage.status}`}>
                <div className="step-icon">{stage.icon}</div>
                {stage.status === "completed" && (
                  <div className="step-check">✓</div>
                )}
              </div>
              <div className="step-content">
                <div className="step-title">{stage.name}</div>
                {stage.time && (
                  <div className="step-time">{stage.time}</div>
                )}
              </div>
              {index < activeOrder.tracking.stages.length - 1 && (
                <div className={`step-connector ${stage.status}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderLiveMap = () => {
    if (activeOrder?.status !== "on_the_way") return null;

    return (
      <div className="live-map-container">
        <div className="map-header">
          <h3>Live Delivery Tracking</h3>
          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE
          </div>
        </div>
        <div className="map-placeholder">
          <div className="map-grid"></div>
          <div className="map-content">
            {/* Points Container */}
            <div className="points-container">
              {/* Delivery Point */}
              <div className="map-point delivery-point">
                <div className="point-icon delivery-icon">
                  🚚
                </div>
                <div className="point-label">Delivery Partner</div>
              </div>

              {/* Destination Point */}
              <div className="map-point destination-point">
                <div className="point-icon destination-icon">
                  🏠
                </div>
                <div className="point-label">Your Location</div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="connection-line">
              <div className="line-flow"></div>
            </div>

            Moving Delivery Truck
            <div className="moving-delivery">
              <div className="truck-path"></div>
              <div className="delivery-truck">
                
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="delivery-progress">
              <div className="progress-container">
                <div className="progress-labels">
                  <span className="progress-label">Warehouse</span>
                  <span className="progress-label">Your Home</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Map Stats */}
            <div className="map-stats">
              <div className="map-stat-item">
                <div className="map-stat-label">Distance</div>
                <div className="map-stat-value">0.8 km</div>
              </div>
              <div className="map-stat-item">
                <div className="map-stat-label">ETA</div>
                <div className="map-stat-value">{Math.round(timeLeft)} mins</div>
              </div>
              <div className="map-stat-item">
                <div className="map-stat-label">Progress</div>
                <div className="map-stat-value">{Math.round(progressPercent)}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="track-order-page">
      {/* Header */}
      <header className="track-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-icon">🛒</span>
              <span className="logo-text">FreshMart</span>
            </Link>
            <div className="header-actions">
              <Link to="/" className="nav-button">
                <span className="nav-icon">🏠</span>
                Home
              </Link>
              <Link to="/cart" className="nav-button cart">
                <span className="nav-icon">🛒</span>
                Cart ({cartCount})
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="track-main">
        <div className="container">
          {/* Hero Section */}
          <div className="track-hero">
            <h1 className="hero-title">Track Your Order</h1>
            <p className="hero-subtitle">Real-time updates on your grocery delivery</p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">30-min</div>
                <div className="stat-label">Delivery Promise</div>
              </div>
              <div className="stat">
                <div className="stat-number">Live</div>
                <div className="stat-label">Tracking Updates</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>

          {/* Track Order Form */}
          <div className="track-form-section">
            <div className="track-form-card">
              <div className="form-header">
                <h2>Enter Order Details</h2>
                <p>Track your order using Order ID or Phone Number</p>
              </div>
              
              <form onSubmit={handleTrackOrder} className="track-form">
                <div className="input-group">
                  <div className="input-with-icon">
                    <span className="input-icon">📦</span>
                    <input
                      type="text"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      placeholder="Enter Order ID (e.g., FRESH-2024-12345)"
                      className="track-input"
                    />
                  </div>
                  <div className="input-divider">
                    <span>OR</span>
                  </div>
                  <div className="input-with-icon">
                    <span className="input-icon">📱</span>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter Phone Number"
                      className="track-input"
                    />
                  </div>
                </div>
                
                {trackError && (
                  <div className="error-message">
                    ⚠️ {trackError}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="track-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Tracking Your Order...
                    </>
                  ) : (
                    <>
                      <span className="button-icon">🔍</span>
                      Track Order
                    </>
                  )}
                </button>
                
                <div className="form-footer">
                  <p>
                    <span className="footer-icon">📧</span>
                    Find Order ID in your confirmation email
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Active Order Tracking */}
          {activeOrder && (
            <div className="active-order-section">
              <div className="order-header-card">
                <div className="order-header-content">
                  <div className="order-id-section">
                    <h2>Order #{activeOrder.id}</h2>
                    <div className="order-meta">
                      <span className="meta-item">
                        <span className="meta-icon">📅</span>
                        {activeOrder.date}
                      </span>
                      <span className="meta-item">
                        <span className="meta-icon">💰</span>
                        ₹{activeOrder.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div 
                    className="order-status-badge"
                    style={{ 
                      backgroundColor: getStatusConfig(activeOrder.status).bgColor,
                      color: getStatusConfig(activeOrder.status).color
                    }}
                  >
                    <span className="status-icon">
                      {getStatusConfig(activeOrder.status).icon}
                    </span>
                    {getStatusConfig(activeOrder.status).text}
                  </div>
                </div>
                <div className="delivery-time">
                  <span className="time-icon">⏰</span>
                  <span className="time-text">{activeOrder.deliveryTime}</span>
                </div>
              </div>

              {/* Tracking Progress */}
              <div className="tracking-card">
                <div className="tracking-card-header">
                  <h3>Delivery Progress</h3>
                  <div className="eta-display">
                    ETA: <span className="eta-time">{activeOrder.tracking.estimatedDelivery}</span>
                  </div>
                </div>
                {renderTrackingTimeline()}
                
                {activeOrder.tracking.deliveryPerson && (
                  <div className="delivery-agent-card">
                    <div className="agent-info">
                      <div className="agent-photo">{activeOrder.tracking.deliveryPerson.photo}</div>
                      <div className="agent-details">
                        <div className="agent-name">{activeOrder.tracking.deliveryPerson.name}</div>
                        <div className="agent-rating">
                          ⭐ {activeOrder.tracking.deliveryPerson.rating}
                          {activeOrder.tracking.deliveryPerson.location && (
                            <span className="agent-location"> • {activeOrder.tracking.deliveryPerson.location}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button 
                      className="call-agent-button"
                      onClick={() => handleCallDelivery(activeOrder.tracking.deliveryPerson.phone)}
                    >
                      <span className="call-icon">📞</span>
                      Call Agent
                    </button>
                  </div>
                )}
              </div>

              {/* Live Map */}
              {renderLiveMap()}

              {/* Order Details */}
              <div className="order-details-grid">
                <div className="details-card">
                  <h3>Order Items ({activeOrder.items.length})</h3>
                  <div className="items-list">
                    {activeOrder.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <div className="item-image">
                          {typeof item.image === 'string' && item.image.includes('http') ? (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                            />
                          ) : (
                            <span>{item.image || "🛒"}</span>
                          )}
                        </div>
                        <div className="item-info">
                          <div className="item-name">{item.name}</div>
                          <div className="item-category">{item.category}</div>
                        </div>
                        <div className="item-quantity">×{item.quantity}</div>
                        <div className="item-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="details-card">
                  <h3>Delivery Information</h3>
                  <div className="info-section">
                    <div className="info-row">
                      <span className="info-label">Delivery Address</span>
                      <span className="info-value">{activeOrder.address}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Payment Method</span>
                      <span className="info-value">{activeOrder.paymentMethod}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Order Total</span>
                      <span className="info-value highlight">₹{activeOrder.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="action-button primary" onClick={() => handleReorder(activeOrder)}>
                  <span className="action-icon">🔄</span>
                  Reorder All Items
                </button>
                <button className="action-button" onClick={handleShareTracking}>
                  <span className="action-icon">📱</span>
                  Share Tracking
                </button>
                <a href="tel:+919876543210" className="action-button">
                  <span className="action-icon">🆘</span>
                  Need Help?
                </a>
              </div>
            </div>
          )}

          {/* Recent Orders */}
          <div className="recent-orders-section">
            <div className="section-header">
              <h2>Recent Orders</h2>
              <p>Your order history from last 30 days</p>
            </div>
            
            {orderHistory.length === 0 ? (
              <div className="empty-orders">
                <div className="empty-icon">📦</div>
                <h3>No Recent Orders</h3>
                <p>You haven't placed any orders recently</p>
                <button onClick={handleShopNow} className="shop-now-button">
                  Start Shopping →
                </button>
              </div>
            ) : (
              <div className="orders-grid">
                {orderHistory.map(order => (
                  <div 
                    key={order.id} 
                    className="order-card"
                    onClick={() => handleViewOrderDetails(order.id)}
                  >
                    <div className="order-card-header">
                      <div className="order-id">{order.id}</div>
                      <div 
                        className="order-status"
                        style={{ color: getStatusConfig(order.status).color }}
                      >
                        {getStatusConfig(order.status).icon} {getStatusConfig(order.status).text}
                      </div>
                    </div>
                    
                    <div className="order-items-preview">
                      {order.items.slice(0, 3).map((item, index) => (
                        <div key={index} className="preview-item">
                          <span className="item-emoji">
                            {typeof item.image === 'string' && item.image.includes('http') ? (
                              <img 
                                src={item.image} 
                                alt={item.name}
                                style={{ width: '32px', height: '32px', borderRadius: '6px', objectFit: 'cover' }}
                              />
                            ) : (
                              <span>{item.image || "🛒"}</span>
                            )}
                          </span>
                          <span className="item-preview-name">{item.name}</span>
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="more-items">+{order.items.length - 3} more</div>
                      )}
                    </div>
                    
                    <div className="card-footer">
                      <div className="order-total">₹{order.total.toFixed(2)}</div>
                      <div className="order-date">{order.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="track-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Track Order Support</h4>
              <div className="support-item">
                <span className="support-icon">📞</span>
                <div>
                  <div className="support-title">Call Us</div>
                  <a href="tel:+919876543210" className="support-value">+91 98765 43210</a>
                </div>
              </div>
              <div className="support-item">
                <span className="support-icon">📧</span>
                <div>
                  <div className="support-title">Email Us</div>
                  <a href="mailto:support@freshmart.com" className="support-value">support@freshmart.com</a>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Delivery Hours</h4>
              <div className="hours-item">
                <span className="hours-icon">🕐</span>
                <div>
                  <div className="hours-title">7:00 AM - 11:00 PM</div>
                  <div className="hours-subtitle">Every day of the week</div>
                </div>
              </div>
              <div className="hours-item">
                <span className="hours-icon">⚡</span>
                <div>
                  <div className="hours-title">30-Minute Delivery</div>
                  <div className="hours-subtitle">Guaranteed fresh delivery</div>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link to="/" className="footer-link">← Back to Home</Link>
              <Link to="/products/all" className="footer-link">Shop Groceries</Link>
              <Link to="/cart" className="footer-link">View Cart</Link>
              <a href="#help" className="footer-link">Help Center</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 FreshMart • Fresh Groceries Delivered in 30 Minutes</p>
            <div className="payment-methods">
              <span>💳</span>
              <span>📱</span>
              <span>🏦</span>
              <span>💎</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrackOrder;