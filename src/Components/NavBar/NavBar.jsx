import React, { useState } from "react";
import arrowImg from '../../assets/svg/left-arrow-back.svg'
import "./navbar.css";

function NavBar ({page, setPage})
{
  
  return(
    <nav className="navbar__wrapper">
      <div className="navbar__select-wrapper">
        <div className="dropup">
          <button className="dropbtn">Jump</button>
          <div className="dropup-content">
            <a href="#" onClick={() =>setPage(10)}>Page 10</a>
            <a href="#" onClick={() =>setPage(20)}>Page 20</a>
            <a href="#" onClick={() =>setPage(30)}>Page 30</a>
            <a href="#" onClick={() =>setPage(40)}>Page 40</a>
          </div>
        </div>
      </div>
      <div className="navbar__buttons_wrapper">
        <img className="button_prev" onClick={() => {if (page > 1) setPage(page - 1) }} src={arrowImg}></img>
        <img className="button_next" onClick={() => {if (page < 42) setPage(page + 1) }} src={arrowImg}></img>
      </div>
      <div className="navbar__page-wrapper">
        <p>Page:</p>
        <span>{page}</span>
      </div>
    </nav>
  )
};

export { NavBar };