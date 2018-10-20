import React from "react";
import ReactDOM from "react-dom";
import RandomBeerComponent from "../RandomBeer/RandomBeerComponent";
import { PLACEHOLDERS } from "../../constants/Constants";

describe("render RandomBeer component without passing props", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RandomBeerComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
describe("render RandomBeer component with passing props as empty {}", () => {
  it("renders without crashing", () => {
    const randomBeer = {};
    const div = document.createElement("div");
    ReactDOM.render(<RandomBeerComponent randomBeer={randomBeer} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("render RandomBeer component with passing props as non empty {}", () => {
  it("renders without crashing", () => {
    const randomBeer = {
      name: "BearName",
      image_URL: PLACEHOLDERS.image_URL,
      description: "Beer Description"
    };
    const div = document.createElement("div");
    ReactDOM.render(<RandomBeerComponent randomBeer={randomBeer} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

/* TODO this test is is giving some error due to some configuration issues hence commented
describe("testing getRandomBeers", () => {
  it("test if state changes", async () => {
    const wrapper = await shallow(<RandomBeerComponent />);
    wrapper.update();
    expect(wrapper.state.randomBeer.length).toBeGreaterThan(0);
  });
});
*/
