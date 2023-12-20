import { addMovieToList, handleMovieSearch } from "../actions";
import { useState } from "react";

function NavBar({ dispatch, search }) {
  console.log(search.result);
  const movie = search.result;
  //console.log(movie.Search.map((e) => e));
  const showSearchResult = search.showSearchResult;
  const [searchText, setSearchText] = useState("");

  const handleAddMovies = (movie) => {
    dispatch(addMovieToList(movie));
  };
  const handleSearch = () => {
    dispatch(handleMovieSearch(searchText));
  };

  return (
    <div className="nav">
      <div className="search-container">
        <input onChange={(e) => setSearchText(e.target.value)} />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>

        {showSearchResult && (
          <div className="search-results">
            <div className="search-result">
              <img src={movie.Poster} alt="search-pic" />

              <div className="movie-info">
                <span>{movie.Title}</span>
                <button onClick={() => handleAddMovies(movie)}>
                  Add Movie
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
