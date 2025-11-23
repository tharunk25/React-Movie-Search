import React from 'react';
import { Star } from 'lucide-react';
import './MovieCards.css';

const MovieCards = ({ movie, openModal }) => {
  return (
    <div className="movie-card" onClick={() => openModal(movie)}>
      <div className="card-image-wrapper">
        <img 
          src={movie.poster !== "N/A" ? movie.poster : "https://via.placeholder.com/400x600?text=No+Poster"} 
          alt={movie.title} 
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/400x600/1a1a2e/ffffff?text=${encodeURIComponent(movie.title)}`;
          }}
        />
        <div className="card-overlay">
          <button className="view-btn">View Details</button>
        </div>
      </div>
      <div className="card-content">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-info">
          <span className="movie-year">{movie.year}</span>
          <div className="movie-rating">
            <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
            <span>{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;