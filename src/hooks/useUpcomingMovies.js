import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  GET_TMDB_UPCOMING_MOVIES_URL,
} from "../constants/TMDBConstants";
import { addUpcomingMovies } from "../utils/reducSlice/moviesSlice";
import axios from "axios";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = useCallback(async () => {
    const data = await axios.get(GET_TMDB_UPCOMING_MOVIES_URL, API_OPTIONS);

    dispatch(addUpcomingMovies(data.data.results));
  }, [dispatch]);

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, [getUpcomingMovies, upcomingMovies]);
};

export default useUpcomingMovies;
