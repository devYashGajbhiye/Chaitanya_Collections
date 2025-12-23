import React from "react";
import "../styles/NewArrivals.css";
import arrival1 from "../assets/images/Arrivals/arrival1.avif";
import arrival2 from "../assets/images/Arrivals/arrival2.avif";
import arrival3 from "../assets/images/Arrivals/arrival3.avif"; 


const newArrivals = [
  {
    id: 1,
    title: "Essential Cotton Blazer",
    image: arrival1,
  },
  {
    id: 2,
    title: "Cotton Squareneck Cami",
    image: arrival2,
  },
  {
    id: 3,
    title: "Organic Linen Maxi Dress",
    image: arrival3,
  },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <h2 className="section-title">New Arrivals</h2>

      <div className="arrival-grid">
        {newArrivals.map((item) => (
          <div className="arrival-card" key={item.id}>
            <div className="arrival-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="arrival-title">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
