import React from "react";
import mySvg from "../../assets/svg/menu.svg";
import "./navbar.css";

const NavBar = () =>
{
  return (
    <nav className="navbar__wrapper">
      <input className="navbar__wrapper-input" type="text" placeholder="Search character" />
      <img className="navbar-icon-burger" src={mySvg} alt="Icon menu mobile" />
    </nav>
  )
}

export { NavBar };