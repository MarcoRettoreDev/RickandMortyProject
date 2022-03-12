import React from "react";
import "./footer.css";

function Footer ()
{
  return(
    <footer className="footer__wrapper">
      <div className="footer__select-wrapper">
        <p>Jump: </p>
        <select name="" id="">
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
      <div className="footer__page-wrapper">
        <p>Page: </p>
        <span>5</span>
      </div>
    </footer>
  )
};

export { Footer };