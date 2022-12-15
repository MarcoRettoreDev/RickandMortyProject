import React, { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ActionTypes } from "../Helpers/ActionTypes";
import { ROUTES } from "../Helpers/routesIndex";
import { myContext } from "../Helpers/UseContext";

const SearchBar = () => {
  const { state, dispatch } = useContext(myContext);
  let location = useLocation();
  const updateSearchCharacters = (e) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.SET_SEARCH_INPUT,
      payload: e.target.value,
    });
  };

  const checkDisable = () => {
    if (
      location.pathname.includes("rickandmorty/location/") ||
      location.pathname.includes("rickandmorty/episode/")
    )
      return true;
  };

  useEffect(() => {
    if (state.searchInput === "") {
      dispatch({ type: ActionTypes.SET_PAGE, payload: 1 });
    }
  }, [state.searchInput]);

  return (
    <div className="searchbar__wrapper">
      <input
        disabled={checkDisable()}
        className="searchbar__wrapper-input"
        onChange={(e) => updateSearchCharacters(e)}
        type="text"
        placeholder="Search..."
        value={state.searchInput}
      />
    </div>
  );
};

export { SearchBar };
