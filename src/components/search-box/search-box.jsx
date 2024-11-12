import React from "react";
import "./search-box.css";
/*class SearchBox extends React.Component {
  render() {
    return (
      <input
        className="search-box"
        id="email"
        name="email"
        type="search"
        placeholder="Search Monsters"
      />
    );
  }
}*/

const SearchBox = (props) => {
  return (
    <input
      className="search-box"
      id="email"
      name="email"
      type="search"
      placeholder="Search Monsters"
      value={props.searchField}
      onChange={props.onSearchChange}
    />
  );
};

export default SearchBox;
