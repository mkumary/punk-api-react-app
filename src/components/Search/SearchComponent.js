import React, { Component } from "react";
import "../Search/SearchComponent.css";
import api from "../../api/api";
import SearchListComponent from "../SearchList/SearchListComponent";
import { LABEL, BUTTON_TEXT } from "../../constants/Constants";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchcat: "byname",
      searchText: "",
      searchResults: []
    };
  }
  onChangeSearchText(event) {
    this.setState({ searchText: event.target.value });
  }
  setSearchCategory(event) {
    console.log(event.target.value);
    this.setState({
      searchcat: event.target.value
    });
  }
  onSearch() {
    if (this.state.searchcat === "byname") {
      api.searchByName(this.state.searchText).then(response => {
        this.setState({ searchResults: response });
      });
    } else {
      api
        .searchByDescription(this.state.searchText.replace(/\s+/g, "_"))
        .then(response => {
          this.setState({ searchResults: response });
        });
    }
  }
  render() {
    return (
      <div className="search-section">
        <div className="search-input-container">
          <div className="search-text-container">
            <input
              type="search"
              onChange={this.onChangeSearchText.bind(this)}
            />
          </div>
          <div
            className="search-category-container"
            onChange={this.setSearchCategory.bind(this)}
          >
            <input type="radio" value="byname" name="searchkey" />{" "}
            {LABEL.BY_NAME}
            <input type="radio" value="bydisc" name="searchkey" />{" "}
            {LABEL.BY_DESCRIPTION}
          </div>
          <div className="search-action-container">
            <button onClick={this.onSearch.bind(this)}>
              {" "}
              {BUTTON_TEXT.SEARCH}
            </button>
          </div>
        </div>
        <SearchListComponent searchList={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchComponent;
