import { useCallback, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  GET_TMDB_MOVIE_TRAILER,
} from "../constants/TMDBConstants";
import { addTrailerVideo } from "../utils/reducSlice/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = useCallback(async () => {
    const data = await axios.get(
      GET_TMDB_MOVIE_TRAILER.first_part +
        movieId +
        GET_TMDB_MOVIE_TRAILER.second_part,
      API_OPTIONS
    );

    const filterData = data.data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : data.data.results[0];
    dispatch(addTrailerVideo(trailer));
  }, [dispatch, movieId]);

  useEffect(() => {
    getMovieVideos();
  }, [getMovieVideos]);
};

export default useMovieTrailer;
