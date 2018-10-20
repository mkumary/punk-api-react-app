import React, { Component } from "react";
import "../SearchItem/SearchItem.css";
import { PLACEHOLDERS } from "../../constants/Constants";

class SearchListItemComponent extends Component {
  render() {
    return (
      <div className="search-list-item-container">
        <div className="search-item-image">
          <img
            src={
              this.props.searchItem && this.props.searchItem.image_url
                ? this.props.searchItem.image_url
                : PLACEHOLDERS.DUMMY_IMAGE_URL
            }
            alt="beer"
          />
        </div>
        <div className="search-item-info">
          <div className="beerName">
            {this.props.searchItem
              ? this.props.searchItem.name
              : PLACEHOLDERS.PLACEHOLDER}
          </div>
          <div className="beerDesc">
            {this.props.searchItem
              ? this.props.searchItem.description
              : PLACEHOLDERS.PLACEHOLDER}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchListItemComponent;
