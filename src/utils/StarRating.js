// src/StarRating.js
import React, { useState } from "react";

const StarRating = (props) => {
  console.log(props.rating);
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={index <= props.rating ? "star selected" : "star"}
          onClick={() => handleStarClick(index)}
        >
          ★
        </span>
      ))}
      <p>Rating: {props.rating}</p>
      <style>
        {`
          .star {
            font-size: 24px;
            cursor: pointer;
            color: gray;
          }
          
          .selected {
            color: gold;
          }
        `}
      </style>
    </div>
  );
};

export default StarRating;
