import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(ev) => ev.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        placeholder="Search Items"
        role="searchbox"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
    </form>
  );
};

export default SearchItem;
