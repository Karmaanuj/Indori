
import React from 'react';
import "./New.css";

function App() {
  return (
    <div className="food-section">
      <div className="food-left">
        <h1 className="logo">Indori</h1>
        <div className="food-image-container">
          <img src="/path/to/food-image.jpg" alt="Indori Special Food" className="food-image" />
          <div className="arrows">
            <span>&larr;</span> <span>&rarr;</span>
          </div>
        </div>
      </div>

      <div className="food-right">
        <h1 className="title">INDORI SPECIAL FOOD</h1>
        <p className="description">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...
        </p>
        <div className="buttons">
          <button className="contact-btn">CONTACT US</button>
          <button className="order-btn">ORDER NOW</button>
        </div>
      </div>

      <div className="vertical-text">
        <p>Good Food</p>
      </div>
    </div>
  );
}

export default App;

