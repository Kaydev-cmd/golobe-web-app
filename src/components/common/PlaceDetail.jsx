import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        const foundPlace = data.find((place) => place.id === parseInt(id, 10));

        if (!foundPlace) {
          setError("Place not found");
        } else {
          setPlace(foundPlace);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="container">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{place.title}</h1>
        {place.image && (
          <img src={place.image} alt={place.title} className="w-full" />
        )}
        <p className="text-lg">{place.summary}</p>
      </div>
    </section>
  );
};

export default PlaceDetail;
