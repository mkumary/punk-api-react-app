import React from "react";
import ReactDOM from "react-dom";
import SearchComponent from "../Search/SearchComponent";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
