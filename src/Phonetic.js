import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        {"  "}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          listen
        </a>
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }
}
