import openai from "../config/openai";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/reducSlice/gptSlice";
import { searchMovieTMDB } from "../utils/movieSearchTMDB";

const useGPTSearch = (searchText) => {
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    if (!searchText.current.value) return;

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return { handleGptSearchClick };
};

export default useGPTSearch;
