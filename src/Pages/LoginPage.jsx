// src/Pages/LoginPage.jsx
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Loginpage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    special: false
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    newPassword: "",
  });

  // Update password strength indicators
  useEffect(() => {
    if (formData.password || formData.newPassword) {
      const password = mode === "reset" ? formData.newPassword : formData.password;
      
      setPasswordStrength({
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        special: /[@$!%*?&#]/.test(password)
      });
    }
  }, [formData.password, formData.newPassword, mode]);

  // Calculate overall password strength
  const getPasswordStrength = useCallback(() => {
    const { length, uppercase, special } = passwordStrength;
    const validCount = [length, uppercase, special].filter(Boolean).length;
    
    if (validCount === 0) return { level: "none", width: 0 };
    if (validCount === 1) return { level: "weak", width: 25 };
    if (validCount === 2) return { level: "fair", width: 50 };
    if (validCount === 3) return { level: "strong", width: 100 };
    
    return { level: "none", width: 0 };
  }, [passwordStrength]);

  const handleChange = (e) => {
    setError("");
    setSuccess("");
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Updated password validation
  const validatePassword = (password) => {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[@$!%*?&#]/.test(password);
  };

  // Simulate API call
  const simulateAPI = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ success: true }), 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // LOGIN
      if (mode === "login") {
        if (!formData.email || !formData.password) {
          setError("Please enter your email and password");
          return;
        }
        
        if (!validatePassword(formData.password)) {
          setError("Invalid password format");
          return;
        }

        await simulateAPI();
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 1000);
      }

      // SIGNUP
      else if (mode === "signup") {
        if (!formData.username || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
          setError("All fields are required");
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return;
        }

        if (!validatePassword(formData.password)) {
          setError("Password must contain at least 8 characters, one uppercase letter, and one special character (@$!%*?&#)");
          return;
        }

        await simulateAPI();
        setSuccess("Account created successfully! Redirecting...");
        setTimeout(() => navigate("/"), 1500);
      }

      // FORGOT PASSWORD
      else if (mode === "forgot") {
        if (!formData.email) {
          setError("Please enter your registered email");
          return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError("Please enter a valid email address");
          return;
        }

        await simulateAPI();
        setSuccess("Reset link sent to your email!");
        setMode("reset");
      }

      // RESET PASSWORD
      else if (mode === "reset") {
        if (!validatePassword(formData.newPassword)) {
          setError("Password must contain at least 8 characters, one uppercase letter, and one special character (@$!%*?&#)");
          return;
        }

        await simulateAPI();
        setSuccess("Password updated successfully!");
        setTimeout(() => setMode("login"), 2000);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const strength = getPasswordStrength();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link to="/" className="back-to-home">
          Back to Home
        </Link>

        {/* Grocery App Branding */}
        <div className="grocery-hero">
          <div className="grocery-icon">🛒</div>
          <div className="app-name">FreshMart</div>
          <div className="app-tagline">Your groceries, delivered fresh</div>
        </div>

        {/* Mode Switcher */}
        <div className="mode-switcher">
          <button 
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button 
            className={mode === "signup" ? "active" : ""}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <h2>
          {mode === "login" && "Welcome Back"}
          {mode === "signup" && "Create Account"}
          {mode === "forgot" && "Forgot Password"}
          {mode === "reset" && "Reset Password"}
        </h2>

        <p className="subtitle">
          {mode === "login" && "Login to access your account"}
          {mode === "signup" && "Sign up for the best grocery delivery experience"}
          {mode === "forgot" && "We'll send a reset link to your email"}
          {mode === "reset" && "Enter your new password"}
        </p>

        <form onSubmit={handleSubmit}>
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          {mode === "signup" && (
            <>
              <div className="input-with-icon">
                <span>👤</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="input-with-icon">
                <span>📱</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {(mode === "login" || mode === "signup" || mode === "forgot") && (
            <div className="input-with-icon">
              <span>✉️</span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {(mode === "login" || mode === "signup") && (
            <>
              <div className="password-box">
                <div className="input-with-icon">
                  <span>🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <span 
                  className="password-toggle"
                  onClick={() => setShowPassword((p) => !p)}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁"}
                </span>
              </div>
              
              {mode === "signup" && (
                <>
                  <div className="password-strength">
                    <div 
                      className={`password-strength-bar ${strength.level}`}
                      style={{ width: `${strength.width}%` }}
                    ></div>
                  </div>
                  
                  <div className="password-requirements">
                    <ul>
                      <li className={passwordStrength.length ? "valid" : ""}>
                        At least 8 characters
                      </li>
                      <li className={passwordStrength.uppercase ? "valid" : ""}>
                        One uppercase letter (A-Z)
                      </li>
                      <li className={passwordStrength.special ? "valid" : ""}>
                        One special character (@$!%*?&#)
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </>
          )}

          {mode === "signup" && (
            <div className="input-with-icon">
              <span>🔒</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {mode === "reset" && (
            <>
              <div className="password-box">
                <div className="input-with-icon">
                  <span>🔒</span>
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="password-strength">
                <div 
                  className={`password-strength-bar ${strength.level}`}
                  style={{ width: `${strength.width}%` }}
                ></div>
              </div>
              
              <div className="password-requirements">
                <ul>
                  <li className={passwordStrength.length ? "valid" : ""}>
                    At least 8 characters
                  </li>
                  <li className={passwordStrength.uppercase ? "valid" : ""}>
                    One uppercase letter (A-Z)
                  </li>
                  <li className={passwordStrength.special ? "valid" : ""}>
                    One special character (@$!%*?&#)
                  </li>
                </ul>
              </div>
            </>
          )}

          <button type="submit" disabled={loading}>
            {loading && <span className="loading-spinner"></span>}
            {!loading && mode === "login" && "Login"}
            {!loading && mode === "signup" && "Create Account"}
            {!loading && mode === "forgot" && "Send Reset Link"}
            {!loading && mode === "reset" && "Update Password"}
          </button>
        </form>

        {mode === "login" && (
          <>
            <p className="forgot" onClick={() => setMode("forgot")}>
              Forgot password?
            </p>
            <p className="toggle-text">
              Don't have an account?
              <span onClick={() => setMode("signup")}> Create one</span>
            </p>
          </>
        )}

        {mode === "signup" && (
          <p className="toggle-text">
            Already have an account?
            <span onClick={() => setMode("login")}> Login</span>
          </p>
        )}

        {(mode === "forgot" || mode === "reset") && (
          <p className="toggle-text">
            Back to
            <span onClick={() => setMode("login")}> Login</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;