'use client'
import React from 'react';
import { TiAnchorOutline } from "react-icons/ti";

const NavBar = () => {
  return (
    <nav className="navbar bg-white py-4 shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center hover:cursor-pointer">
              <TiAnchorOutline className="text-3xl text-blue-600 mr-2" />
              <div>
                <p className="font-bold text-xl text-blue-600">Raeid Usmanali</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Projects</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
