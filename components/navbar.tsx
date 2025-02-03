"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [expanded, setExpanded] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setExpanded(false);
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`hidden md:flex fixed z-50 top-0 left-1/2 transform -translate-x-1/2 mt-8 items-center justify-between drop-shadow-2xl
        transition-all duration-700 ease-in-out ${
          expanded
            ? "w-3/4 px-8 py-4 bg-background"
            : "w-1/4 px-4 py-2 bg-transparent"
        } rounded-full`}
      >
        <div
          className={`flex flex-1 transition-all duration-700 ease-in-out ${
            expanded
              ? "opacity-100 space-x-10 sm:space-x-6 pointer-events-auto"
              : "opacity-0 w-0 pointer-events-none"
          } text-offwhite text-md font-mono tracking-wider`}
        >
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, "#home")}
            className="hover:tracking-widest transition-all duration-700"
          >
            home
          </a>
          <a
            href="#about"
            onClick={(e) => smoothScroll(e, "#about")}
            className="hover:tracking-widest transition-all duration-700"
          >
            about
          </a>
          <a
            href="#projects"
            onClick={(e) => smoothScroll(e, "#projects")}
            className="hover:tracking-widest transition-all duration-700"
          >
            projects
          </a>
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, "#contact")}
            className="hover:tracking-widest transition-all duration-700"
          >
            contact
          </a>
        </div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2 -top-3 rounded-full bg-background p-2 shadow-lg cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <Image
            src="/center.png"
            alt="Center Icon"
            width={expanded ? 75 : 50}
            height={expanded ? 75 : 50}
            className="transition-all duration-700"
          />
        </div>

        <div
          className={`flex flex-1 justify-end items-center space-x-6 sm:space-x-4 text-offwhite transition-all duration-700 ease-in-out ${
            expanded
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 w-0 pointer-events-none"
          }`}
        >
          <a
            href="https://github.com/Raeid-U"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/raeid-usmanali/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/raeid2006/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition-all duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </nav>

      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-background p-3 rounded-full shadow-lg focus:outline-none"
        >
          <Image src="/center.png" alt="Center Icon" width={40} height={40} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-4 w-48 bg-background text-offwhite shadow-xl p-4 z-50">
            <div className="flex items-center space-x-2 pb-3">
              <span className="text-sm text-gray-400">
                {new Date().toDateString()}
              </span>
            </div>

            <div className="py-3 space-y-2">
              <a
                href="#home"
                onClick={(e) => smoothScroll(e, "#home")}
                className="block hover:text-highlight transition-all duration-300"
              >
                home
              </a>
              <a
                href="#about"
                onClick={(e) => smoothScroll(e, "#about")}
                className="block hover:text-highlight transition-all duration-300"
              >
                about
              </a>
              <a
                href="#projects"
                onClick={(e) => smoothScroll(e, "#projects")}
                className="block hover:text-highlight transition-all duration-300"
              >
                projects
              </a>
              <a
                href="#contact"
                onClick={(e) => smoothScroll(e, "#contact")}
                className="block hover:text-highlight transition-all duration-300"
              >
                contact
              </a>
              <div className="mb-4 mt-2">
                <a
                  href="/raeid_resume_feb2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 py-8 text-offwhite hover:tracking-widest transition-all duration-700"
                >
                  my resumé →
                </a>
              </div>
            </div>

            <div className="flex justify-between pt-3 border-t border-foreground mt-3">
              <a
                href="https://github.com/Raeid-U"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/raeid-usmanali/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/raeid2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
