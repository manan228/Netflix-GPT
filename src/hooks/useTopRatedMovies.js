import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  GET_TMDB_TOP_RATED_MOVIES_URL,
} from "../constants/TMDBConstants";
import { addTopRatedMovies } from "../utils/reducSlice/moviesSlice";
import axios from "axios";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = useCallback(async () => {
    const data = await axios.get(GET_TMDB_TOP_RATED_MOVIES_URL, API_OPTIONS);

    dispatch(addTopRatedMovies(data.data.results));
  }, [dispatch]);

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, [getTopRatedMovies, topRatedMovies]);
};

export default useTopRatedMovies;
