import { addFavourite, removeFavourite } from "../actions";

function MovieCard({ movie, dispatch, isFavourite, indexOfMovie }) {
  const handleFavClick = () => {
    dispatch(addFavourite(movie));
  };

  const handleUnFavClick = () => {
    dispatch(removeFavourite(movie));
  };

  // console.log(isFavourite);

  return (
    <div className="movie-card">
      <div className="search-container">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot"> {movie.Plot} </div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>

            {isFavourite ? (
              <button className="unfavourite-btn" onClick={handleUnFavClick}>
                Unfavourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={handleFavClick}>
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
