import React from "react";
import Trips from "../../components/sections/Trips";
import Reviews from "../../components/sections/Reviews";
import Subscribe from "../../components/common/Subscribe";
import Hero from "../../components/sections/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Trips />
      <Reviews />
      <Subscribe />
    </>
  );
};

export default Home;
