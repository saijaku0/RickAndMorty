import React from "react";

import "./Card.scss";

export default function Card({id, name, image, species}) {
  return (
    <div className="card" key={id}>
      <div className="card-header">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <h1>{name}</h1>
        <h2>{species}</h2>
      </div>
    </div>
  );
}
