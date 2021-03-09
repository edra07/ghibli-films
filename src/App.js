import React from "react";
import { render } from "react-dom";
import MovieResults from "./MovieResults";
const App = () => {
  return (
    <div>
      <MovieResults />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
