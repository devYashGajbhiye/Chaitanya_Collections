import React from "react";
import "../styles/WhyShopWithUs.css";
import { FiTruck, FiShield, FiRefreshCw, FiCreditCard } from "react-icons/fi";

const features = [
  {
    icon: <FiTruck />,
    title: "Free & Fast Delivery",
    description: "Quick delivery on all orders across India",
  },
  {
    icon: <FiShield />,
    title: "Premium Quality",
    description: "Carefully curated fabrics & craftsmanship",
  },
  {
    icon: <FiRefreshCw />,
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days",
  },
  {
    icon: <FiCreditCard />,
    title: "Secure Payments",
    description: "100% safe and trusted payment methods",
  },
];


const WhyShopWithUs = () => {
  return (
    <section className="why-shop">
        <div className="why-header">
            <h2>Why Shop With Us</h2>
            <p>Quality, trust & style - everything you deserve</p>
        </div>

        <div className="why-grid">
            {features.map((item, index) => (
                <div className="why-card" key={index}>
                    <div className="why-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>      
    </section>
  )
}

export default WhyShopWithUs
