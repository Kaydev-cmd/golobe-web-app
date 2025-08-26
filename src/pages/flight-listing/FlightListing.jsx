import React from "react";
import FlightListingCard from "../../components/common/FlightListingCard";
import { IoIosArrowDown } from "react-icons/io";
import { FLIGHT_LISITING_DATA } from "../../constants";
import Button from "../../components/common/Button";

const FlightListing = () => {
  return (
    <section className="container">
      <div
        className="flex justify-between items-center text-sm"
        style={{ marginBottom: "24px" }}
      >
        <p>
          Showing 4 of <span className="text-[#FF8682]">257 places</span>
        </p>
        <div className="flex items-center gap-1 cursor-pointer">
          <p>
            Sort by <span>Recommended</span>
          </p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FLIGHT_LISITING_DATA.map((flight) => (
          <FlightListingCard
            image={flight.image}
            alt={flight.alt}
            rating={flight.rating}
            reviews={flight.reviews}
            price={flight.price}
            time={flight.time}
            from={flight.from}
            to={flight.to}
          />
        ))}
      </div>
      <div
        className="flex justify-center items-center"
        style={{ marginTop: "32px" }}
      >
        <Button title="View More Details" variant="secondary" />
      </div>
    </section>
  );
};

export default FlightListing;
