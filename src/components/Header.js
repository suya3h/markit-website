import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion'; 

import logo from '../assets/logo.png'; 

const Header = ({ onLetsTalkOpen }) => { 
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restored your navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
  ];

  // Function to handle opening the modal
  const handleContactClick = (e) => {
    e.preventDefault();
    onLetsTalkOpen();
    setIsOpen(false); // Closes mobile menu if it's open
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <Link to="/" className="logo">
          <motion.img 
            src={logo} 
            alt="Mark-It Logo"
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>
        
        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* ADDED: Contact button to open the modal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
          >
            <a href="#" onClick={handleContactClick}>
              Contact
            </a>
          </motion.div>

          {/* Kept your existing download button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (navLinks.length + 1) * 0.1 }}
          >
            <a 
              href="/Mark-it-Portfolio-2025.pdf"
              download="Mark-it-Portfolio-2025.pdf"
              className="btn btn-nav-download"
            >
              Download Portfolio
            </a>
          </motion.div>
        </nav>

        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <motion.div className="progress-bar" style={{ scaleX }} />
    </motion.header>
  );
};

export default Header;