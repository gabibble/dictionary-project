import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
                <small>
                  Photo by{" "}
                  <a
                    href={photo.photographer_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {photo.photographer}
                  </a>
                </small>
              </div>
            );
          })}
        </div>
        <p className="source mt-3">
          {" "}
          Photos provided by{" "}
          <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
            {" "}
            Pexels
          </a>
        </p>
      </section>
    );
  } else {
    return null;
  }
}
