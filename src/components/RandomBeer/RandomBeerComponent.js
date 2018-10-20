import React, { Component } from "react";
import api from "../../api/api";
import "../RandomBeer/RandomBeer.css";
import { PLACEHOLDERS, BUTTON_TEXT } from "../../constants/Constants";

class RandomBeerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: this.props.randomBeer
    };
    this.getRandomBeers = this.getRandomBeers.bind(this);
    this.getRandomNonAlcoholicBeer = this.getRandomNonAlcoholicBeer.bind(this);
    this.getRandomBeerHTML = this.getRandomBeerHTML.bind(this);
  }
  getRandomBeers() {
    api.getRandomBeer().then(response => {
      this.setState({ randomBeer: response[0] });
    });
  }
  getRandomNonAlcoholicBeer() {
    api.getRandomNonAlcoholicBeer().then(response => {
      this.setState({ randomBeer: response[0] });
    });
  }
  getRandomBeerHTML(randomBeer) {
    if (randomBeer) {
      return (
        <div className="random-beer-info">
          <div className="random-beer-info-left">
            <h4>
              {randomBeer.name ? randomBeer.name : PLACEHOLDERS.PLACEHOLDER}
            </h4>
            <img
              src={
                randomBeer.image_url
                  ? randomBeer.image_url
                  : PLACEHOLDERS.DUMMY_IMAGE_URL
              }
              alt="Beer"
            />
          </div>
          <div className="random-beer-info-right">
            <p className="beerDesc">{randomBeer.description}</p>
          </div>
        </div>
      );
    } else {
      this.getRandomBeers();
    }
  }

  render() {
    return (
      <div className="random-beer-section">
        <div className="random-beer-section-left">
          {this.getRandomBeerHTML(this.state.randomBeer)}
        </div>
        <div className="random-beer-section-right">
          <button onClick={this.getRandomBeers}>
            {BUTTON_TEXT.ANOTHER_BEER}
          </button>
          <button
            className="non-alcoholic-btn"
            onClick={this.getRandomNonAlcoholicBeer}
          >
            {BUTTON_TEXT.RANDOM_NON_ALCOHOLIC_BEER}
          </button>
        </div>
      </div>
    );
  }
}

export default RandomBeerComponent;
