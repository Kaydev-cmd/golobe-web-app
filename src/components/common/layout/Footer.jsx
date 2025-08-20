import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  OUR_DESTINATION_LINKS,
  OUR_ACTIVITIES_LINKS,
  TRAVEL_BLOGS_LINKS,
  ABOUT_US_LINKS,
  CONTACT_US_LINKS,
} from "../../../constants";

const Footer = () => {
  return (
    <footer className="bg-[#8DD3BB]" style={{ padding: "48px 0" }}>
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row lg:items-start">
        <div className="flex flex-col items-center gap-4 lg:gap-6 lg:items-start">
          <h1 className="text-2xl font-bold lowercase">Golobe</h1>
          <div className="flex items-center gap-4">
            <FaFacebook size={26} className="cursor-pointer" />
            <FaTwitter size={26} className="cursor-pointer" />
            <FaYoutube size={26} className="cursor-pointer" />
            <FaInstagram size={26} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 lg:grid-cols-5 lg:items-start">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">Our Destinations</h2>
            <ul className="flex flex-col gap-2">
              {OUR_DESTINATION_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">Our Activities</h2>
            <ul className="flex flex-col gap-2">
              {OUR_ACTIVITIES_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">Travel Blogs</h2>
            <ul className="flex flex-col gap-2">
              {TRAVEL_BLOGS_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">About Us</h2>
            <ul className="flex flex-col gap-2">
              {ABOUT_US_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">Contact Us</h2>
            <ul className="flex flex-col gap-2">
              {CONTACT_US_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
