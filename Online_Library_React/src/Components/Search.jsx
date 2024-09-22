/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    onSearch(searchTerm);
  }

  return (
    <div className="search-container">
      <input
        type="search"
        value={searchTerm}
        className="search-input"
        placeholder="Search Books"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <Link to="/add-book">
        <button className="add-button">Add Books</button>
      </Link>
    </div>
  );
}

export default Search;
