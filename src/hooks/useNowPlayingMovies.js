import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect, useCallback } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }, [dispatch]);
  console.log("NETLIFY TMDB KEY:", process.env.REACT_APP_TMDB_KEY);
  console.log("API OPTIONS:", API_OPTIONS);
  useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);
};
export default useNowPlayingMovies;
