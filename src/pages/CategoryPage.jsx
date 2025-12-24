import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/CategoryPage.css'

const CategoryPage = () => {
  const { category, subCategory } = useParams()

  const [products, setProducts] = useState([])
  const [priceFilter, setPriceFilter] = useState('')
  const [sortBy, setSortBy] = useState('')

  const categoryTitles = {
    men: "Men's Collection",
    women: "Women's Collection",
    kids: "Kids Collection",
    stylehub: "Style Hub",
    bargains: "Best Bargains",
    luxe: "Luxury Collection"
  }

  useEffect(() => {
    fetchProducts(category, subCategory)
  }, [category, subCategory])

  const fetchProducts = (category, subCategory) => {
    // Mock data (later replace with API)
    setProducts([
      { id: 1, name: 'Cotton Shirt', price: 999 },
      { id: 2, name: 'Denim Jeans', price: 1999 },
      { id: 3, name: 'Casual T-Shirt', price: 499 },
      { id: 4, name: 'Formal Blazer', price: 2999 },
      { id: 5, name: 'Ethnic Kurta', price: 1499 }
    ])
  }

  const filteredProducts = products
    .filter(product => {
      if (!priceFilter) return true
      if (priceFilter === 'low') return product.price < 1000
      if (priceFilter === 'mid')
        return product.price >= 1000 && product.price <= 2000
      if (priceFilter === 'high') return product.price > 2000
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'lowToHigh') return a.price - b.price
      if (sortBy === 'highToLow') return b.price - a.price
      return 0
    })

  return (
    <div className="category-page">
      <h1>
        {categoryTitles[category] || 'Collections'}
        {subCategory && ` / ${subCategory}`}
      </h1>

      <p className="category-subtitle">
        Showing products for <strong>{category}</strong>
        {subCategory && ` → ${subCategory}`}
      </p>

      <div className="category-layout">
        {/* Filters */}
        <div className="filters">
          <h3>Filters</h3>

          <div className="filter-group">
            <label>Price</label>
            <select onChange={e => setPriceFilter(e.target.value)}>
              <option value="">All</option>
              <option value="low">Below ₹1000</option>
              <option value="mid">₹1000 - ₹2000</option>
              <option value="high">Above ₹2000</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Sort By</label>
            <select onChange={e => setSortBy(e.target.value)}>
              <option value="">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">Image</div>
                <h4>{product.name}</h4>
                <p className="price">₹{product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
