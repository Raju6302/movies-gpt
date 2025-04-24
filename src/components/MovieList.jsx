import React from "react";
import MovieCard from "./MovieCard";

<<<<<<< HEAD
const MovieList = ({ title, movies }) => {
  if (movies == null) return <h1>Loading...</h1>;
  return (
    <div className="p-6 ">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-visible hover:overflow-auto">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
=======
const MovieList = ( {title, movies} ) => {
  console.log("data", movies);
  return (
    <div>
      <h1>{title}</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} poster={movie.poster_path} />
      ))}
>>>>>>> c639b6defb791e64e6c780fb422b81ff9f5f0d78
    </div>
  );
};

export default MovieList;
