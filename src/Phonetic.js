import React from "react";
import "./Phonetic.css";
import audio from "./audio.png";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        {"  "}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <img src={audio} className="audio" alt="listen" />
        </a>
      </div>
    );
  } else {
    return <div className="Phonetic">{props.phonetic.text}</div>;
  }
}
