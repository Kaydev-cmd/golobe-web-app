import React from "react";

const FallIntoTravelCard = ({ title, description, price }) => {
  return (
    <div className="flex flex-col justify-end gap-3 text-white h-92">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
        <p className="font-bold text-3xl">{price}</p>
      </div>
    </div>
  );
};

export default FallIntoTravelCard;
