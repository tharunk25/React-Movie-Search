import React, { useState, useEffect } from "react";
import mockMovies from "../Movie Data/mockMovies";
import MovieCards from "../Components/MovieCards";
import MovieModal from "../Components/MovieModal";
import SearchFilters from "../Components/SearchFilters";
import './AllMovies.css';

const movies_initial = 20;
const movies_per_load  = 10;

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(movies_initial);
  const [modalmovie, setModalMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortYear, setSortYear] = useState(null);

  useEffect(() => {
    setMovies(mockMovies);
  },[]);

  function handleMoreMovies() {
    setVisibleCount((prev) => prev + movies_per_load);
  }

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortYear === "asc") {
    filteredMovies.sort((a, b) => a.year - b.year);
  } else if (sortYear === "desc") {
    filteredMovies.sort((a, b) => b.year - a.year);
  }

  const displayedMovies = filteredMovies.slice(0,visibleCount);

  return (
    <div className="all-movies-page page-transition container">
      <h1 className="page-title gradient-text">Explore Movies</h1>
      
      <SearchFilters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        sortYear={sortYear}
        setSortYear={setSortYear}
      />

      <div className="movie-grid">
        {displayedMovies.map((movie) => (
          <MovieCards key={movie.id} movie={movie} openModal={setModalMovie}/>
        ))}
      </div>

      {visibleCount < filteredMovies.length && (
        <div className="load-more-container">
          <button className="btn-primary" onClick={handleMoreMovies}>Load More Movies</button>
        </div>
      )}

      {modalmovie && <MovieModal movie={modalmovie} closeModal={() => setModalMovie(null)}/>}
    </div>
  );
};

export default AllMovies;
