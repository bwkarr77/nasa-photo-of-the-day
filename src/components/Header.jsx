import React from "react";

const Header = props => {
  return (
    <header className="App-header">
      <h1>Nasa Pic of Day</h1>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
    </header>
  );
};

export default Header;
