import React from "react";
import ReactStars from "react-rating-stars-component";
const Rating = (props) => {
  return (
    <ReactStars
      count={5}
      size={24}
      value={props.rating}
      isHalf={true}
      edit={false}
      activeColor="#ffd700"
    />
  );
};

export default Rating;
