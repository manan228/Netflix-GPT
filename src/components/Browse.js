import { useSelector } from "react-redux";
import useGetMovies from "../hooks/useGetMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const movies = useSelector((store) => store.movies);

  useGetMovies();

  return (
    <>
      <MainContainer movies={movies.nowPlayingMovies} playButton={true} />
      <SecondaryContainer movies={movies} />
    </>
  );
};
export default Browse;
