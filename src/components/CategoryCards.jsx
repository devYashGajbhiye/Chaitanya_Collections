import React from "react";
import "../styles/CategoryCards.css";

// Images
import menImg from "../assets/images/categories/men.jpeg";
import womenImg from "../assets/images/categories/women.jpeg";
import kidsImg from "../assets/images/categories/kids.jpeg";


const categories = [
  {
    title: "Men",
    tagline: "Smart • Casual • Festive",
    image: menImg
  },
  {
    title: "Women",
    tagline: "Elegant • Trendy • Traditional",
    image: womenImg
  },
  {
    title: "Kids",
    tagline: "Cute • Comfortable • Fun",
    image: kidsImg
  }
];
        
const CategoryCards = () => {
   return (
  <section className="category-section">

  <div className="category-header">
    <h2>Shop by Category</h2>
    <p>Curated styles for Men, Women & Kids</p>
  </div>

  <div className="category-split">
  {categories.map((cat, index) => (
    <div className="category-block" key={index}>
      <img src={cat.image} alt={cat.title} />

      <div className="category-content">
        <h2>{cat.title}</h2>
        <p>{cat.tagline}</p>
        <a href="#">Shop {cat.title} →</a>
      </div>
    </div>
  ))}
  </div>

  </section>
  );
};

export default CategoryCards;
