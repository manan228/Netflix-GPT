import MovieList from "./movie/MovieList";

const SecondaryContainer = ({ movies }) => {

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-80 pl-4 md:pl-12 relative z-20 pb-8">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
