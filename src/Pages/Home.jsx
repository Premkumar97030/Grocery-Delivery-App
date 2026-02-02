// src/Pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { categories, getPopularProducts, getDiscountedProducts } from "../data/productsData";
import "./Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount, addToCart } = useCart();

  const popularProducts = getPopularProducts(6);
  const discountedProducts = getDiscountedProducts(6);
  const featuredCategories = categories.slice(0, 6);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-sidebar') && 
          !event.target.closest('.mobile-menu-btn')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle search on Enter key press
  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/products/all?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  // Handle mobile search
  const handleMobileSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/products/all?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
      setSearchQuery("");
    }
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      unit: product.unit,
      image: product.image
    }, 1);
    alert(`Added ${product.name} to cart!`);
  };

  const handleCategoryClick = (categoryId) => {
    navigate(`/products/${categoryId}`);
    setIsCategoriesOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCategoriesOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  // Clear search when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setSearchQuery("");
    }
  }, [isMenuOpen]);

  return (
    <div className="home">
      {/* Navbar - White Background */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">🛒</span>
            <span>FreshMart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            <Link to="/" className="nav-link active">
              <span className="nav-icon">🏠</span> Home
            </Link>
            
            <div className="nav-dropdown">
              <button className="nav-link">
                <span className="nav-icon">📦</span> Categories
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-content">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products/${category.id}`}
                    className="dropdown-item"
                    onClick={closeMobileMenu}
                  >
                    <span className="dropdown-icon">{category.icon}</span>
                    <span>{category.name} ({category.count})</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/products/all" className="nav-link">
              <span className="nav-icon">🛍️</span> Shop All
            </Link>
            <a href="#offers" className="nav-link">
              <span className="nav-icon">🎯</span> Offers
            </a>
            <Link to="/trackorder" className="nav-link">
              <span className="nav-icon">📋</span> Orders
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search 350+ products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
                className="search-input"
              />
            </div>

            <div className="action-buttons">
              <Link to="/login" className="action-btn">
                <span className="action-icon">👤</span>
              </Link>
              
              <div className="cart-btn-wrapper">
                <Link to="/cart" className="cart-btn">
                  <span className="cart-icon">🛒</span>
                  {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Link>
              </div>
            </div>

            <button 
              className="mobile-menu-btn" 
              onClick={toggleMobileMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-sidebar">
          {/* Mobile Header */}
          <div className="mobile-header">
            <div className="mobile-logo">
              <span className="logo-icon">🛒</span>
              <span>FreshMart</span>
            </div>
            <button 
              className="mobile-close-btn" 
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Mobile Search */}
          <div className="mobile-search">
            <div className="mobile-search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleMobileSearch}
                className="mobile-search-input"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <Link to="/" className="mobile-nav-item active" onClick={closeMobileMenu}>
              <span className="mobile-nav-icon">🏠</span>
              Home
            </Link>

            {/* Categories Dropdown */}
            <div className="mobile-categories">
              <button 
                className="mobile-categories-header" 
                onClick={toggleCategories}
                aria-expanded={isCategoriesOpen}
              >
                <span className="mobile-nav-icon">📦</span>
                Categories
                <span className="categories-count">{categories.length}</span>
              </button>
              <div className={`mobile-categories-content ${isCategoriesOpen ? 'open' : ''}`}>
                {categories.map(category => (
                  <Link
                    key={category.id}
                    to={`/products/${category.id}`}
                    className="mobile-category-item"
                    onClick={closeMobileMenu}
                  >
                    <span className="category-icon-small">{category.icon}</span>
                    {category.name}
                    <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#666' }}>
                      ({category.count})
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/products/all" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span className="mobile-nav-icon">🛍️</span>
              Shop All
            </Link>

            <a href="#offers" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span className="mobile-nav-icon">🎯</span>
              Offers
            </a>

            <Link to="/trackorder" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span className="mobile-nav-icon">📋</span>
              Orders
            </Link>

            <Link to="/cart" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span className="mobile-nav-icon">🛒</span>
              Cart
              {cartCount > 0 && (
                <span className="mobile-cart-badge">{cartCount}</span>
              )}
            </Link>

            <Link to="/login" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span className="mobile-nav-icon">👤</span>
              My Account
            </Link>
          </div>

          {/* Mobile Footer */}
          <div className="mobile-footer">
            <div className="mobile-footer-stats">
              <span className="mobile-footer-icon">⭐</span>
              <span className="mobile-footer-text">Trusted by 30,000+ Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Green Background */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-tag">⭐ 250+ Products • 18 Categories • 30-min Delivery</div>
              <h1 className="hero-title">
                Fresh Groceries Delivered
                in 30 Minutes
                <span className="hero-highlight"></span>
              </h1>
              <p className="hero-description">
                From fresh produce to household essentials, discover 250+ quality products across 18 categories. 
                All delivered fresh in 30 minutes or less! Quality guaranteed!
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => navigate('/products/all')}>
                  <span className="btn-icon">🛍️</span>
                  Start Shopping
                </button>
                <button className="btn-secondary">
                  <span className="btn-icon">📱</span>
                  Download App
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">30,000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30-min</div>
                  <div className="stat-label">Fast Delivery</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Products</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&auto=format&fit=crop&q=80" 
                  alt="Fresh Groceries" 
                  className="hero-img" 
                />
                <div className="image-badge delivery-badge">🚚 30-min Delivery</div>
                <div className="image-badge fresh-badge">🌿 100% Fresh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">18 categories • 250+ products</p>
            <Link to="/products/all" className="view-all">View All Categories →</Link>
          </div>
          <div className="categories-grid">
            {featuredCategories.map((category) => (
              <div 
                key={category.id} 
                className="category-card" 
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-icon">{category.icon}</div>
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.count} products</p>
                  <button className="category-btn">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="popular-section">
        <div className="container">
          <div className="popular-header">
            <h2 className="popular-title">Most Popular Products</h2>
            <p className="popular-subtitle">Top rated by our customers</p>
            <div className="popular-divider"></div>
          </div>
          <div className="popular-grid">
            {popularProducts.map((product, index) => (
              <div 
                className="popular-card" 
                key={product.id} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-image-popular">
                  <img src={product.image} alt={product.name} />
                  {product.discount > 0 && (
                    <div className="discount-badge-popular">{product.discount}% OFF</div>
                  )}
                  <div className="rating-badge-popular">⭐ {product.rating}</div>
                </div>
                <div className="card-content">
                  <span className="category-tag">
                    {product.category}
                  </span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-details">
                    <div className="price-container">
                      <span className="price-label">Price</span>
                      <span className="product-price">
                        ₹{product.price} <span className="unit">{product.unit}</span>
                      </span>
                    </div>
                    <div className="add-to-cart-container">
                      <button 
                        className="add-to-cart-btn-small" 
                        onClick={() => handleAddToCart(product)}
                      >
                        <span className="add-icon">+</span> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounted Products */}
      <section className="products-section">
        <div className="container">
          <div className="section-header-row">
            <div className="section-header">
              <h2 className="section-title">Best Deals & Discounts</h2>
              <p className="section-subtitle">Save big on these products</p>
            </div>
            <Link to="/products/all?sort=discount" className="btn-view-all">View All Offers →</Link>
          </div>
          <div className="products-grid">
            {discountedProducts.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="discount-badge">{product.discount}% OFF</div>
                </div>
                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price-row">
                    <div className="product-price">₹{product.price}/{product.unit}</div>
                    <button 
                      className="add-to-cart-btn-compact" 
                      onClick={() => handleAddToCart(product)}
                    >
                      <span className="cart-icon">+</span> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="offer-section" id="offers">
        <div className="container">
          <div className="offer-content">
            <div className="offer-text">
              <div className="offer-tag">Mega Sale 2024</div>
              <h2 className="offer-title">Get Up to 60% OFF on Fresh Produce</h2>
              <p className="offer-description">
                Stock up on your favorite fruits and vegetables at unbelievable prices! 
                Limited time offer on 100+ products. Don't miss out!
              </p>
              <button 
                className="btn-offer" 
                onClick={() => navigate('/products/fruits')}
              >
                🎯 Shop Fresh Produce
              </button>
            </div>
            <div className="offer-image">
              <img 
                src="https://images.unsplash.com/photo-1603561596112-0a132b757442?w=700&auto=format&fit=crop&q=80" 
                alt="Mega Sale" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose FreshMart</h2>
            <p className="section-subtitle">We deliver the best grocery shopping experience</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Free Delivery</h3>
              <p>Free delivery on orders above ₹500</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Secure Payment</h3>
              <p>100% secure payment methods</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Easy Returns</h3>
              <p>7-day hassle-free returns</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Always here to help you</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Guaranteed</h3>
              <p>250+ quality products</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>30-minute delivery promise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="footer-logo">
                  <h3>
                    <span className="logo-icon">🛒</span>
                    FreshMart
                  </h3>
                  <p className="footer-description">
                    250+ products across 18 categories. Fresh groceries delivered fast since 2020.
                  </p>
                  <div className="social-icons">
                    <a href="#" className="social-icon">📘</a>
                    <a href="#" className="social-icon">📷</a>
                    <a href="#" className="social-icon">🐦</a>
                    <a href="#" className="social-icon">📱</a>
                  </div>
                </div>
              </div>
              <div className="footer-links">
                <h4>Top Categories</h4>
                {categories.slice(0, 6).map(cat => (
                  <Link key={cat.id} to={`/products/${cat.id}`}>
                    {cat.name} ({cat.count})
                  </Link>
                ))}
              </div>
              <div className="footer-links">
                <h4>Help & Support</h4>
                <Link to="/track-order">Track Order</Link>
                <a href="#">Shipping & Delivery</a>
                <a href="#">Returns & Refunds</a>
                <Link to="/contact">Contact Us</Link>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
              <div className="footer-contact">
                <h4>Stay Updated</h4>
                <p>Subscribe for exclusive offers on 250+ products</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">Subscribe</button>
                </form>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>support@freshmart.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">🏪</span>
                    <span>24/7 Delivery</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2024 FreshMart. 250+ Products • 18 Categories • 30-min Delivery Guarantee</p>
              <div className="payment-methods">
                <span>💳</span>
                <span>🏦</span>
                <span>📱</span>
                <span>💎</span>
                <span>🛡️</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;