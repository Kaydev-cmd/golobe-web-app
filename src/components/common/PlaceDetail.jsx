import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { TRIPS_CARD_DATA } from "../../constants";

const PlaceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundPlace = TRIPS_CARD_DATA.find(
      (place) => place.id === parseInt(id, 10)
    );

    if (!foundPlace) {
      setError("Flight not found");
    } else {
      setPlace(foundPlace);
    }
    setLoading(false);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="container">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{place.title}</h1>
        {place.image && (
          <div>
            <img
              src={place.image}
              alt={place.title}
              className="w-full lg:w-1/2 rounded-lg"
            />
          </div>
        )}
        <p className="text-lg">{place.summary}</p>
        <Button
          title="Book Flight"
          onClick={() => navigate("/flight-listing")}
        />
      </div>
    </section>
  );
};

export default PlaceDetail;
