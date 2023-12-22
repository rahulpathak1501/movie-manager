import { data } from "../data";
import NavBar from "./Navbar";
import MovieCard from "./Moviecard";
import { useEffect } from "react";
import { addMovies, showFavourites } from "../actions";
import { connect } from "react-redux";

function App(props) {
  //console.log(props.movies);

  const { dispatch } = props;
  useEffect(() => {
    dispatch(addMovies(data));
  }, [dispatch]);

  const isMovieFavourite = (movie) => {
    const { movies } = props;
    const favMovie = movies.favMovie;
    const index = favMovie.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  const movieIndex = (movie) => {
    const { movies } = props;
    const index = movies.favMovie.indexOf(movie);
    return index;
  };
  const onChangeTab = (val) => {
    props.dispatch(showFavourites(val));
  };

  //const { movies } = props.movies;
  const { movieList, favMovie, showFavouriteMovie } = props.movies;
  const displayMovies = showFavouriteMovie ? favMovie : movieList;
  // console.log(displayMovies);
  return (
    <div className="App">
      <NavBar />
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
                dispatch={props.dispatch}
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

// function AppWrapper() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => <App props={store} />}
//     </StoreContext.Consumer>
//   );
// }

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}

export default connect(mapStateToProps)(App);
