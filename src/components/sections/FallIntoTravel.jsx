import React from "react";
import { FALL_INTO_TRAVEL_DATA, GALLERY_IMAGES } from "../../constants";
import FallIntoTravelCard from "../common/FallIntoTravelCard";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import Subscribe from "../common/Subscribe";

const FallIntoTravel = () => {
  const navigate = useNavigate();

  return (
    <section className="container" style={{ paddingTop: "0" }}>
      <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <div
          className="flex flex-col gap-2 text-center md:text-start"
          style={{ marginBottom: "16px" }}
        >
          <h1 className="font-bold text-2xl">Fall into travel</h1>
          <p className="text-slate-500">
            Going somewhere to celebrate this season? Whether you're going home
            or somewhere to roam, we've got the travel tools to get you to your
            destination.
          </p>
        </div>
        <div className="hidden md:flex">
          <Button title="See All" variant="secondary" />
        </div>

        {FALL_INTO_TRAVEL_DATA.map((card) => (
          <div
            key={card.id}
            className="card bg-center bg-no-repeat bg-cover rounded-lg"
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
            }}
          >
            <FallIntoTravelCard
              title={card.title}
              description={card.description}
              price={card.price}
            />
            <div className="flex justify-center" style={{ marginTop: "20px" }}>
              <Button
                title="Book Flight"
                variant="primary"
                onClick={() => navigate("/flight-listing")}
              />
            </div>
          </div>
        ))}
      </div>

      <section className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <div
          className="flex flex-col gap-2 text-center md:text-start"
          style={{ marginBottom: "16px" }}
        >
          <h1 className="font-bold text-2xl">Fall into travel</h1>
          <p className="text-slate-500">
            Going somewhere to celebrate this season? Whether you're going home
            or somewhere to roam, we've got the travel tools to get you to your
            destination.
          </p>
        </div>
        <div className="hidden md:flex">
          <Button title="See All" variant="secondary" />
        </div>

        <div>
          {/* Card */}
          <div className="card bg-[#8DD3BB] flex flex-col gap-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold">Backpacking Sri Lanka</h2>
              <div
                className="flex flex-col justify-between items-center bg-white rounded-lg"
                style={{ padding: "4px 12px" }}
              >
                <p>From</p>
                <p className="font-bold">$700</p>
              </div>
            </div>
            <p>
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </p>
            <button
              className="bg-white text-black"
              onClick={() => navigate("/flight-listing")}
            >
              Book Flight
            </button>
          </div>

          {/* Gallery */}
          <div
            className="gallery grid grid-cols-2 md:grid-cols-3 gap-4"
            style={{ marginTop: "20px" }}
          >
            {GALLERY_IMAGES.map((image) => (
              <img key={image.alt} src={image.image} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>

      <Subscribe />
    </section>
  );
};

export default FallIntoTravel;
