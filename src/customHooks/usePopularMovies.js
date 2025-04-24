import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMoviesList();
  }, []);

  const fetchNowPlayingMoviesList = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonMoviesData = await res.json();
    dispatch(addPopularMovies(jsonMoviesData.results));
  };
};

export default usePopularMovies;
