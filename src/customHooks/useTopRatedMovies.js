import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMoviesList();
  }, []);

  const fetchNowPlayingMoviesList = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    );
    const jsonMoviesData = await res.json();
    dispatch(addTopRatedMovies(jsonMoviesData.results));
  };
};

export default useTopRatedMovies;
