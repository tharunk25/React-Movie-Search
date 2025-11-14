import React from 'react';
import "./MovieCards.css";

const MovieCards = ({ movie,openModal }) => {
  return (
    <div className="movie-card" onClick={() => openModal(movie)}>
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.rating}</p>
    </div>
  );
}

export default MovieCards;