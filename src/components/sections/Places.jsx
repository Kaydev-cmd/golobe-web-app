import React from "react";
import Button from "../common/Button";

const Places = () => {
  return (
    <div>
      <section className="container flex flex-col justify-center gap-4">
        <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:justify-between">
          <div
            className="flex flex-col gap-2 text-center md:text-start"
            style={{ marginBottom: "16px" }}
          >
            <h1 className="font-bold text-2xl">Let's go places together</h1>
            <p className="text-slate-500">
              Discover the latest offers and news and start planning your next
              trip with us.
            </p>
          </div>
          <div className="hidden md:flex">
            <Button title="See All" variant="secondary" />
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "0" }}>
        <img src="/assets/images/places.png" alt="Places" className="w-full" />
      </section>
      <div
        className="flex justify-center md:hidden"
        style={{ marginBottom: "16px" }}
      >
        <Button title="See All" variant="secondary" />
      </div>
    </div>
  );
};

export default Places;
