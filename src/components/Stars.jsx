import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, idx) => {
    const number = idx + 0.5;
    return (
      <span key={idx}>
        {stars >= idx + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  console.log(tempStars, stars);
  return <div>{tempStars}</div>;
};

export default Stars;
