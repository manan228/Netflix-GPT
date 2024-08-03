import { NETFLIX_POSTER } from "../../constants/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 inset-0">
        <img className="w-full h-screen object-cover" src={NETFLIX_POSTER} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
