import React from "react";
import ReactDOM from "react-dom";
import RandomBeerComponent from "../RandomBeer/RandomBeerComponent";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RandomBeerComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const randomBeer = {};
  const div = document.createElement("div");
  ReactDOM.render(<RandomBeerComponent randomBeer={randomBeer} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
