import React, { useContext } from "react";
import { myContext } from '../Helpers/UseContext';
import { ActionTypes } from "../Helpers/ActionTypes";

import logo from "../assets/icons/Logo_660x600.png";
import { SearchBar } from "../Components/SearchBar";
import { Link } from 'react-router-dom'; 

const Header = () =>{
  const { dispatch } = useContext(myContext);

  const resetState = () => {
    dispatch({type: ActionTypes.SET_SEARCH_INPUT, payload: ""});
    dispatch({type: ActionTypes.SET_PAGE, payload: 1});
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo rick and morty" className="navbarLogo"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link" aria-current='page' onClick={resetState}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/characters' className="nav-link" aria-current='page' onClick={resetState}>
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/episodes' className="nav-link" aria-current='page' onClick={resetState}>
                Episodes
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/locations' className="nav-link" aria-current='page' onClick={resetState}>
                Locations
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-auto" role="search">
            <SearchBar/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export { Header };