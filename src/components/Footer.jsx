import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
   <footer className="footer">
      <div className="footer-container">


        <div className='footer-brand'>
          <h3>Chaitanya Collection</h3>
          <p>
            Chaitanya Collection is your ine-stop destination for stylish and 
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
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>STLYE HUB</li>
            <li>BARGAINS</li>
            <li>LUXE</li>
          </ul>
        </div>


        <div className="footer-col">
          <h5>STORE AND SITES</h5>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
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
          <span>/Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Disclaimer</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
