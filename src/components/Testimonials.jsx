import React, {useEffect, useState} from 'react'
import '../styles/Testimonials.css'



const testimonials = [
  {
    name: "Akshay Patil",
    city: "Pune",
    review:
      "Amazing quality and fitting. I ordered festive wear and it exceeded my expectations.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    review:
      "Loved the collection for women. Stylish designs and very comfortable fabric.",
  },
  {
    name: "Rohit Kulkarni",
    city: "Nagpur",
    review:
      "Fast delivery and great customer service. Definitely shopping again!",
  },
  {
    name: "Neha Joshi",
    city: "Nashik",
    review:
      "Perfect outfits for daily wear. Affordable prices and premium feel.",
  },
];


const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(timer);
    },[]);
  return (
    <section className="testimonials">
        <div className="testimonial-header">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from happy customers</p>
        </div>

       <div className="testimonial-slider">
      {testimonials.map((item, index) => (
    <div
      className={`testimonial-card ${
        index === current ? "active" : ""
      }`}
      key={index}
    >
      <p className="quote">“{item.review}”</p>
      <h4>{item.name}</h4>
      <span>{item.city}</span>
    </div>
  ))}
</div>


       <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
      
    </section>
  )
}

export default Testimonials
