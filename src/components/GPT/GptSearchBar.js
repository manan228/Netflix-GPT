import { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../../constants/languageConstants";
import useGPTSearch from "../../hooks/useGPTSearch";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const { handleGptSearchClick } = useGPTSearch(searchText);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 rounded-xl"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={() => handleGptSearchClick()}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
