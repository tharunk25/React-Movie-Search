import React from "react";
import { Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import "./App.css";

function App() {
  return (
    <WishlistProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<AllMovies />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </WishlistProvider>
  );
}

export default App;