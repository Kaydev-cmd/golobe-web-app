import React from "react";
import Header from "../common/layout/Header";
import Footer from "../common/layout/Footer";
import { Outlet } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
