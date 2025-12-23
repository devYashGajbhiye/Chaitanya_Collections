import React from "react";
import { useRef } from "react";
import "../styles/TrendingProducts.css";

// Images (replace with your real ones later)
import p1 from "../assets/images/trending/t1.webp";
import p2 from "../assets/images/trending/t2.webp";
import p3 from "../assets/images/trending/t3.webp";
import p4 from "../assets/images/trending/t4.webp";
import p5 from "../assets/images/trending/t5.webp";
import p6 from "../assets/images/trending/t6.webp";
import p7 from "../assets/images/trending/t7.jpg";

const trendingProducts = [
  {
    id: 1,
    name: "Linen Summer Shirt",
    image: p1,
    badge: "TRENDING",
    price: 2499,
    originalPrice: 3499
  },
  {
    id: 2,
    name: "Classic Cotton Kurta",
    image: p2,
    badge: "BEST SELLER",
    price: 1999,
    originalPrice: 2999
  },
  {
    id: 3,
    name: "Relaxed Fit Jeans",
    image: p3,
    badge: "TRENDING",
    price: 2799,
    originalPrice: 3799
  },
  {
    id: 4,
    name: "Minimal Maxi Dress",
    image: p4,
    badge: "BEST SELLER",
    price: 3199,
    originalPrice: 4199
  },
  {
    id: 5,
    name: "Organic Cotton Tee",
    image: p5,
    badge: "TRENDING",
    price: 1499,
    originalPrice: 2499
  },
  {
    id: 6,
    name: "Formal Linen Blazer",
    image: p6,
    badge: "BEST SELLER",
    price: 4599,
    originalPrice: 5599
  },
  {
    id: 7,
    name: "Printed Summer Kurti",
    image: p7,
    badge: "TRENDING",
    price: 2299,
    originalPrice: 3299
  }
];

const TrendingProducts = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="trending-products">
      <div className="trending-header">
        <h2>Trending Products</h2>

        <div className="slider-buttons">
          <button onClick={scrollLeft}>‹</button>
          <button onClick={scrollRight}>›</button>
        </div>
      </div>

      <div className="trending-slider" ref={sliderRef}>
        {trendingProducts.map((item) => (
          <div className="trending-card" key={item.id}>
            <div className="trending-image-wrapper">

              <span className="product-badge">{item.badge}</span>
              <img src={item.image} alt={item.name} />

              <div className="quick-view">
                Quick View
              </div>
            </div>
            <h4>{item.name}</h4>

            <div className="price-box">
                <span className="price">₹{item.price}</span>
                <span className="original-price">₹{item.originalPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
