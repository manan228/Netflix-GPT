import axios from "axios";
import { API_OPTIONS, SEARCH_TMDB_MOVIEURL } from "../constants/TMDBConstants";

export const searchMovieTMDB = async (movie) => {
  const data = await axios.get(
    SEARCH_TMDB_MOVIEURL.first_part + movie + SEARCH_TMDB_MOVIEURL.second_part,
    API_OPTIONS
  );

  return data.data.results;
};
