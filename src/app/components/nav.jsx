'use client'
import React from 'react';

const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="navbar bg-white py-4 shadow-lg fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center hover:cursor-pointer">
              <div>
                <p className="font-bold text-3xl text-blue-600" onClick={() => scrollToSection("home")}>Raeid<span className="font-bold text-xl text-blue-900">.us</span></p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <button className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => scrollToSection("home")}>Home</button>
              </li>
              <li>
                <button className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => scrollToSection("about")}>About</button>
              </li>
              <li>
                <button className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => scrollToSection("projects")}>Projects</button>
              </li>
              <li>
                <button className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => scrollToSection("contact")}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
