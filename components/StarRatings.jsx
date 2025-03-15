"use client";
import React from "react";

const StarRating = ({ rating = 4.5, size = 10 }) => {
  return (
    <div className="flex items-center gap-[1px] md:gap-[2px]">
  {[...Array(5)].map((_, index) => {
    const isFull = rating >= index + 1;
    const isHalf = rating > index && rating < index + 1;

    return (
      <svg
        key={index}
        className="w-[15px] h-[15px] md:w-[15px] md:h-[15px]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Half Star Gradient */}
        <defs>
          <linearGradient id={`halfStar-${index}`}>
            <stop offset="50%" stopColor="#f1c40f" />
            <stop offset="50%" stopColor="lightgray" />
          </linearGradient>
        </defs>

        {/* Star Shape */}
        <path
          d="M12 .587l3.668 7.568L24 9.432l-6 5.865 1.412 8.235L12 18.897l-7.412 4.635L6 15.297 0 9.432l8.332-1.277z"
          fill={isFull ? "#f1c40f" : isHalf ? `url(#halfStar-${index})` : "lightgray"}
        />
      </svg>
    );
  })}
</div>

  );
};

export default StarRating;
