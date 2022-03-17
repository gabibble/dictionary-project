import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data);
    console.log(response.data[0].word);
    console.log(response.data[0].meanings[0].partOfSpeech);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    console.log(response.data[0].meanings[0].definitions[0].example);
  }

  // documentation: https://dictionaryapi.dev/

  function search(event) {
    event.preventDefault();
    //let apiUrl = `https://dictionaryapi.com/api/v3/references/learners/json/${keyword}?key=4089a2b7-0b47-46c4-b9d6-6156ac70ea9d`;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
      <Results results={results} />
    </div>
  );
}
