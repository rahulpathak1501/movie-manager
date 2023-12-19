// {
//type: "ADD_MOVIES",
//movie: [{name: "superman"}]
/*action*/
// }

//action type
export const ADD_MOVIES = "ADD_MOVIES";

//action creator
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
