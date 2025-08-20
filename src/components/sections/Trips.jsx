import React, { useEffect, useState } from "react";
import { FLIGHTS_DATA, HOTELS_DATA, TRIPS_CARD_DATA } from "../../constants";
import TripsCard from "../common/TripsCard";
import FlightsAndHotelsCard from "../common/FlightsAndHotelsCard";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const Trips = () => {
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <div
          className="flex flex-col gap-2 text-center md:text-start"
          style={{ marginBottom: "22px" }}
        >
          <h1 className="font-bold text-2xl">Plan your perfect trip</h1>
          <p className="text-slate-500">
            Search Flights & Places Hire to our most popular destinations.
          </p>
        </div>
        <div className="hidden md:flex">
          <Button title="See more places" variant="secondary" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TRIPS_CARD_DATA.map((trip) => (
          <TripsCard
            key={trip.id}
            img={trip.image}
            title={trip.title}
            onClick={() => navigate(`/place/${trip.id}`)}
          />
        ))}
      </div>
      <div
        className="flex justify-center md:hidden"
        style={{ marginTop: "20px" }}
      >
        <Button title="See more places" variant="secondary" />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        style={{ marginTop: "20px" }}
      >
        {FLIGHTS_DATA.map((card) => (
          <div
            key={card.title}
            className="card bg-center bg-no-repeat bg-cover rounded-lg"
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
            }}
          >
            <FlightsAndHotelsCard
              title={card.title}
              description={card.description}
            />
            <div className="flex justify-center" style={{ marginTop: "20px" }}>
              <Button
                title="Show Flights"
                variant="primary"
                onClick={() => navigate("/flights")}
              />
            </div>
          </div>
        ))}

        {HOTELS_DATA.map((card) => (
          <div
            key={card.title}
            className="card bg-center bg-no-repeat bg-cover rounded-lg"
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
            }}
          >
            <FlightsAndHotelsCard
              title={card.title}
              description={card.description}
            />
            <div className="flex justify-center" style={{ marginTop: "20px" }}>
              <Button
                title="Show Hotels"
                variant="primary"
                onClick={() => navigate("/stays")}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trips;
