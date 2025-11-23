import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Film, Search, Heart } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <Film className="logo-icon" />
          <span className="logo-text">Movie<span className="gradient-text">Verse</span></span>
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/movies" className={`nav-link ${isActive('/movies') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>All Movies</Link>
          <Link to="/wishlist" className={`nav-link ${isActive('/wishlist') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Wishlist</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
