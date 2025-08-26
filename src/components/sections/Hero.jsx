import React from "react";

const Hero = () => {
  return (
    <section
      className="hero-background flex flex-col justify-center items-center text-white gap-4"
      style={{ paddingTop: "0" }}
    >
      <p className="font-semibold text-3xl">Helping Others</p>
      <h1 className="font-bold text-5xl uppercase">Live & Travel</h1>
      <p>Special offers to suit your plan</p>
    </section>
  );
};

export default Hero;
