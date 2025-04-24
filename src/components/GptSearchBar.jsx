import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openAI";

const GptSearchBar = () => {
  const changeLanguage = useSelector((store) => store.language.lang);
  const searchText = useRef(null);

  const handleSearchGpt = async () => {
    console.log(searchText.current.value)

    const searchQuery ="Act as a movie Recommendation system and suggest some movies for the query: "+ searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Salaar, Saaho, Darling, kalki 289 AD, Bahubali";
    
    const getResults = await openai.chat.completions.create({
      messages: [{role: "user", content: searchQuery}],
      model: "gpt-3.5-turbo",
    })
    console.log(getResults.choices)
  }
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-white border"
          placeholder={lang[changeLanguage].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer" onClick={handleSearchGpt}>
          {lang[changeLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
