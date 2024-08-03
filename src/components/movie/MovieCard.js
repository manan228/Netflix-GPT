import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants/TMDBConstants";

const MovieCard = ({ movie, posterPath }) => {
  const navigate = useNavigate();

  if (!posterPath) return null;

  const onMovieClickHandler = () => {
    console.log(movie);
    navigate("/browse/movie", { state: movie });
  };

  return (
    <div className="w-36 md:w-48 pr-4" onClick={onMovieClickHandler}>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
