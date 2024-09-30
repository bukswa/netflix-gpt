import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const result = await response.json();

    dispatch(addNowPlayingMovies(result?.results));
  };

  useEffect(() => {
    (async () => getNowPlayingMovies())();
  }, []);
};

export default useNowPlayingMovies;
