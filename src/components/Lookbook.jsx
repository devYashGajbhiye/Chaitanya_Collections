import React from 'react'
import '../styles/Lookbook.css'
import look1 from "../assets/images/lookbook/look1.webp";
import look2 from "../assets/images/lookbook/look2.jpeg";
import look3 from "../assets/images/lookbook/look3.avif";
import look4 from "../assets/images/lookbook/look4.webp";
import look5 from "../assets/images/lookbook/look5.jpeg";
import look6 from "../assets/images/lookbook/look6.webp";
import look7 from "../assets/images/lookbook/look7.jpg";
import look8 from "../assets/images/lookbook/look8.webp";
import look9 from "../assets/images/lookbook/look9.jpeg";
import look10 from "../assets/images/lookbook/look10.jpeg";
import look11 from "../assets/images/lookbook/look11.avif";
import look12 from "../assets/images/lookbook/look12.jpeg"; 

const images = [
  look1,
  look2,
  look3,
  look4,
  look5,
  look6,
  look7,
  look8,look9, look10, look11, look12
];
const Lookbook = () => {
  return (
     <section className="lookbook">
      <h2>Shop the Look</h2>
      <p>Follow us on Instagram @yourbrand</p>

      <div className="lookbook-grid">
        {images.map((img, index) => (
          <div
            className="lookbook-item slide-left"
            style={{ animationDelay: `${index * 0.15}s` }}
            key={index}
          >
            <img src={img} alt="Lookbook" />
            <div className="overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Lookbook
