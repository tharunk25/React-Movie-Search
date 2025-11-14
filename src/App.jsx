import { React, useState, useEffect } from "react";
import mockMovies from "./Movie Data/mockMovies";
import "./App.css";
import MovieCards from "./Components/MovieCards";
import MovieModal from "./Components/MovieModal";
import Header from "./Components/Header";


//here we have created two variables that tells at the initial render of website it has to show only 20 movie cards items
//the remaining movies list cards items will be showed only when user click on the show more button it loads another 10
const movies_initial = 20;
const movies_per_load  = 10;

function App() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(movies_initial);
  const [modalmovie, setModalMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortYear, setSortYear] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMovies(mockMovies);
  },[]);
  console.log(movies);

  // write function  logic for showmorebutton to show more movies
  function handleMoreMovies() {
    setVisibleCount((prev) => prev + movies_per_load);
  }

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortYear === "asc") {
    filteredMovies.sort((a, b) => a.year - b.year);
  }else if (sortYear === "desc") {
    filteredMovies.sort((a, b) => b.year - a.year);
  }


  const displayedMovies = filteredMovies.slice(0,visibleCount);

  return (
    <div className={darkMode ? "app dark": "app"}>
      <Header 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      sortYear={sortYear}
      setSortYear={setSortYear}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      <main className="main-content">
        <div className="movie-list">
          {
            displayedMovies.map((movie) => (
              <MovieCards key={movie.id} movie={movie} openModal={setModalMovie}/>
            ))
          }
        </div>


      {/* here is the logic when show more button should appear on screen based on no of cards */}
      {
        visibleCount < movies.length && (
          <button className="show-more-btn" onClick={handleMoreMovies}>Show more</button>
        )
      }

      {
        modalmovie && <MovieModal movie={modalmovie} closeModal={() => setModalMovie(null)}/>
      }
      </main>
    </div>
  );
}

export default App;