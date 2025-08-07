// src/components/SignUpPage.jsx

import React, { useState } from 'react';
import './signUp.css'; // We will create this new CSS file
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');

    // Basic Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // On successful validation, proceed with sign-up logic
    console.log('Signing up with:', { name, email, password });
    alert('Sign up successful! Check the console for details.');

    // Optionally, clear the form
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <div className="signup-form-header">
          <h2>Create Your Account</h2>
          <p>Join us and start your journey today</p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="button" className="password-toggle-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}
          
          <div className="terms-group">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">I agree to the <a href="#">Terms & Conditions</a></label>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
          
          <div className="login-link">
            <p>Already have an account? <a href="#">Log In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;