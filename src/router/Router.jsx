import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../pages/home/Home";
import Flights from "../pages/flights/Flights";
import Stays from "../pages/stays/Stays";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import PlaceDetail from "../components/common/PlaceDetail";
import FlightListing from "../pages/flight-listing/FlightListing";
import FlightDetails from "../components/common/FlightDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/stays",
        element: <Stays />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/place/:id",
        element: <PlaceDetail />,
      },
      {
        path: "/flight-listing",
        element: <FlightListing />,
      },
      {
        path: "/flight/:id",
        element: <FlightDetails />,
      },
    ],
  },
]);

export default Router;
