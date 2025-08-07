// src/components/LoginPage.jsx

import React, { useState } from 'react';
import './login.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle the login logic,
        // e.g., send a request to your backend API
        console.log('Logging in with:', { email, password });
        //alert(Login attempt with Email: ${email});
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <div className="login-form-header">
                    <h2>Welcome Back!</h2>
                    <p>Enter your credentials to access your account</p>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <FaUser className="input-icon" />
                        <input
                            type="email"
                            id="email"
                            name="email"
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
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                           type="button"
                           className="password-toggle-icon"
                           onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                     <div className="form-actions">
                        <label>
                            <input type="checkbox" name="remember-me" />
                            Remember me
                        </label>
                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    <div className="signup-link">
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;