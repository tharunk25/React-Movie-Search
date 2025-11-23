import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import MovieCards from '../Components/MovieCards';
import MovieModal from '../Components/MovieModal';
import { Heart } from 'lucide-react';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const [modalMovie, setModalMovie] = React.useState(null);

  return (
    <div className="wishlist-page page-transition container">
      <h1 className="page-title gradient-text">My Wishlist</h1>
      
      {wishlist.length === 0 ? (
        <div className="empty-wishlist glass-panel">
          <Heart size={64} className="empty-icon" />
          <h2>Your wishlist is empty</h2>
          <p>Start exploring movies and add them to your wishlist!</p>
        </div>
      ) : (
        <div className="movie-grid">
          {wishlist.map((movie) => (
            <MovieCards key={movie.id} movie={movie} openModal={setModalMovie} />
          ))}
        </div>
      )}

      {modalMovie && <MovieModal movie={modalMovie} closeModal={() => setModalMovie(null)} />}
    </div>
  );
};

export default Wishlist;
