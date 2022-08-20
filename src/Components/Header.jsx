import { useState, useContext, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import { myContext } from '../Helpers/UseContext';
import { ActionTypes } from "../Helpers/ActionTypes";

import logo from "../assets/icons/Logo_660x600.png";
import { SearchBar } from "../Components/SearchBar";
import { Link } from 'react-router-dom'; 

const Header = () =>{
  const { dispatch } = useContext(myContext);
  const [open, setOpen] = useState(false);

  const windowWidth = window.innerWidth;

  const resetState = () => {
    dispatch({type: ActionTypes.SET_SEARCH_INPUT, payload: ""});
    dispatch({type: ActionTypes.SET_PAGE, payload: 1});
  }

  const variants = {
    open: {
      opacity: 1,
      x:0,
    },
    closed: {
      opacity: 0, 
      x:'-20vh',
    }
  }
  
  const divRef = useRef(null); 
  
  useEffect(() => {
    const computed = window
    .getComputedStyle(divRef.current)
    .getPropertyValue("display");

    if (computed === "none") {
      setOpen(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to={`${process.env.PUBLIC_URL}`}>
          <img src={logo} alt="Logo rick and morty" className="navbarLogo"/>
        </Link>
        <button ref={divRef} onClick={()=> setOpen(!open)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <motion.div className="collapse navbar-collapse" id="navbarSupportedContent"
          animate= {open ? 'open' : 'closed'}
          variants={variants}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={`${process.env.PUBLIC_URL}`} className="nav-link" aria-current='page' onClick={resetState}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`${process.env.PUBLIC_URL}/characters`} className="nav-link" aria-current='page' onClick={resetState}>
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`${process.env.PUBLIC_URL}/episodes`} className="nav-link" aria-current='page' onClick={resetState}>
                Episodes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`${process.env.PUBLIC_URL}/locations`} className="nav-link" aria-current='page' onClick={resetState}>
                Locations
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-auto" role="search">
            <SearchBar/>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export { Header };