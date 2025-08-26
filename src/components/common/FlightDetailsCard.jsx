import React from "react";
import { FLIGHT_DETAILS_CARD_DATA } from "../../constants";

const FlightDetailsCard = ({
  returnDate,
  time,
  airlineImage,
  airlineName,
  aircraft,
  fromTime,
  fromLocation,
  toTime,
  toLocation,
}) => {
  return (
    <div className="card flex flex-col bg-white shadow-md rounded-lg gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Return {returnDate}</h1>
        <p className="text-slate-500">{time}</p>
      </div>
      <div>
        <div
          className="flex justify-center items-center gap-4 border border-green-600 rounded-lg"
          style={{ marginBottom: "32px", padding: "16px" }}
        >
          <img src={airlineImage} alt={airlineName} className="w-1/3" />
          <div>
            <h2 className="font-bold text-2xl">{airlineName}</h2>
            <p className="text-slate-500">{aircraft}</p>
          </div>
        </div>

        <div className="flex justify-around items-center">
          {FLIGHT_DETAILS_CARD_DATA[0].icons.map((icon, index) => (
            <img key={index} src={icon} alt={`icon-${index}`} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div>
          <p className="flex gap-2">
            <span className="font-bold">{fromTime}</span>
            <span className="font-semibold">{fromLocation}</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src="/assets/images/line_5.png" alt="Line" />
          <img src="/assets/logos/airplane_black.png" alt="Airplane" />
          <img src="/assets/images/line_6.png" alt="Line" />
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">{toTime}</span>
            <span className="font-semibold">{toLocation}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsCard;
