import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_LOGO } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 w-screen object-cover h-screen">
        <img src={BG_LOGO} alt="bg_logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
