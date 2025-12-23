import React from 'react'
import '../styles/NewsletterBanner.css'
const NewsletterBanner = () => {
  return (
    <section className='newsletter slide-left'>
        <div className='newsletter-content'>
            <h2>Get 10% Off Your First Order</h2>
            <p>Subscribe to our newsletter for exclusive offers & updates.</p>
        
            <form className="newsletter-form">
                <input
                   type="email"
                   placeholder="Enter your email"
                   required
                />
                <button type="submit">Subscribe</button>
            </form>       
        
        </div>
      
    </section>
  )
}

export default NewsletterBanner
