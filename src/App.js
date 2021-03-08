import React from "react";
import { render } from "react-dom";

const Movie = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Studio Ghibli"),
    React.createElement("h1", {}, "Movie"),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Studios Ghibli"),
    React.createElement(Movie),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
