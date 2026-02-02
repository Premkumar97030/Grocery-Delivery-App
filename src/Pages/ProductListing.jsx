// src/Pages/ProductListing.jsx - White Background Version
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { categories, allProducts, searchProducts, getProductsByCategory } from "../data/productsData";
import "./ProductListing.css";

const ProductListing = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const { cartCount, addToCart } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchQuery(search);
    }
    setSelectedCategory(category || "all");
  }, [location, category]);

  // Filter products
  let filteredProducts = selectedCategory === "all" 
    ? [...allProducts] 
    : getProductsByCategory(selectedCategory);

  // Apply search filter
  if (searchQuery.trim()) {
    filteredProducts = searchProducts(searchQuery);
  }

  // Apply price filter
  filteredProducts = filteredProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'discount': return (b.discount || 0) - (a.discount || 0);
      case 'reviews': return b.reviews - a.reviews;
      default: return b.rating - a.rating; // featured
    }
  });

  const currentCategory = categories.find(cat => cat.id === selectedCategory) || 
    { id: 'all', name: 'All Products', icon: '🛒', count: allProducts.length, color: '#256B27', image: '' };

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

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleCategoryClick = (catId) => {
    navigate(`/products/${catId}`);
    setSelectedCategory(catId);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 5000]);
    setSortBy("featured");
    navigate(`/products/${selectedCategory}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products/all?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(`/products/${selectedCategory || 'all'}`);
    }
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 18; // Reduced from 20 for better fit
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="product-listing-page">
      <header className="listing-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-icon">🛒</span>
              <span className="logo-text">FreshMart</span>
            </Link>
            
            <div className="header-actions">
              <div className="search-container">
                <form onSubmit={handleSearchSubmit} className="search-form">
                  <input
                    type="text"
                    placeholder="Search 250+ products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <button type="submit" className="search-btn">🔍</button>
                </form>
              </div>
              
              <div className="cart-section">
                <Link to="/cart" className="cart-btn">
                  <span className="cart-icon">🛒</span>
                  {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container listing-container">
        <div className="listing-layout">
          <aside className="filters-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">All Categories ({categories.length})</h3>
              <div className="categories-list">
                <Link to="/products/all" className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}>
                  <span className="category-icon">🛒</span>
                  <span className="category-name">All Products</span>
                  <span className="category-count">{allProducts.length}</span>
                </Link>
                
                {categories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/products/${cat.id}`} 
                    className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
                  >
                    <span className="category-icon">{cat.icon}</span>
                    <span className="category-name">{cat.name}</span>
                    <span className="category-count">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Price Range</h3>
              <div className="price-filter">
                <div className="price-inputs">
                  <input 
                    type="number" 
                    min="0" 
                    max="5000" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])} 
                    className="price-input" 
                  />
                  <span className="price-separator">-</span>
                  <input 
                    type="number" 
                    min="0" 
                    max="5000" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])} 
                    className="price-input" 
                  />
                </div>
                <div className="price-slider">
                  <input 
                    type="range" 
                    min="0" 
                    max="5000" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])} 
                    className="range-slider min-slider" 
                  />
                  <input 
                    type="range" 
                    min="0" 
                    max="5000" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} 
                    className="range-slider max-slider" 
                  />
                </div>
                <div className="price-labels">
                  <span>₹0</span>
                  <span>₹2500</span>
                  <span>₹5000+</span>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Availability</h3>
              <div className="filters-list">
                <label className="filter-item">
                  <input type="checkbox" defaultChecked />
                  <span className="filter-name">In Stock Only</span>
                </label>
                <label className="filter-item">
                  <input type="checkbox" />
                  <span className="filter-name">On Sale</span>
                </label>
                <label className="filter-item">
                  <input type="checkbox" />
                  <span className="filter-name">Fast Delivery</span>
                </label>
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Sort By</h3>
              <div className="filters-list">
                <label className="filter-item">
                  <input type="radio" name="sort" checked={sortBy === 'featured'} onChange={() => setSortBy('featured')} />
                  <span className="filter-name">Featured</span>
                </label>
                <label className="filter-item">
                  <input type="radio" name="sort" checked={sortBy === 'price-low'} onChange={() => setSortBy('price-low')} />
                  <span className="filter-name">Price: Low to High</span>
                </label>
                <label className="filter-item">
                  <input type="radio" name="sort" checked={sortBy === 'price-high'} onChange={() => setSortBy('price-high')} />
                  <span className="filter-name">Price: High to Low</span>
                </label>
                <label className="filter-item">
                  <input type="radio" name="sort" checked={sortBy === 'rating'} onChange={() => setSortBy('rating')} />
                  <span className="filter-name">Customer Rating</span>
                </label>
                <label className="filter-item">
                  <input type="radio" name="sort" checked={sortBy === 'discount'} onChange={() => setSortBy('discount')} />
                  <span className="filter-name">Best Discount</span>
                </label>
              </div>
            </div>

            <button className="clear-filters-btn" onClick={handleClearFilters}>
              Clear All Filters
            </button>
          </aside>

          <main className="products-main">
            <div className="page-header">
              <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span>›</span>
                <Link to="/products/all">Products</Link>
                {selectedCategory && selectedCategory !== 'all' && (
                  <>
                    <span>›</span>
                    <span className="current-category">{currentCategory.name}</span>
                  </>
                )}
              </div>
              
              <div className="header-info">
                <div className="category-header">
                  <div className="category-icon-large">{currentCategory.icon}</div>
                  <div>
                    <h1>{currentCategory.name}</h1>
                    <p>{filteredProducts.length} products found • Page {currentPage} of {totalPages}</p>
                  </div>
                </div>
                
                <div className="sort-container">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                    <option value="discount">Best Discount</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>
              </div>

              {(searchQuery || priceRange[0] > 0 || priceRange[1] < 5000) && (
                <div className="active-filters">
                  <strong>Active Filters:</strong>
                  {searchQuery && (
                    <span className="active-filter">
                      Search: "{searchQuery}"
                      <button onClick={() => setSearchQuery("")}>×</button>
                    </span>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 5000) && (
                    <span className="active-filter">
                      Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                      <button onClick={() => setPriceRange([0, 5000])}>×</button>
                    </span>
                  )}
                  {sortBy !== 'featured' && (
                    <span className="active-filter">
                      Sorted by: {sortBy.replace('-', ' ')}
                      <button onClick={() => setSortBy('featured')}>×</button>
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="products-grid">
              {currentProducts.length > 0 ? currentProducts.map(product => {
                const discountedPrice = product.discount > 0 
                  ? Math.round(product.price * (1 - product.discount / 100))
                  : product.price;
                
                return (
                  <div className="product-card" key={product.id}>
                    <div className="product-image-wrapper">
                      <img src={product.image} alt={product.name} className="product-image" />
                      {product.discount > 0 && (
                        <div className="discount-badge">{product.discount}% OFF</div>
                      )}
                      {!product.inStock && (
                        <div className="out-of-stock-badge">Out of Stock</div>
                      )}
                      <div className="product-overlay">
                        <button className="quick-view-btn" onClick={() => handleViewDetails(product.id)}>
                          Quick View
                        </button>
                      </div>
                    </div>
                    
                    <div className="product-info">
                      <span className="product-category">
                        {product.category}
                      </span>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-desc">{product.description}</p>
                      
                      <div className="product-rating">
                        <div className="stars">
                          {'★'.repeat(Math.floor(product.rating))}
                          <span className="rating-score">{product.rating}</span>
                          <span className="reviews">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="product-footer">
                        <div className="price-section">
                          <span className="product-price">₹{discountedPrice}/{product.unit}</span>
                          {product.discount > 0 && (
                            <span className="original-price">
                              ₹{product.price}/{product.unit}
                            </span>
                          )}
                        </div>
                        
                        <div className="product-actions">
                          <button 
                            className="add-to-cart-btn" 
                            onClick={() => handleAddToCart(product)}
                            disabled={!product.inStock}
                          >
                            <span>+</span> Add
                          </button>
                          <button 
                            className="view-details-btn" 
                            onClick={() => handleViewDetails(product.id)}
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }) : (
                <div className="no-products">
                  <div className="no-products-icon">🔍</div>
                  <h3>No products found</h3>
                  <p>Try adjusting your search or filters</p>
                  <button className="clear-filters-btn" onClick={handleClearFilters}>
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {sortedProducts.length > productsPerPage && (
              <div className="pagination">
                <button 
                  className="pagination-btn prev" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ← Previous
                </button>
                
                <div className="page-numbers">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <span 
                        key={pageNum}
                        className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </span>
                    );
                  })}
                  
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="page-dots">...</span>
                      <span className="page-number" onClick={() => handlePageChange(totalPages)}>
                        {totalPages}
                      </span>
                    </>
                  )}
                </div>
                
                <button 
                  className="pagination-btn next" 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next →
                </button>
              </div>
            )}

            {/* Category Banners */}
            <div className="category-banners">
              <h2 className="section-title">Explore More Categories</h2>
              <div className="banners-grid">
                {categories.map(cat => (
                  <div 
                    key={cat.id}
                    className="category-banner"
                    onClick={() => handleCategoryClick(cat.id)}
                    style={{ 
                      borderColor: cat.color,
                      background: `linear-gradient(135deg, ${cat.color}15 0%, ${cat.color}10 100%)`
                    }}
                  >
                    <div className="banner-icon">{cat.icon}</div>
                    <div className="banner-content">
                      <h3>{cat.name}</h3>
                      <p>{cat.count} products</p>
                    </div>
                    <div className="banner-arrow">→</div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;