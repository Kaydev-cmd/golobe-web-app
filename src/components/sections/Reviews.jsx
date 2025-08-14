import React from "react";
import Button from "../common/Button";
import { REVIEWS_CARD_DATA } from "../../constants";
import ReviewsCard from "../common/ReviewsCard";

const Reviews = () => {
  return (
    <section className="container" style={{ paddingTop: "0" }}>
      <div className="flex flex-col justify-center gap-4">
        <div
          className="flex flex-col gap-2 text-center"
          style={{ marginBottom: "16px" }}
        >
          <h1 className="font-bold text-2xl">Reviews</h1>
          <p className="text-slate-500">What people say about Golobe</p>
        </div>
        <div className="hidden">
          <Button title="See more places" variant="secondary" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {REVIEWS_CARD_DATA.map((review) => (
            <ReviewsCard
              key={review.username}
              title={review.title}
              description={review.description}
              username={review.username}
              location={review.location}
              img={review.image}
            />
          ))}
        </div>

        <Button title="See All" variant="secondary" />
      </div>
    </section>
  );
};

export default Reviews;
