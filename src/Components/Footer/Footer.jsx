import React, { useState } from "react";
import arrowImg from '../../assets/svg/left-arrow-back.svg'
import "./footer.css";

function Footer ({page, setPage})
{
  
  return(
    <footer className="footer__wrapper">
      <div className="footer__select-wrapper">
        <select name="" id="select-list" className="select-element" onChange={null}>
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
      <div className="footer__buttons_wrapper">
        <img className="button_prev" onClick={() => {if (page > 1) setPage(page - 1) }} src={arrowImg}></img>
        <img className="button_next" onClick={() => {if (page < 42) setPage(page + 1) }} src={arrowImg}></img>
      </div>
      <div className="footer__page-wrapper">
        <p>Page: </p>
        <span>{page}</span>
      </div>
    </footer>
  )
};

export { Footer };