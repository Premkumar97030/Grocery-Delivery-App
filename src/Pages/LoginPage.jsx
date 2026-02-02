// src/Pages/LoginPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", phone: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      if (formData.password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }
      alert("Account created successfully!");
    } else {
      alert("Logged in successfully!");
    }
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="back-to-home">← Back to Home</Link>
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <p className="subtitle">{isSignup ? "Create your account to get started" : "Login to your account"}</p>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input type="text" name="username" placeholder="Full Name" value={formData.username} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            </>
          )}
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required minLength={6} />
          {isSignup && (
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required minLength={6} />
          )}
          <button type="submit">{isSignup ? "Create Account" : "Login"}</button>
        </form>
        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>{isSignup ? " Login" : " Create one"}</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;