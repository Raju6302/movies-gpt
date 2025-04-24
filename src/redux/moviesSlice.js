import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
  name: 'movies',
  initialState : {
  nowPlayingMovies : null,
  popularMovies: null,
  topRatedMovies: null,
  upComingMovies: null,
  movieTrailer : null,
  },
  reducers : {
    addMoviesPlayingList : (state, action) => {
      state.nowPlayingMovies = action.payload;
    }, 
    addPopularMovies : (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies : (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies : (state, action) => {
      state.upComingMovies = action.payload;
    },
    addMoviesTrailer : (state, action) => {
      state.movieTrailer = action.payload;
    }
  }

})

export const {addMoviesPlayingList, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMoviesTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;