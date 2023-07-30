import React from 'react';
import "./Card.css"

const Card = ({emoji, heading}) => {
  return (
    <div className="card">
        <img src={emoji} alt=""/>
        <span>{heading}</span>
    </div>
  );
};

export default Card;