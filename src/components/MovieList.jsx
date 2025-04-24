import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ( {title, movies} ) => {
  console.log("data", movies);
  return (
    <div>
      <h1>{title}</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} poster={movie.poster_path} />
      ))}
    </div>
  );
};

export default MovieList;
