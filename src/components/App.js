import { data } from "../data";
import NavBar from "./Navbar";
import MovieCard from "./Moviecard";
import { useEffect, useReducer } from "react";
import { addMovies } from "../actions";

function App(props) {
  //forceupdate is not recomended as testing purpose only we are using it
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    props.store.subscribe(() => {
      console.log(props.store.getState());
      forceUpdate();
    });

    props.store.dispatch(addMovies(data));
  }, [props.store]);

  const { movieList } = props.store.getState();
  console.log(movieList);
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="lists">
          {movieList.length !== 0
            ? movieList.map((movie, index) => (
                <MovieCard movie={movie} key={index} />
              ))
            : "wait"}
        </div>
      </div>
    </div>
  );
}

export default App;
