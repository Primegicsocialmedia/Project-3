import React from "react";

const Star = ({ index, rating, setRating }) => {
  const handleClick = () => {
    setRating(index + 1);
  };

  return (
    <div>
      <i
        className={`bx ${rating >= index + 1 ? "bxs-star" : "bx-star"}
          text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-green-400`}
        onClick={handleClick}
      ></i>
    </div>
  );
};

export default Star;
