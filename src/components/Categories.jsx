import React from 'react'
import '../styles/Categories.css'

const Categories = () => {
  return (
       <section className="categories-section" id="categories">
      <h2 className="categories-title">Our Categories</h2>

      <div className="categories-container">
        <div className="category-card">
          <h3>Women’s Clothing</h3>
          <p>Trendy and comfortable outfits for all occasions.</p>
        </div>

        <div className="category-card">
          <h3>Men’s Clothing</h3>
          <p>Stylish wear designed for everyday and festive use.</p>
        </div>

        <div className="category-card">
          <h3>Kids’ Clothing</h3>
          <p>Soft, colorful and playful clothing for kids.</p>
        </div>
      </div>
    </section>
  )
}

export default Categories
