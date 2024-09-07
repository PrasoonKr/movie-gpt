import React from "react";
import { IMG_CDN } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-52 pr-4 hover:opacity-80">
      <img src={IMG_CDN + posterPath} alt="movie_card"></img>
    </div>
  );
};

export default MovieCard;
