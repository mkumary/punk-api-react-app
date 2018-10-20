import React, { Component } from "react";
import "../SearchList/SearchList.css";
import SearchListItemComponent from "../SearchItem/SearchListItemComponent";

class SearchListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createList(searchList) {
    return (
      searchList &&
      searchList.map(ele => {
        return (
          <li key={ele.id}>
            <SearchListItemComponent searchItem={ele} />
          </li>
        );
      })
    );
  }
  render() {
    return (
      <div className="search-list-container">
        <ul>{this.createList(this.props.searchList)}</ul>
      </div>
    );
  }
}

export default SearchListComponent;
