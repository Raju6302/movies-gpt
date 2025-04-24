import React from "react";
import { MOVIE_CARD } from "../utils/constant";

const MovieCard = ({poster}) => {
  return (
    <div className="w-48 pr-4">
      <img
        className="cursor-pointer"
        alt="movie card"
        src={MOVIE_CARD + poster}
      />
    </div>
  );
};

export default MovieCard;
