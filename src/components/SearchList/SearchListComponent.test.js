import React from "react";
import ReactDOM from "react-dom";
import SearchListComponent from "../SearchList/SearchListComponent";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchListComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
