import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.webp'; 

const Header = ({ onLetsTalkOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
  ];

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Mark-It Logo" className="navbar-logo" />
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Bar */}
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          {/* 1. Page Links */}
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}

          {/* 2. Contact Button (Added as requested) */}
          <button 
            className="nav-contact-btn" 
            onClick={() => {
              onLetsTalkOpen();
              setIsMobileMenuOpen(false); // Close menu after clicking
            }}
          >
            Contact
          </button>

          {/* 3. Download Portfolio Button */}
          <a 
            href="https://drive.google.com/file/d/1_f_SuZHXhQXUnoEAXP8_Dl2jYHzskntL/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-nav-download"
          >
            Download Portfolio
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;