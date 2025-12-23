import React from 'react'
import '../styles/AboutHero.css';
const AboutHero = () => {
  return (
    <section className="about-hero">
        <div className='about-hero-overlay'></div>

        <div className="about-hero-content">
           <span className='about-badge'>Since Quality Matters</span>
           <h1>Chaitanya Collections</h1>
           <p>
              A one-stop destination for stylish, comfortable, and affordable
              clothing for women, men, and kids.     
           </p>    
        </div>      
    </section>
  )
}

export default AboutHero
