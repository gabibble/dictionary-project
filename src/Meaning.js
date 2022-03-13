import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definitions[0].definition}</p>
      <em>{props.meaning.definitions[0].example}</em>
    </div>
  );
}

/*  

{
    props.meaning.definitions.map(function (definition, index) {
      return (
        <div key={index}>
          <p>
            {definition.definition}
            <br />
            <em>{definition.example}</em>
          </p>
        </div>
      );
    });
  }

  */
