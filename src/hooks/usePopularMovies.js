import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  GET_TMDB_POPULAR_MOVIES_URL,
} from "../constants/TMDBConstants";
import { addPopularMovies } from "../utils/reducSlice/moviesSlice";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = useCallback(async () => {
    const data = await axios.get(GET_TMDB_POPULAR_MOVIES_URL, API_OPTIONS);

    dispatch(addPopularMovies(data.data.results));
  }, [dispatch]);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [getPopularMovies, popularMovies]);
};

export default usePopularMovies;
