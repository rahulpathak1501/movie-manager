import { data } from "../data";
import NavBar from "./Navbar";
import MovieCard from "./Moviecard";
import { useEffect, useReducer } from "react";
import { addMovies, showFavourites } from "../actions";

function App(props) {
  //forceupdate is not recomended as testing purpose only we are using it
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    props.store.subscribe(() => {
      forceUpdate();
    });

    props.store.dispatch(addMovies(data));
  }, [props.store]);

  const isMovieFavourite = (movie) => {
    const { movies } = props.store.getState();
    const favMovie = movies.favMovie;
    const index = favMovie.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  const movieIndex = (movie) => {
    const { movies } = props.store.getState();
    const favMovie = movies.favMovie;
    const index = favMovie.indexOf(movie);
    return index;
  };
  const onChangeTab = (val) => {
    props.store.dispatch(showFavourites(val));
  };

  const { movies, search } = props.store.getState();
  const { movieList, favMovie, showFavouriteMovie } = movies;
  const displayMovies = showFavouriteMovie ? favMovie : movieList;
  // console.log(displayMovies);
  return (
    <div className="App">
      <NavBar dispatch={props.store.dispatch} search={search} />
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${showFavouriteMovie ? "" : "active-tabs"}`}
            onClick={() => onChangeTab(false)}
          >
            Movies
          </div>
          <div
            className={`tab ${showFavouriteMovie ? "active-tabs" : ""}`}
            onClick={() => onChangeTab(true)}
          >
            Favourites
          </div>
        </div>

        <div className="lists">
          {displayMovies.length !== 0 ? (
            displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={props.store.dispatch}
                isFavourite={isMovieFavourite(movie)}
                indexOfMovie={movieIndex(movie)}
              />
            ))
          ) : (
            <div className="no-movies"> No Movies to Display </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
