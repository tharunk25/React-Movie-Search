import React, { createContext, useState, useEffect, useContext } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('movieWishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('movieWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (movie) => {
    setWishlist((prev) => {
      if (!prev.some((item) => item.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromWishlist = (movieId) => {
    setWishlist((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isInWishlist = (movieId) => {
    return wishlist.some((movie) => movie.id === movieId);
  };

  const toggleWishlist = (movie) => {
    if (isInWishlist(movie.id)) {
      removeFromWishlist(movie.id);
    } else {
      addToWishlist(movie);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
