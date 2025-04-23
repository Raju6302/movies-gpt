import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMoviesPlayingList } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMoviesList();
  }, []);

  const fetchNowPlayingMoviesList = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonMoviesData = await res.json();
    // console.log(jsonMoviesData.results)
    dispatch(addMoviesPlayingList(jsonMoviesData.results));
  };
};

export default useNowPlayingMovies;
