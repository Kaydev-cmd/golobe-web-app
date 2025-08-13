import React from "react";
import Button from "./Button";

const FlightsAndHotelsCard = ({ title, description }) => {
  return (
    <div className="flex flex-col text-center justify-end gap-3 text-white h-92">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>{description}</p>
      <Button title={`Show ${title}`} />
    </div>
  );
};

export default FlightsAndHotelsCard;
