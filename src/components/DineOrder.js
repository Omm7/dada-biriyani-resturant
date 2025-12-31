import React from 'react';
import '../styles/DineOrder.css';

const DineOrder = () => {
  return (
    <section id="dine-order" className="dine-order-section">
      <div className="section-header animate-on-scroll">
        <h2 className="section-title">Visit Us or Order Online</h2>
        <p className="section-subtitle">Experience our cozy cafe or enjoy at home</p>
      </div>

      <div className="dine-order-container">
        <div className="dine-order-card animate-on-scroll">
          <div className="card-icon">☕</div>
          <h3 className="card-title">Visit Our Cafe</h3>
          <p className="card-description">
            Step into our cozy aesthetic space perfect for coffee dates, work sessions, 
            or simply enjoying a peaceful moment with freshly baked treats.
          </p>
          <ul className="card-features">
            <li>✓ Cozy Seating</li>
            <li>✓ Free WiFi</li>
            <li>✓ Aesthetic Ambience</li>
            <li>✓ Great Coffee</li>
          </ul>
          <button className="card-btn">Find Us</button>
        </div>

        <div className="dine-order-card animate-on-scroll">
          <div className="card-icon">🚀</div>
          <h3 className="card-title">Order Online</h3>
          <p className="card-description">
            Get your favorite coffee, pastries, and treats delivered fresh to your doorstep. 
            Perfect for parties, meetings, or a cozy day at home!
          </p>
          <ul className="card-features">
            <li>✓ Fast Delivery</li>
            <li>✓ Fresh & Hot</li>
            <li>✓ Track Your Order</li>
            <li>✓ Special Packaging</li>
          </ul>
          <button className="card-btn">Order Now</button>
        </div>
      </div>

      <div className="timing-info animate-on-scroll">
        <div className="timing-card">
          <h4>🕐 Opening Hours</h4>
          <p>Monday - Sunday: 8:00 AM - 9:00 PM</p>
          <p>Open All Days | Average Cost: ₹300 - ₹500</p>
        </div>
      </div>
    </section>
  );
};

export default DineOrder;
