import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getmovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.name === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getmovieVideos();
  }, []);
};
export default useMovieTrailer;
