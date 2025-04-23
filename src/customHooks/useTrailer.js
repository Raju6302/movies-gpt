import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TRAILER_END_URL, TRAILER_START_URL } from "../utils/constant";
import { addMoviesTrailer } from "../redux/moviesSlice";

const useTrailer = (id) => {
  const dispatch = useDispatch();
  const movieTrailerKey = useSelector((store) => store.movies?.movieTrailer);
  useEffect(() => {
    fetchMoviesTrailer();
  }, [id]);

  const fetchMoviesTrailer = async () => {
    const res = await fetch(
     TRAILER_START_URL + id + TRAILER_END_URL,
      API_OPTIONS
    );
    const jsonData = await res.json();
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addMoviesTrailer(trailer));
  };

  return movieTrailerKey;
};

export default useTrailer;