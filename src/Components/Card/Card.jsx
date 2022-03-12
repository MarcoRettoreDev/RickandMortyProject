import React from "react";
import './card.css';

const Card = (props) =>
{
  return(
    <article className="main__card-wrapper">
      <div className="card-img-wrapper">
        <img src={props.img}></img>
      </div>
      <div className="card-text-wrapper">
        <div className="card-body-header">
          <h3>{props.name}</h3>
          <p>{props.status}</p>
        </div>
        <div className="card-body-title">
          <h4>Specie</h4>
          <p>{props.specie}</p>
        </div>
        <div className="card-body-text">
          <h4>Dimension</h4>
          <p>{props.dimension}</p>
        </div>
      </div>
    </article>
  )
}

export { Card };