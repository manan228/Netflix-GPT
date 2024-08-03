import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  GET_TMDB_TRENDING_MOVIES_URL,
} from "../constants/TMDBConstants";
import { addTrendingMovies } from "../utils/reducSlice/moviesSlice";
import axios from "axios";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const getTrendingMovies = useCallback(async () => {
    const data = await axios.get(GET_TMDB_TRENDING_MOVIES_URL, API_OPTIONS);

    dispatch(addTrendingMovies(data.data.results));
  }, [dispatch]);

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, [getTrendingMovies, trendingMovies]);
};

export default useTrendingMovies;
