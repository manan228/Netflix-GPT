import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  GET_TMDB_NOW_PLAYING_MOVIES_URL,
} from "../constants/TMDBConstants";
import { addNowPlayingMovies } from "../utils/reducSlice/moviesSlice";
import axios from "axios";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = useCallback(async () => {
    const data = await axios.get(GET_TMDB_NOW_PLAYING_MOVIES_URL, API_OPTIONS);

    dispatch(addNowPlayingMovies(data.data.results));
  }, [dispatch]);

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, [getNowPlayingMovies, nowPlayingMovies]);
};

export default useNowPlayingMovies;
