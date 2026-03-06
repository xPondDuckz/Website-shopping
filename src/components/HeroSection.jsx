import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Zara Collection Campaign" 
          className="hero-image"
        />
        {/* Subtle dark overlay for ensuring text legibility if needed, but Zara often keeps it raw */}
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        {/* Many Zara hero sections just let the clothes speak, but sometimes there's a title and CTA */}
        <div className="hero-actions">
          <button className="hero-btn">SHOP COLLECTION</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
