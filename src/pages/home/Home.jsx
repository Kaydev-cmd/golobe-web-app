import React from "react";
import Trips from "../../components/sections/Trips";
import Reviews from "../../components/sections/Reviews";
import Subscribe from "../../components/common/Subscribe";

const Home = () => {
  return (
    <>
      <Trips />
      <Reviews />
      <Subscribe />
    </>
  );
};

export default Home;
