import React from "react";
import { TRAILER_KEY_URL } from "../utils/constant";
import useTrailer from "../customHooks/useTrailer";

const VideoBackground = ({ id }) => {
  const movieTrailerKey = useTrailer(id);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={TRAILER_KEY_URL + movieTrailerKey?.key+ "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="autoplay"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
