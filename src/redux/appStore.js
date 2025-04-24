import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from './moviesSlice'
import gptSearchSlice from './gptSearchSlice';
import languageReducer from './languageConfigSlice';

const appStore = configureStore({
  reducer : {
    user : userReducer,
    movies : nowPlayingMoviesReducer,
    gptSearch : gptSearchSlice,
    language: languageReducer
  }
});

export default appStore;