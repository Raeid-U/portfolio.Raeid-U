"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div>
        <footer className="bg-foreground text-offwhite py-12">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-background p-6">
                <h3 className="text-lg font-bold text-highlight mb-2">
                  Got any questions?
                </h3>
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
                <p className="text-sm mb-4">
                  Feel free to reach out. Here are some of my socials:
                </p>

                <div className="flex space-x-6 mt-4">
                  <a
                    href="https://github.com/Raeid-U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-highlight transition"
                  >
                    <FaGithub size={32} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raeid-usmanali/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-highlight transition"
                  >
                    <FaLinkedin size={32} />
                  </a>
                  <a
                    href="https://www.instagram.com/raeid2006/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-highlight transition"
                  >
                    <FaInstagram size={32} />
                  </a>
                </div>
              </div>

              <div className="bg-background p-6">
                <div className="flex items-center hover:tracking-widest transition-all duration-700 space-x-4 p-4 mb-4">
                  <FaPhone className="text-highlight text-2xl" />
                  <p className="text-md text-offwhite">+1 (647) 451-4036</p>
                </div>

                <div className="flex items-center hover:tracking-widest transition-all duration-700 space-x-4 p-4">
                  <FaEnvelope className="text-highlight text-2xl" />
                  <p className="text-md text-offwhite">raeidus15@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="bg-background text-offwhite text-sm py-6 w-full">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; 2025 <span className="text-highlight">Raeid Usmanali</span>{" "}
              | All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a
                href="/legal/disclaimer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition"
              >
                Disclaimer
              </a>
              <span>|</span>
              <a
                href="/legal/privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
