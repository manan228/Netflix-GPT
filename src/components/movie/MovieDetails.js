import { useLocation } from "react-router-dom";
import MainContainer from "../MainContainer";
import MovieDetailsContainer from "./MovieDetailsContainer";
import { useState } from "react";

const MovieDetails = () => {
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const { state } = useLocation();

  return (
    <>
      {!showMovieDetails && (
        <MainContainer
          movies={[state]}
          playButton={false}
          setShowMovieDetails={setShowMovieDetails}
        />
      )}
      {showMovieDetails && <MovieDetailsContainer movieDetails={state} setShowMovieDetails={setShowMovieDetails} />}
    </>
  );
};

export default MovieDetails;
