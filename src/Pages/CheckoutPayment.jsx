// src/Pages/CheckoutPayment.jsx - UPDATED VERSION
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./CheckoutPayment.css";

const CheckoutPayment = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: ""
  });
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get cart data from route state
  const cartData = location.state || {};
  
  // Use actual cart data from navigation or fallback to sample data
  const cartItems = cartData.cartItems || [
    { id: 1, name: "Fresh Apples", price: 120, quantity: 2, image: "🍎" },
    { id: 2, name: "Organic Milk", price: 60, quantity: 1, image: "🥛" },
    { id: 3, name: "Whole Wheat Bread", price: 40, quantity: 1, image: "🍞" }
  ];
  
  const subtotal = cartData.subtotal || cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = cartData.deliveryCharge || (subtotal > 499 ? 0 : 40);
  const tax = cartData.tax || subtotal * 0.05;
  const finalTotal = cartData.finalTotal || (subtotal + deliveryCharge + tax);
  const cartCount = cartData.cartCount || cartItems.length;

  const handleDeliverySubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "number") {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }

    if (name === "expiry") {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
      }
    }

    if (name === "cvv") {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }

    setCardDetails(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleDeliveryChange = (e) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value
    });
  };

  const banks = [
    { id: "sbi", name: "State Bank of India", icon: "🏦" },
    { id: "hdfc", name: "HDFC Bank", icon: "💳" },
    { id: "icici", name: "ICICI Bank", icon: "🏛️" },
    { id: "axis", name: "Axis Bank", icon: "🔷" },
    { id: "kotak", name: "Kotak Mahindra Bank", icon: "💎" }
  ];

  return (
    <div className="checkout-page">
      {/* Header */}
      <header className="checkout-header">
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-icon">🛒</span>
            <span className="logo-text">FreshMart</span>
          </Link>
          <div className="checkout-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Delivery</span>
            </div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Success</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container checkout-container">
        <div className="checkout-layout">
          {/* Left Column - Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="order-items">
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-image">
                    {item.image && item.image.includes('http') ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    ) : (
                      <span>{item.image || '🛒'}</span>
                    )}
                  </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>₹{item.price} × {item.quantity}</p>
                  </div>
                  <div className="item-total">₹{item.price * item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal ({cartCount} items)</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Delivery</span>
                <span className={deliveryCharge === 0 ? "free" : ""}>
                  {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                </span>
              </div>
              <div className="price-row">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="price-row total">
                <span>Total Amount</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="delivery-time">
              <span className="time-icon">⏰</span>
              <div>
                <strong>30-Minute Delivery</strong>
                <p>Order will be delivered in 30 minutes</p>
              </div>
            </div>

            <div className="support-info">
              <span className="support-icon">📞</span>
              <div>
                <strong>Need Help?</strong>
                <p>Call us at +91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Right Column - Forms */}
          <div className="checkout-form-container">
            {/* Step 1: Delivery Information */}
            {step === 1 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Delivery Information</h2>
                  <p>Enter your delivery details</p>
                </div>

                <form onSubmit={handleDeliverySubmit} className="delivery-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={deliveryInfo.name}
                      onChange={handleDeliveryChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={deliveryInfo.phone}
                        onChange={handleDeliveryChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={deliveryInfo.email}
                        onChange={handleDeliveryChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Delivery Address</label>
                    <textarea
                      name="address"
                      value={deliveryInfo.address}
                      onChange={handleDeliveryChange}
                      placeholder="Enter complete delivery address"
                      rows="3"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={deliveryInfo.city}
                        onChange={handleDeliveryChange}
                        placeholder="Enter city"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={deliveryInfo.pincode}
                        onChange={handleDeliveryChange}
                        placeholder="Enter pincode"
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary">
                    Continue to Payment →
                  </button>
                </form>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {step === 2 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Payment Method</h2>
                  <p>Select your preferred payment method</p>
                </div>

                <form onSubmit={handlePaymentSubmit} className="payment-form">
                  {/* Payment Method Selection */}
                  <div className="payment-methods">
                    <div className="payment-options">
                      <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={paymentMethod === 'card'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <span className="option-icon">💳</span>
                        <div className="option-content">
                          <span className="option-title">Credit/Debit Card</span>
                          <span className="option-desc">Pay with your card</span>
                        </div>
                      </label>

                      <label className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={paymentMethod === 'upi'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <span className="option-icon">📱</span>
                        <div className="option-content">
                          <span className="option-title">UPI</span>
                          <span className="option-desc">Pay using UPI ID</span>
                        </div>
                      </label>

                      <label className={`payment-option ${paymentMethod === 'netbanking' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="netbanking"
                          checked={paymentMethod === 'netbanking'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <span className="option-icon">🏦</span>
                        <div className="option-content">
                          <span className="option-title">Net Banking</span>
                          <span className="option-desc">Bank transfer</span>
                        </div>
                      </label>

                      <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <span className="option-icon">💵</span>
                        <div className="option-content">
                          <span className="option-title">Cash on Delivery</span>
                          <span className="option-desc">Pay when delivered</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div className="payment-details">
                    {paymentMethod === 'card' && (
                      <div className="card-form">
                        <div className="form-group">
                          <label>Card Number</label>
                          <input
                            type="text"
                            name="number"
                            value={cardDetails.number}
                            onChange={handleCardInputChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Cardholder Name</label>
                          <input
                            type="text"
                            name="name"
                            value={cardDetails.name}
                            onChange={handleCardInputChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label>Expiry Date</label>
                            <input
                              type="text"
                              name="expiry"
                              value={cardDetails.expiry}
                              onChange={handleCardInputChange}
                              placeholder="MM/YY"
                              maxLength="5"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>CVV</label>
                            <input
                              type="text"
                              name="cvv"
                              value={cardDetails.cvv}
                              onChange={handleCardInputChange}
                              placeholder="123"
                              maxLength="3"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'upi' && (
                      <div className="upi-form">
                        <div className="form-group">
                          <label>UPI ID</label>
                          <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="example@upi"
                            required
                          />
                          <p className="hint">Enter your UPI ID (e.g., 1234567890@upi)</p>
                        </div>
                        <div className="upi-apps">
                          <button type="button" className="upi-app">
                            <span>📱</span> Google Pay
                          </button>
                          <button type="button" className="upi-app">
                            <span>📱</span> PhonePe
                          </button>
                          <button type="button" className="upi-app">
                            <span>📱</span> Paytm
                          </button>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'netbanking' && (
                      <div className="netbanking-form">
                        <div className="form-group">
                          <label>Select Bank</label>
                          <div className="bank-options">
                            {banks.map(bank => (
                              <label key={bank.id} className={`bank-option ${selectedBank === bank.id ? 'selected' : ''}`}>
                                <input
                                  type="radio"
                                  name="bank"
                                  value={bank.id}
                                  checked={selectedBank === bank.id}
                                  onChange={(e) => setSelectedBank(e.target.value)}
                                />
                                <span className="bank-icon">{bank.icon}</span>
                                <span className="bank-name">{bank.name}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'cod' && (
                      <div className="cod-form">
                        <div className="cod-info">
                          <div className="info-icon">💵</div>
                          <div className="info-content">
                            <h4>Cash on Delivery</h4>
                            <p>Pay with cash when your order arrives. No extra charges.</p>
                            <ul className="cod-features">
                              <li>✅ Pay when delivered</li>
                              <li>✅ No extra charges</li>
                              <li>✅ Easy cancellation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setStep(1)}
                    >
                      ← Back
                    </button>
                    <button type="submit" className="btn-primary">
                      Pay ₹{finalTotal.toFixed(2)} Now
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <div className="success-step">
                <div className="success-icon">🎉</div>
                <h2>Order Confirmed!</h2>
                <p className="success-message">
                  Thank you for your order. Your groceries will be delivered soon.
                </p>

                <div className="order-details-card">
                  <h3>Order Details</h3>
                  <div className="detail-row">
                    <span>Order ID</span>
                    <span>#FRESH{Math.floor(Math.random() * 10000)}</span>
                  </div>
                  <div className="detail-row">
                    <span>Total Amount</span>
                    <span className="amount">₹{finalTotal.toFixed(2)}</span>
                  </div>
                  <div className="detail-row">
                    <span>Payment Method</span>
                    <span className="payment-method">
                      {paymentMethod === 'card' && 'Credit/Debit Card'}
                      {paymentMethod === 'upi' && 'UPI'}
                      {paymentMethod === 'netbanking' && 'Net Banking'}
                      {paymentMethod === 'cod' && 'Cash on Delivery'}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span>Delivery Address</span>
                    <span className="address">{deliveryInfo.address}</span>
                  </div>
                  <div className="detail-row">
                    <span>Estimated Delivery</span>
                    <span className="delivery-time">30 minutes</span>
                  </div>
                </div>

                <div className="success-actions">
                  <Link to="/" className="btn-primary">
                    ← Continue Shopping
                  </Link>
                
<Link 
  to="/trackorder" 
  state={{ 
    cartItems: cartItems,
    subtotal: subtotal,
    deliveryCharge: deliveryCharge,
    finalTotal: finalTotal,
    cartCount: cartCount
  }}
  className="btn-secondary"
  style={{ textDecoration: 'none' }}
>
  📱 Track Order
</Link>
                </div>

                <div className="contact-support">
                  <p>Need help? Contact us at <strong>support@freshmart.com</strong></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;