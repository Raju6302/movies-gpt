import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from './moviesSlice'

const appStore = configureStore({
  reducer : {
    user : userReducer,
    movies : nowPlayingMoviesReducer
  }
});

export default appStore;