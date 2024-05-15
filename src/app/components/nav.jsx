'use client'
import React from 'react';
import { IoTerminal } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="bg-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-blue-600"> <IoTerminal /> Raeid</a>
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
