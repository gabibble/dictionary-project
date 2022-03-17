import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 2) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
                <br />
                <strong>Example: </strong>
                <em>{definition.example}</em>
                <br />
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        } else {
          return null;
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}

/*  

<p>{props.meaning.definitions[0].definition}</p>
      <em>{props.meaning.definitions[0].example}</em>

      

  */
