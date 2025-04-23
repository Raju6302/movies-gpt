import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
  name: 'movies',
  initialState : {
  nowPlayingMovies : null,
  movieTrailer : null,
  },
  reducers : {
    addMoviesPlayingList : (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMoviesTrailer : (state, action) => {
      state.movieTrailer = action.payload;
    }
  }

})

export const {addMoviesPlayingList, addMoviesTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;