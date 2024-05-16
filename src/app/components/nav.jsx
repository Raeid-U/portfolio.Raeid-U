import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
                <button className="text-gray-700 hover:text-blue-600 transition duration-300" onClick={() => scrollToSection("tab")}>About</button>
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

export const CustomScrollBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScrollPercentage = () => {
    const scrollableElement = document.documentElement;
    const scrollTop = scrollableElement.scrollTop;
    const scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
  };

  const handleScroll = () => {
    const percentage = calculateScrollPercentage();
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-0 z-50 left-0 h-2 w-full bg-blue-600"
      style={{ scaleX: scrollPercentage / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};
