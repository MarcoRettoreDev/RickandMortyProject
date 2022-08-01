import React from "react";

const SearchBar = ({filterCharacters}) =>
{
  return (
    <div className="searchbar__wrapper">
      <input className="searchbar__wrapper-input" onChange={filterCharacters} type="text" placeholder="Search character on page" />
    </div>
  )
}

export { SearchBar };