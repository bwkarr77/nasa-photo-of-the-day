import React from "react";
import ReactPlayer from "react-player";

const Main = props => {
  return (
    <article className="main">
      <div className="main-div">
        {/* IF (props.mediaType=== video....) */}
        {props.mediaType === "video" ? (
          // then do.....
          <ReactPlayer className="video" url={props.url} />
        ) : (
          // else do....
          <img src={props.url}></img>
        )}{" "}
        {/* end If statement */}
        <p>{props.explanation}</p>
      </div>
    </article>
  );
};

export default Main;
