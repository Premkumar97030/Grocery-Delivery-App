// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import ProductListing from './Pages/ProductListing';
import LoginPage from "./Pages/LoginPage";
import CheckoutPayment from "./Pages/CheckoutPayment";
import TrackOrder from './Pages/TrackOrder';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products/:category" element={<ProductListing />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutPayment />} />  
          <Route path="/trackorder" element={<TrackOrder />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;