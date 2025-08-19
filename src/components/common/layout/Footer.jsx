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
    <footer className="bg-[#8DD3BB]">
      <div className="container flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold lowercase">Golobe</h1>
          <div className="flex gap-4">
            <FaFacebook size={26} />
            <FaTwitter size={26} />
            <FaYoutube size={26} />
            <FaInstagram size={26} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">Our Destinations</h2>
            <ul className="flex flex-col gap-1">
              {OUR_DESTINATION_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">Our Activities</h2>
            <ul className="flex flex-col gap-1">
              {OUR_ACTIVITIES_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">Travel Blogs</h2>
            <ul className="flex flex-col gap-1">
              {TRAVEL_BLOGS_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">About Us</h2>
            <ul className="flex flex-col gap-1">
              {ABOUT_US_LINKS.map((link) => (
                <Link key={link.id} to={link.href}>
                  {link.link}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-bold">Contact Us</h2>
            <ul className="flex flex-col gap-1">
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
