// src/Pages/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById, categories, getProductsByCategory } from "../data/productsData";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartCount, addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  
  const product = getProductById(id);
  
  // If product not found, redirect to home
  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);
  
  if (!product) {
    return (
      <div className="product-details-page">
        <div className="loading-container">
          <h2>Product not found</h2>
          <p>Redirecting to homepage...</p>
        </div>
      </div>
    );
  }
  
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0]);

  useEffect(() => {
    setSelectedWeight(product.weightOptions[0]);
    setQuantity(1);
    setIsAddedToCart(false);
  }, [id, product.weightOptions]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: selectedWeight.price,
      unit: selectedWeight.value,
      image: product.image
    }, quantity);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);

  const getCategoryClass = (category) => {
    const categoryMap = {
      'fruits': 'fruits-category',
      'vegetables': 'vegetables-category',
      'dairy': 'dairy-category',
      'bakery': 'bakery-category',
      'beverages': 'beverages-category',
      'snacks': 'snacks-category',
      'meat': 'meat-category',
      'seafood': 'seafood-category',
      'frozen': 'frozen-category',
      'spices': 'spices-category',
      'cooking': 'cooking-category',
      'breakfast': 'breakfast-category',
      'personal-care': 'personal-care-category',
      'cleaning': 'cleaning-category',
      'pet-care': 'pet-care-category',
      'baby-care': 'baby-care-category',
      'organic': 'organic-category',
    
    };
    return categoryMap[category] || '';
  };

  const getRelatedProducts = () => {
    return getProductsByCategory(product.category)
      .filter(p => p.id !== product.id)
      .slice(0, 4);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="product-details-page">
      <nav className="pdp-navbar">
        <div className="pdp-nav-container">
          <Link to="/" className="pdp-back-btn">← Back to Shop</Link>
          <div className="pdp-nav-links">
            <Link to="/" className="pdp-nav-link">Home</Link>
            <Link to="/products/all" className="pdp-nav-link">Shop</Link>
            <Link to="/login" className="pdp-nav-link">Account</Link>
            <div className="pdp-cart-indicator">
              <Link to="/cart"><span className="cart-icon">🛒</span>{cartCount > 0 && <span className="cart-count">{cartCount}</span>}</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pdp-container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/products/all">Products</Link> / 
          <Link to={`/products/${product.category}`}>{getCategoryName(product.category)}</Link> / 
          <span>{product.name}</span>
        </div>

        <div className="pdp-main">
          <div className="pdp-images">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
              {product.discount > 0 && <div className="discount-badge">-{product.discount}%</div>}
              {!product.inStock && <div className="out-of-stock-overlay">Out of Stock</div>}
            </div>
            <div className="thumbnail-images">
              {[product.image, product.image, product.image].map((img, idx) => (
                <div key={idx} className="thumbnail active">
                  <img src={img} alt={`${product.name} view ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="pdp-info">
            <div className="product-header">
              <span className={`product-category ${getCategoryClass(product.category)}`}>
                {getCategoryName(product.category)}
              </span>
              <h1 className="product-title">{product.name}</h1>
              <div className="product-rating">
                <div className="stars">{'★'.repeat(Math.floor(product.rating))}<span className="rating-text">{product.rating}</span></div>
                <span className="review-count">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="product-pricing">
              <div className="price-display">
                <span className="current-price">₹{selectedWeight.price}</span>
                <span className="price-unit">{selectedWeight.value}</span>
                {product.discount > 0 && <>
                  <span className="original-price">₹{product.price}{product.unit}</span>
                  <span className="discount-tag">Save {product.discount}%</span>
                </>}
              </div>
              <div className="delivery-info">
                <span className="delivery-time">🚚 Delivery in {product.deliveryTime}</span>
                <span className="stock-status">{product.inStock ? "✅ In Stock" : "❌ Out of Stock"}</span>
              </div>
            </div>

            <div className="product-description"><p>{product.description}</p></div>

            <div className="weight-options">
              <h3>Select Quantity</h3>
              <div className="weight-buttons">
                {product.weightOptions.map((weight, idx) => (
                  <button 
                    key={idx} 
                    className={`weight-btn ${selectedWeight.value === weight.value ? 'active' : ''}`} 
                    onClick={() => setSelectedWeight(weight)}
                    disabled={!product.inStock}
                  >
                    {weight.value}<span className="weight-price">₹{weight.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <div className="quantity-control">
                <button 
                  className="qty-btn minus" 
                  onClick={decreaseQuantity} 
                  disabled={quantity <= 1 || !product.inStock}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                  className="qty-btn plus" 
                  onClick={increaseQuantity}
                  disabled={!product.inStock}
                >
                  +
                </button>
              </div>
              <div className="total-price">
                <span>Total:</span>
                <span className="total-amount">₹{(selectedWeight.price * quantity).toFixed(0)}</span>
              </div>
            </div>

            <div className="action-buttons">
              <button 
                className={`add-to-cart-btn ${isAddedToCart ? 'added' : ''}`} 
                onClick={handleAddToCart} 
                disabled={!product.inStock}
              >
                {isAddedToCart ? "✓ Added to Cart" : "🛒 Add to Cart"}
              </button>
              <button 
                className="buy-now-btn" 
                onClick={handleBuyNow} 
                disabled={!product.inStock}
              >
                ⚡ Buy Now
              </button>
            </div>

            <div className="product-features">
              <h3>Product Features:</h3>
              <ul>
                {product.features?.map((feat, idx) => <li key={idx}>✓ {feat}</li>)}
                <li>✓ Delivery in {product.deliveryTime}</li>
                <li>✓ {product.inStock ? "In Stock" : "Out of Stock"}</li>
                <li>✓ Rating: {product.rating}/5 ({product.reviews} reviews)</li>
              </ul>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{getCategoryName(product.category)}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Unit:</span>
                <span className="meta-value">{product.unit}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">SKU:</span>
                <span className="meta-value">FM{product.id.toString().padStart(4, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pdp-tabs">
          <div className="tab-buttons">
            {["description", "details", "reviews"].map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? "active" : ""}`} 
                onClick={() => setActiveTab(tab)}
              >
                {tab === "description" ? "Description" : 
                 tab === "details" ? "Product Details" : 
                 `Reviews (${product.reviews})`}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className={`tab-pane ${activeTab === "description" ? "active" : ""}`}>
              <h3>Product Description</h3>
              <p>{product.description}</p>
              <h4>Key Features:</h4>
              <ul className="details-list">
                {product.features?.map((feat, idx) => <li key={idx}>{feat}</li>)}
                <li>Fresh and high quality product</li>
                <li>Perfect for daily use and cooking</li>
                <li>Carefully packed and delivered fresh</li>
                <li>100% satisfaction guarantee</li>
              </ul>
            </div>

            <div className={`tab-pane ${activeTab === "details" ? "active" : ""}`}>
              <h3>Product Details</h3>
              <div className="details-table">
                <div className="detail-row">
                  <span className="detail-label">Product Name</span>
                  <span className="detail-value">{product.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Category</span>
                  <span className="detail-value">{getCategoryName(product.category)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Price</span>
                  <span className="detail-value">₹{product.price} per {product.unit}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Discount</span>
                  <span className="detail-value">{product.discount > 0 ? `${product.discount}% OFF` : "No Discount"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rating</span>
                  <span className="detail-value">{product.rating}/5 ({product.reviews} reviews)</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Delivery Time</span>
                  <span className="detail-value">{product.deliveryTime}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Availability</span>
                  <span className="detail-value">{product.inStock ? "In Stock" : "Out of Stock"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">SKU</span>
                  <span className="detail-value">FM{product.id.toString().padStart(4, '0')}</span>
                </div>
              </div>
            </div>

            <div className={`tab-pane ${activeTab === "reviews" ? "active" : ""}`}>
              <h3>Customer Reviews ({product.reviews})</h3>
              <div className="overall-rating">
                <div className="rating-summary">
                  <div className="rating-number">{product.rating}</div>
                  <div className="rating-stars">{'★'.repeat(5)}</div>
                  <div className="rating-count">{product.reviews} reviews</div>
                </div>
                <div className="rating-breakdown">
                  <div className="rating-bar">
                    <span>5 stars</span>
                    <div className="bar-container"><div className="bar" style={{ width: '70%' }}></div></div>
                    <span>70%</span>
                  </div>
                  <div className="rating-bar">
                    <span>4 stars</span>
                    <div className="bar-container"><div className="bar" style={{ width: '20%' }}></div></div>
                    <span>20%</span>
                  </div>
                  <div className="rating-bar">
                    <span>3 stars</span>
                    <div className="bar-container"><div className="bar" style={{ width: '5%' }}></div></div>
                    <span>5%</span>
                  </div>
                  <div className="rating-bar">
                    <span>2 stars</span>
                    <div className="bar-container"><div className="bar" style={{ width: '3%' }}></div></div>
                    <span>3%</span>
                  </div>
                  <div className="rating-bar">
                    <span>1 star</span>
                    <div className="bar-container"><div className="bar" style={{ width: '2%' }}></div></div>
                    <span>2%</span>
                  </div>
                </div>
              </div>
              <div className="reviews-list">
                <div className="review-item">
                  <div className="review-header">
                    <div className="reviewer">Rahul Sharma</div>
                    <div className="review-rating">★★★★★</div>
                  </div>
                  <div className="review-date">2 days ago</div>
                  <div className="review-text">Excellent quality! Very fresh and delicious. Will order again.</div>
                </div>
                <div className="review-item">
                  <div className="review-header">
                    <div className="reviewer">Priya Patel</div>
                    <div className="review-rating">★★★★☆</div>
                  </div>
                  <div className="review-date">1 week ago</div>
                  <div className="review-text">Good quality product, delivered on time. Happy with the purchase.</div>
                </div>
                <div className="review-item">
                  <div className="review-header">
                    <div className="reviewer">Anil Kumar</div>
                    <div className="review-rating">★★★★★</div>
                  </div>
                  <div className="review-date">2 weeks ago</div>
                  <div className="review-text">Best quality I've found online. Fresh and exactly as described.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="related-products">
          <h2>Related Products</h2>
          <div className="related-grid">
            {getRelatedProducts().map(related => (
              <div 
                key={related.id} 
                className="related-item" 
                onClick={() => navigate(`/product/${related.id}`)}
              >
                <div className="related-image">
                  <img src={related.image} alt={related.name} />
                  {related.discount > 0 && <div className="related-discount">{related.discount}% OFF</div>}
                </div>
                <div className="related-info">
                  <h4>{related.name}</h4>
                  <div className="related-price">₹{related.price} / {related.unit}</div>
                  <div className="related-rating">⭐ {related.rating} ({related.reviews})</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isAddedToCart && (
        <div className="cart-toast">
          <div className="toast-content">
            <span className="toast-icon">✓</span>
            <span>Added {product.name} to cart successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;