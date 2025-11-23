import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page page-transition container">
      <div className="about-content glass-panel">
        <h1 className="gradient-text">About MovieVerse</h1>
        <p>
          Welcome to MovieVerse, your ultimate destination for discovering movies. 
          Our platform is designed to provide movie enthusiasts with a seamless and 
          visually stunning experience to explore their favorite films.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          To bring the world of cinema to your fingertips with a modern, fast, and 
          user-friendly interface. We believe that finding a good movie should be 
          as enjoyable as watching one.
        </p>

        <h2>The Team</h2>
        <p>
          Built with passion by movie lovers, for movie lovers. We utilize the latest 
          web technologies to ensure you have the best experience possible.
        </p>
      </div>
    </div>
  );
};

export default About;
