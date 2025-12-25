import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-brand">TechStore</h3>
            <p className="footer-text">
              Your trusted destination for quality products at affordable prices.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#products" className="footer-link">Products</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text">Email: adriantoryan68@gmail.com</p>
            <p className="footer-text">Phone: 085829020417</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2024 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;