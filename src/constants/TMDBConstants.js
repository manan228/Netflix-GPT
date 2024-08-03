export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SEARCH_TMDB_MOVIEURL = {
  first_part: "https://api.themoviedb.org/3/search/movie?query=",
  second_part: "&include_adult=false&language=en-US&page=1",
};

export const GET_TMDB_UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const GET_TMDB_TRENDING_MOVIES_URL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export const GET_TMDB_TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const GET_TMDB_POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const GET_TMDB_NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const GET_TMDB_MOVIE_TRAILER = {
  first_part: "https://api.themoviedb.org/3/movie/",
  second_part: "/videos?language=en-US",
};
