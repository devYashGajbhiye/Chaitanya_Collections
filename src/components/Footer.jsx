import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className='footer-brand'>
          <h3>Chaitanya Collection</h3>
          <p>
            Chaitanya Collection is your one-stop destination for stylish and 
            affordable clothing for Women, Men, and Kids. We bring you quality
            fabrics, latest trends, and comfort for everyday wear and special
            occasions.
          </p>
        </div>

        <div className='footer-col'>
          <h5>Customer</h5>
          <ul>
            <li>Help / FAQs</li>
          </ul>
        </div>

        <div className='footer-col'>
          <h5>TOP CATEGORIES</h5>
          <ul>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
            <li><Link to="/stylehub">STYLE HUB</Link></li>
            <li><Link to="/bargains">BARGAINS</Link></li>
            <li><Link to="/luxe">LUXE</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>STORE AND SITES</h5>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Corporate Site</li>
            <li>Store Locator</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>POLICIES</h5>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Delivery Policy</li>
            <li>Exchange & Return</li>
          </ul>
        </div>

      </div>

      <div className='footer-bottom'>
        <p>© 2025 Chaitanya Collection. All Rights Reserved.</p>
        <div className='footer-links'>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Disclaimer</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
