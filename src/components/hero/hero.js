import React from 'react';
import './hero.css';  // lowercase

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Capturing Your Perfect Moments</h1>
        <p>Professional wedding photography that tells your unique love story</p>
        <button className="cta-button">Book a Consultation</button>
      </div>
    </div>
  );
}

export default Hero;