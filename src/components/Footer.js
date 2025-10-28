import React from 'react';
import {Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/Footer-logo.png';

const Footer = () => {
  const projects = [
    { name: "TechStart Brand Launch", path: "/projects" },
    { name: "E-commerce Growth", path: "/projects" },
    { name: "Local Business SEO", path: "/projects" },
    { name: "SaaS Product Launch", path: "/projects" },
  ];

  // In Footer.js
const services = [
    { name: "Brand Design", path: "/#services-section" },
    { name: "Digital Marketing", path: "/#services-section" },
    { name: "Web Development & SEO", path: "/#services-section" },
    { name: "UGC & Content Creation", path: "/#services-section" },
    { name: "Email Marketing", path: "/#services-section" },
    { name: "Omni-Presence Marketing", path: "/#services-section" },
];

  // New data structure for social media links with specific icons
const socialLinks = [
  { name: "Instagram", icon: "ri-instagram-line", url: "https://www.instagram.com/markit.co.in/", color: "#E4405F" },
  { name: "LinkedIn", icon: "ri-linkedin-fill", url: "https://www.linkedin.com/company/mark-it-24/", color: "#0A66C2" },
  { name: "WhatsApp", icon: "ri-whatsapp-line", url: "https://api.whatsapp.com/send/?phone=7000773625&text=Share+us+your+portfolio&type=phone_number&app_absent=0", color: "#25D366" },
  { name: "Behance", icon: "ri-behance-fill", url: "https://www.behance.net/mark-it", color: "#1769FF" },
];
  
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="new-footer">
      <div className="container footer-container">
        {/* Column 1: Logo and Name */}
        <div className="footer-section logo-section">
          <Link to="/">
            <img src={logo} alt="Mark-it Logo" className="footer-logo" />
          </Link>
          <span className="footer-company-name">Mark-It</span>
        </div>

        {/* Separator Line 1 */}
        <div className="footer-separator"></div>

        {/* Column 2: Projects */}
        <div className="footer-section links-section">
          <h4>Projects</h4>
          <ul>
            {projects.map((project, index) => (
              <li key={index}><Link to={project.path}>{project.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Separator Line 2 */}
        <div className="footer-separator"></div>

        {/* Column 3: Services */}
        <div className="footer-section links-section">
          <h4>Services</h4>
          <ul>
            {services.map((service, index) => (
              <li key={index}><Link to={service.path}>{service.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Separator Line 3 */}
        <div className="footer-separator"></div>

        {/* Column 4: New Social Links Section (Stacked) */}
        <div className="footer-section social-links-vertical">
          <h4>Connect</h4> {/* Added a header for the social section */}
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="social-icon-item"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              style={{ '--social-color': social.color }} /* Pass color as CSS variable */
            >
              <i className={social.icon}></i> {/* Use Remixicon for icons */}
              <span className="social-name">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Back to Top Button */}
      <motion.button
        className="back-to-top-btn"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;