import React from "react";
import logo from "../../assets/img/Rick and morty-png-circle.png"
import "./header.css";

function Header ()
{
  return (
    <header>
      <div className="header__img-wrapper">
        <img src={logo} alt="" />
      </div>
    </header>  
  )
}

export { Header };