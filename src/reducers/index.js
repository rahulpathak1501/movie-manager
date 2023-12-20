import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SHOW_FAVOURITES,
  ADD_MOVIE_LIST,
  ADD_SEARCH_RESULT,
} from "../actions";

const intialMovieState = {
  movieList: [],
  favMovie: [],
  showFavouriteMovie: false,
};

export function movies(state = intialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movieList: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favMovie: [action.movie, ...state.favMovie],
      };
    case REMOVE_FAVOURITE:
      const filteredArray = state.favMovie.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favMovie: filteredArray,
      };
    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavouriteMovie: action.val,
      };
    case ADD_MOVIE_LIST:
      return {
        ...state,
        movieList: [action.movie, ...state.movieList],
      };
    // case ADD_SEARCH_RESULT:

    default:
      return state;
  }
}

const intialSearchResult = {
  result: {},
  showSearchResult: false,
};

export function search(state = intialSearchResult, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResult: true,
      };
    case ADD_MOVIE_LIST:
      return {
        ...state,
        showSearchResult: false,
      };
    default:
      return state;
  }
}

// const intialRootState = {
//   movies: intialMovieState,
//   search: intialSearchResult,
// };

// export default function rootReducer(state = intialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
