import React from "react";

const Main = props => {
  return (
    <article className="main">
      <div className="main-div">
        <img src={props.url}></img>
        <p>{props.explanation}</p>
      </div>
    </article>
  );
};

export default Main;
