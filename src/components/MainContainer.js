import { useEffect } from "react";
import VideoBackground from "./video/VideoBackground";
import VideoTitle from "./video/VideoTitle";

const MainContainer = ({ movies, playButton, setShowMovieDetails }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle
        title={original_title}
        overview={overview}
        playButton={playButton}
        setShowMovieDetails={setShowMovieDetails}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
