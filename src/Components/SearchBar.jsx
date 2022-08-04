import React, { useContext } from "react";
import { useEffect } from "react";
import { ActionTypes } from '../Helpers/ActionTypes';
import { myContext } from "../Helpers/UseContext";

const SearchBar = () =>
{
  const { state, dispatch } = useContext(myContext);
  
  const updateSearchCharacters = e => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.SET_SEARCH_INPUT,
      payload: e.target.value
    });
  }

  useEffect(() => {
    if(state.searchInput === ''){
      dispatch({type: ActionTypes.SET_PAGE, payload: 1});
    }
  } , [state.searchInput])

  return (
    <div className="searchbar__wrapper">
      <input className="searchbar__wrapper-input" onChange={(e) => updateSearchCharacters(e)} type="text" placeholder="Search..." value={state.searchInput} />
    </div>
  )
}

export { SearchBar };