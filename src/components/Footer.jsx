import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
   <footer className="footer">
      <div className="footer-container">

        {/* Shop Info */}
        <div className="footer-section">
          <h3>Chaitanya Collection</h3>
          <p>
            Your one-stop clothing destination for Women, Men & Kids.
            Quality fabrics, latest designs, and affordable prices.
          </p>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Women’s Clothing</li>
            <li>Men’s Clothing</li>
            <li>Kids’ Clothing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ chaitanyacollection@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Chaitanya Collection. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
