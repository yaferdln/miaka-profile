import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-[#8B4513] p-4 shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">Miaka's Profile</h1>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-bold">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#socials">Socials</a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden mt-4 text-center space-y-2 text-lg font-bold">
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#socials" onClick={() => setMenuOpen(false)}>
            Socials
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
