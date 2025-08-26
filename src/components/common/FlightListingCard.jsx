import React from "react";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";

const FlightListingCard = ({
  image,
  alt,
  rating,
  reviews,
  price,
  time,
  from,
  to,
}) => {
  return (
    <div className="card flex flex-col bg-white shadow-md rounded-lg">
      <div className="flex justify-center items-center">
        <img src={image} alt={alt} className="w-1/2" />
      </div>
      <div className="border-b" style={{ marginTop: "32px" }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div
              className="border border-green-600 rounded-lg"
              style={{ padding: "4px 8px" }}
            >
              {rating}
            </div>
            <p className="flex flex-col ">
              <span className="font-bold">Very Good</span>
              {reviews} reviews
            </p>
          </div>
          <div>
            <p className="text-slate-500">starting from</p>
            <p className="text-end font-bold text-2xl text-[#FF8682]">
              ${price}
            </p>
          </div>
        </div>

        <div
          className="flex justify-between items-center"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          <input type="checkbox" />
          <div className="flex justify-around items-start w-full">
            <div>
              <p>{time}</p>
              <p className="text-slate-500">{from}</p>
            </div>
            <div>
              <p>2h 28m</p>
              <p className="text-slate-500">{to}</p>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between items-center"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          <input type="checkbox" />
          <div className="flex justify-around items-start w-full">
            <div>
              <p>{time}</p>
              <p className="text-slate-500">{from}</p>
            </div>
            <div>
              <p>2h 28m</p>
              <p className="text-slate-500">{to}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between items-center"
        style={{ marginTop: "16px" }}
      >
        <div
          className="text-3xl cursor-pointer border border-green-600 rounded-lg"
          style={{ padding: "4px" }}
        >
          <CiHeart />
        </div>
        <div>
          <Button title="View Deals" />
        </div>
      </div>
    </div>
  );
};

export default FlightListingCard;
