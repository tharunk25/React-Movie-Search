import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import mockMovies from '../Movie Data/mockMovies';
import './Home.css';

const Home = () => {
  // Get top rated movies for the hero section
  const topMovies = [...mockMovies]
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .slice(0, 9);

  return (
    <div className="home-page page-transition">
      <section className="hero-section">
        <div className="hero-content container">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Discover Your Next <br />
              <span className="gradient-text">Favorite Movie</span>
            </h1>
            <p className="hero-subtitle">
              Explore a vast collection of movies, from timeless classics to the latest blockbusters. 
              Immerse yourself in the world of cinema.
            </p>
            <div className="hero-buttons">
              <Link to="/movies" className="btn-primary">
                Browse Movies <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary">
                <Play size={20} /> Watch Trailer
              </button>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="poster-grid">
              {topMovies.map((movie) => (
                <div key={movie.id} className="hero-poster-card">
                  <img 
                    src={movie.poster} 
                    alt={movie.title} 
                    className="hero-poster-img"
                  />
                </div>
              ))}
            </div>
            <div className="grid-overlay"></div>
          </div>
        </div>
        
        <div className="hero-background">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
        </div>
      </section>

      <section className="features-section container">
        <div className="section-header">
          <h2>Why Choose MovieVerse?</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon">🎬</div>
            <h3>Vast Library</h3>
            <p>Access thousands of movies from every genre imaginable.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon">⚡</div>
            <h3>Fast Search</h3>
            <p>Find what you're looking for instantly with our powerful search.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon">💎</div>
            <h3>Premium UI</h3>
            <p>Enjoy a beautiful, dark-themed interface designed for movie lovers.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
