import React, { Component } from "react";
import "./App.css";
import api from "./api/api";
import RandomBeerComponent from "./components/RandomBeer/RandomBeerComponent";
import SearchComponent from "./components/Search/SearchComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: null
    };
  }
  render() {
    return (
      <div className="App">
        <RandomBeerComponent randomBeer={this.state.randomBeer} />
        <SearchComponent />
      </div>
    );
  }
  componentWillMount() {
    api.get("/beers/random").then(response => {
      this.setState({ randomBeer: response[0] });
    });
  }
}

export default App;
