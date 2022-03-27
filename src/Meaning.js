import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 2) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>

              <div className="example">
                <em>{definition.example}</em>
              </div>

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
