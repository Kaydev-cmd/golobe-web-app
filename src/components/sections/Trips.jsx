import React, { useEffect, useState } from "react";
import { FLIGHTS_AND_HOTELS_DATA, TRIPS_CARD_DATA } from "../../constants";
import TripsCard from "../common/TripsCard";
import FlightsAndHotelsCard from "../common/FlightsAndHotelsCard";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const Trips = () => {
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="flex flex-col justify-center gap-4">
        <div
          className="flex flex-col gap-2 text-center"
          style={{ marginBottom: "22px" }}
        >
          <h1 className="font-bold text-2xl">Plan your perfect trip</h1>
          <p className="text-slate-500">
            Search Flights & Places Hire to our most popular destinations.
          </p>
        </div>
        <div className="hidden">
          <Button title="See more places" variant="secondary" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {TRIPS_CARD_DATA.map((trip) => (
          <TripsCard
            key={trip.id}
            img={trip.image}
            title={trip.title}
            onClick={() => navigate(`/place/${trip.id}`)}
          />
        ))}
        <Button title="See more places" variant="secondary" />
      </div>

      <div className="grid grid-cols-1 gap-4" style={{ marginTop: "20px" }}>
        {FLIGHTS_AND_HOTELS_DATA.map((card) => (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trips;
