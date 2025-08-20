import React from "react";
import { LuDot } from "react-icons/lu";

const TripsCard = ({ img, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="card bg-white flex items-center gap-3 rounded-xl shadow-md transition-transform hover:scale-105 cursor-pointer"
    >
      <img src={img} alt={title} className="w-1/3 rounded-lg" />
      <div className="flex flex-col gap-1">
        <h1 className="text-slate-500 font-semibold">{title}</h1>
        <div className="flex items-center">
          <p>Flights</p>
          <LuDot />
          <p>Hotels</p>
          <LuDot />
          <p>Resorts</p>
        </div>
      </div>
    </div>
  );
};

export default TripsCard;
