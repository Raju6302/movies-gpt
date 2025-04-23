import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ( {title, movies} ) => {
  console.log("data", movies);
  //here i am getting data in movies 
  return (
    <div>
      <h1>{title}</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} poster={movie.poster_path} />
        // here it's thowing error
      ))}
    </div>
  );
};

export default MovieList;