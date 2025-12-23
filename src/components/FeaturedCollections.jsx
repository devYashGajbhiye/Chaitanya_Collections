import React from 'react'
import "../styles/FeaturedCollections.css";

import festiveImg from "../assets/images/featured/festive.jpg";
import officeImg from "../assets/images/featured/office.jpeg";
import casualImg from "../assets/images/featured/casual.avif";

const collections = [
    {
        title: "Festive Edit",
        tagline: "Celebrate in timeless elegance",
        image: festiveImg,
        cta: "Shop Festive"
    },
    {
        title: "Office Essentials",
        tagline: "Sharp, Minimal, Confident",
        image: officeImg,
        cta: "Shop Office"
    },
    {
        title: "Casual Collection",
        tagline: "Relaxed styles for everyday wear",
        image: casualImg,
        cta: "Shop Casual"
    }
]

const FeaturedCollections = () => {
  return (
    <section className="featured-collections">
        <div className="featured-header">
            <h2>Featured Collections</h2>
            <p>Curated edits you'll love this season</p>
        </div>

        <div className='featured-grid'>
            {collections.map((item, index) => (
                <div className='featured-card' key={index}>
                    <img src={item.image} alt={item.title} />

                    <div className='featured-overlay'>
                        <h3>{item.title}</h3>
                        <p>{item.tagline}</p>
                        <button>{item.cta}</button>
                    </div>
                </div>    
            ))}
        </div>    
      
    </section>
  )
}

export default FeaturedCollections
