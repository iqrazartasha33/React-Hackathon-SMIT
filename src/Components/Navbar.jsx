import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome, IoPerson } from "react-icons/io5";
import { GiChickenLeg } from "react-icons/gi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#9B177E] shadow-md">
      <div className="flex items-center justify-between max-w-[100%] px-4 py-3">
        <h1 className="text-white text-2xl font-bold flex items-center gap-2">
          <GiChickenLeg className="text-yellow-300" />
          Crispy Craze!
        </h1>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden space-y-1.5">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex md:static absolute top-[60px] left-0 w-full 
          md:w-auto bg-[#9B177E] md:bg-transparent flex-col md:flex-row
           md:items-center text-center md:space-x-6`}
        >
          <li className="py-2 md:py-0">
            <Link
              to="/"
              className="text-white px-4 block hover:text-[#FFAAAA]
               transition-colors duration-200 flex items-center gap-2"
            >
              <IoHome className="md:hidden" />
               Home
            </Link>
          </li>

          <li className="py-2 md:py-0">
            <Link
              to="/about"
              className="text-white px-4 block hover:text-[#FFAAAA]
               transition-colors duration-200 flex items-center gap-2"
            >
              <IoPerson className="md:hidden" /> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
