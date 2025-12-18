import React, { useEffect, useState } from 'react';;
import '../styles/HeroBanner.css';

//images
import festiveBanner from "../assets/images/banner/festive-collection.jpeg";
import winterBanner from "../assets/images/banner/winter-styles.jpg";
import kidsBanner from "../assets/images/banner/kids-special.webp";


const banners = [
    {
        id: 1,
        title: "Festive Collection 2025",
        subtitle: "Celebrate in Style with Our Exclusive Festive Wear",
        button: "Shop Now",
        image: festiveBanner
    },
    {
        id: 2,
        title: "New Winter Styles",
        subtitle: "Fresh fashion for Men & Women",
        button: "Explore",
        image: winterBanner
    },
    {
        id: 3,
        title: "Kids Special",
        subtitle: "Trendy & Comfortable Clothing for Kids",
        button: "Shop Now",
        image: kidsBanner
    }
];


const HeroBanner = () => {
    const [current, setCurrent] = useState(0);

    //Auto Slide Effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent + 1) % banners.length);
        }, 4000);   
        
        return () => clearInterval(timer);
    }, []);
  
     return (
        <div className="hero-banner">
            {banners.map((banner, index) => (
                <div                                                                                        
                    key={banner.id}
                    className={`slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${banner.image})` }}
                >
                    <div className="overlay">
                        <h1>{banner.title}</h1>
                        <p>{banner.subtitle}</p>
                        <button>{banner.button}</button>
                    </div>
                </div>
            ))}

         {/* Navigation Dots */}

         <div className="dots">
            {banners.map((_, index) => (
                <span
                    key={index}
                    className={`dot ${index === current ? "active" : ""}`}
                    onClick={() => setCurrent(index)}
                ></span>
            ))}   
      </div>
    </div>
    );
};

export default HeroBanner
