import React from "react";
import { Link } from "react-router-dom";
import CardWrapper from "../UI/Wrapper/CardWrapper";
import Card from "./Card";

import "./Card.scss";

export default function CardItem({charactersList}) {
  return (
    <div className="card-container">
      {charactersList.map(({id, name, image, species}) => (
        <CardWrapper>
          <Link className="card-link" to={`${id}`}>
            <Card
              key={id}
              image={image}
              name={name}
              species={species}
            />
          </Link>
        </CardWrapper>
      ))}
    </div>
  );
}
