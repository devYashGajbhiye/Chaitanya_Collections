import React from "react";
import "../styles/NewArrivals.css";

const newArrivals = [
  {
    id: 1,
    title: "Essential Cotton Blazer",
    image: "/images/arrival1.jpg",
  },
  {
    id: 2,
    title: "Cotton Squareneck Cami",
    image: "/images/arrival2.jpg",
  },
  {
    id: 3,
    title: "Organic Linen Maxi Dress",
    image: "/images/arrival3.jpg",
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
