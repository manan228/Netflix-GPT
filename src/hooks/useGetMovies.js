import useNowPlayingMovies from "./useNowPlayingMovies";
import usePopularMovies from "./usePopularMovies";
import useTopRatedMovies from "./useTopRatedMovies";
import useTrendingMovies from "./useTrendingMovies";
import useUpcomingMovies from "./useUpcomingMovies";

const useGetMovies = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
};

export default useGetMovies;
