import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FLIGHT_DETAILS_CARD_DATA, FLIGHT_DETAILS_DATA } from "../../constants";
import Button from "./Button";
import { FaLocationDot } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import FlightDetailsCard from "./FlightDetailsCard";

const FlightDetails = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundFlight = FLIGHT_DETAILS_DATA.find(
      (flight) => flight.id === parseInt(id, 10)
    );

    if (!foundFlight) {
      setError("Flight not found");
    } else {
      setFlight(foundFlight);
    }
    setLoading(false);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="container">
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex justify-between items-center lg:justify-between">
            <h1 className="text-3xl font-semibold">{flight.title}</h1>
            <p className="font-bold text-2xl text-[#FF8682]">${flight.price}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2 text-sm">
              <FaLocationDot /> {flight.location}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div
                  className="cursor-pointer border border-green-600 rounded-lg w-1/8 text-center"
                  style={{ padding: "4px" }}
                >
                  {flight.rating}
                </div>
                <p className="text-sm">
                  <span className="font-bold">Very Good</span> {flight.reviews}{" "}
                  reviews
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div
                className="cursor-pointer border border-green-600 rounded-lg flex justify-center items-center"
                style={{ padding: "4px" }}
              >
                <CiHeart size={30} />
              </div>
              <div
                className="cursor-pointer border border-green-600 rounded-lg flex justify-center items-center"
                style={{ padding: "4px" }}
              >
                <IoMdShare size={30} />
              </div>
            </div>
            <Button title="Book Now" variant="secondary" />
          </div>
        </div>
        {flight.image && (
          <div>
            <img
              src={flight.image}
              alt={flight.title}
              className="w-full lg:w-full rounded-lg"
            />
          </div>
        )}

        {/* Basic Economy Features */}
        <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-bold text-2xl">Basic Economy Features</h2>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Economy</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>First Class</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Business Class</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {flight.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={flight.title}
              className="w-1/6 lg:w-1/14"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLIGHT_DETAILS_CARD_DATA.map((flight) => (
            <FlightDetailsCard
              key={flight.id}
              returnDate={flight.returnDate}
              time={flight.time}
              airlineImage={flight.airlineImage}
              airlineName={flight.airlineName}
              aircraft={flight.aircraft}
              fromTime={flight.fromTime}
              fromLocation={flight.fromLocation}
              toTime={flight.toTime}
              toLocation={flight.toLocation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
