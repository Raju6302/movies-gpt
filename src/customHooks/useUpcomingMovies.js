
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMoviesList();
  }, []);

  const fetchNowPlayingMoviesList = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTIONS
    );
    const jsonMoviesData = await res.json();
    dispatch(addUpcomingMovies(jsonMoviesData.results));
  };
};

export default useUpcomingMovies;
