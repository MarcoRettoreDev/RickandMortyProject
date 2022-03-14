import React from "react";
import './card.css';

const Card = ({name, img, status ,specie, dimension}) =>
{
  
  return(
    <article className="main__card-wrapper">
      <div className="card-img-wrapper">
        <img src={img}></img>
      </div>
      <div className="card-text-wrapper">
        <div className="card-body-header">
          <h3>{name}</h3>
          <p className="status">{status}</p>
        </div>
        <div className="card-body-title">
          <h4>Specie</h4>
          <p>{specie}</p>
        </div>
        <div className="card-body-text">
          <h4>Dimension</h4>
          <p>{dimension}</p>
        </div>
      </div>
    </article>
  )
}

export { Card };