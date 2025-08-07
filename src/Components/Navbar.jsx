// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaGraduationCap, FaBars, FaTimes, FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ isLoggedIn = true }) => { // Default to logged-in for demo
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const studentLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Opportunities', path: '/opportunities' },
    { name: 'Companies', path: '/companies' },
    { name: 'My Profile', path: '/profile' },
    { name: 'Applications', path: '/applications' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Site Name */}
        <NavLink to="/" className="navbar-logo">
          <FaGraduationCap className="logo-icon" />
          PlacementPortal
        </NavLink>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          {isLoggedIn && studentLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                to={link.path}
                className="nav-link"
                onClick={toggleMenu} // Close menu on link click
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* User Actions (Right Side) */}
        {isLoggedIn ? (
          <div className="user-actions">
            <button className="icon-button">
              <FaBell />
            </button>
            <button className="icon-button">
              <FaUserCircle />
            </button>
            <NavLink to="/logout" className="logout-button">Logout</NavLink>
          </div>
        ) : (
          <div className="auth-buttons">
            <NavLink to="/login" className="nav-button-login">Login</NavLink>
            <NavLink to="/signup" className="nav-button-signup">Sign Up</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;