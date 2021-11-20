import React from "react";
import Card from "./Card.js";

const CardList = (props) => {
  return (
    <div id="container" className="mt-10">
      {props.cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default CardList;
