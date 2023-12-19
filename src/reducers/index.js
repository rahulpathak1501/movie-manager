import { ADD_MOVIES } from "../actions";

const intialMovieState = {
  movieList: [],
  favMovie: [],
};

export default function movies(state = intialMovieState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      movieList: action.movies,
    };
  }
  return state;
}
