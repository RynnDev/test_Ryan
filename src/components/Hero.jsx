import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Welcome to TechStore</h1>
        <p className="hero-description">
          Discover amazing products at unbeatable prices. Quality meets affordability in our curated collection.
        </p>
        <button className="btn btn-primary">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;