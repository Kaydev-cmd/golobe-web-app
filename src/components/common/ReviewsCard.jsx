import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewsCard = ({ title, description, username, location, img }) => {
  return (
    <div className="card bg-white flex flex-col gap-3 rounded-xl shadow-md transition-transform hover:scale-105 cursor-pointer">
      <h1 className="text-3xl font-semibold">{`"${title}"`}</h1>
      <p>{description}</p>
      <div className="flex justify-end">
        <a href="#" className="text-blue-600 font-semibold">
          View more
        </a>
      </div>
      <div className="flex items-center gap-2">
        <FaStar size={20} color="#FFC107" />
        <FaStar size={20} color="#FFC107" />
        <FaStar size={20} color="#FFC107" />
        <FaStar size={20} color="#FFC107" />
        <FaStar size={20} color="#FFC107" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">{username}</h2>
        <p className="text-slate-500">{location}</p>
      </div>
      <div className="flex items-enter gap-2">
        <img src="/assets/logos/google.png" alt="Google" />
        <p className="text-slate-500 font-semibold">Google</p>
      </div>
      <img src={img} alt={img} className="rounded-md"/>
    </div>
  );
};

export default ReviewsCard;
