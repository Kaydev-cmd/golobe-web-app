import React, { useState } from "react";
import Button from "../Button";
import { DESKTOP_LINKS, NAV_LINKS } from "../../../constants";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import Hero from "../Hero";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="hero-background">
      <header className="container flex justify-between items-center text-white">
        {/* Desktop Links */}
        <nav className="hidden">
          <ul className="flex flex-col gap-6">
            {DESKTOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="flex items-center gap-2">
                  <img src={link.icon} alt={link.name} width={22} height={22} />{" "}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Links */}
        <nav
          className={`flex items-center justify-center gap-6 fixed top-20 left-0 w-full bg-green-500 text-white h-67 z-50 ${
            nav ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="flex items-center gap-2">
                  <img src={link.icon} alt={link.name} width={22} height={22} />{" "}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/">
          <h1 className="text-xl font-bold lowercase">Golobe</h1>
        </Link>

        <div className="hidden">
          <Button title="Login" />
          <Button title="Sign Up" />
        </div>

        <BiMenuAltRight size={40} onClick={handleNav} />
      </header>
      <Hero />
    </div>
  );
};

export default Header;
