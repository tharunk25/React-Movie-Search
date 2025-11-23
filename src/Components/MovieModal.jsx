import React from 'react';
import { X, Star, Calendar, Film, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import './MovieModal.css';

const MovieModal = ({ movie, closeModal }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  if (!movie) return null;

  const isWishlisted = isInWishlist(movie.id);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          <X size={24} />
        </button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img 
              src={movie.poster !== "N/A" ? movie.poster : "https://via.placeholder.com/400x600?text=No+Poster"} 
              alt={movie.title} 
            />
          </div>
          
          <div className="modal-details">
            <h2 className="modal-title">{movie.title}</h2>
            
            <div className="modal-meta">
              <div className="meta-item">
                <Calendar size={16} className="meta-icon" />
                <span>{movie.year}</span>
              </div>
              <div className="meta-item">
                <Star size={16} className="meta-icon star" fill="#fbbf24" stroke="#fbbf24" />
                <span>{movie.rating}/10</span>
              </div>
            </div>
            
            <div className="modal-overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            
            <div className="modal-actions">
              <button className="btn-primary watch-btn">
                <Film size={18} /> Watch Now
              </button>
              
              <button 
                className={`btn-secondary wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => toggleWishlist(movie)}
              >
                <Heart size={18} fill={isWishlisted ? "#ef4444" : "none"} stroke={isWishlisted ? "#ef4444" : "currentColor"} /> 
                {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;