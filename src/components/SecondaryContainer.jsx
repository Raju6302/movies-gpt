import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-50 pl-12 relative z-20">
        <MovieList title={"Now Playing Movies"} movies={movies} />
        <MovieList title={"Upcoming Movies"} movies={upComingMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
