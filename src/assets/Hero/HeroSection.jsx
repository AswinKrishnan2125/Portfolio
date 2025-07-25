import React from 'react';
import './HeroSection.css';
import profilePic from '../Images/profile.png'; // Replace with your image

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="image">
          <img src={profilePic} alt="Aswin Krishnan R" />
        </div>
        <div className="text">
          <h1>Hi, I'm <span>Aswin Krishnan R</span></h1>
          <p>Web Developer </p>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
