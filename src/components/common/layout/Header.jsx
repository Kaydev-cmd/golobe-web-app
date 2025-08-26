import React, { useState } from "react";
import Button from "../Button";
import { DESKTOP_LINKS, NAV_LINKS } from "../../../constants";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div>
      <header className="container flex justify-between items-center text-black">
        {/* Desktop Links */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            {DESKTOP_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={link.icon} alt={link.name} width={22} height={22} />{" "}
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Mobile Links */}
        <nav
          className={`flex items-center justify-center gap-6 fixed top-17 left-0 w-full bg-green-500 text-white h-67 z-50 ${
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

        <div className="hidden md:flex gap-4">
          <Button
            title="Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
          <Button title="Sign Up" onClick={() => navigate("/sign-up")} />
        </div>

        <BiMenuAltRight size={40} onClick={handleNav} className="md:hidden" />
      </header>
    </div>
  );
};

export default Header;
