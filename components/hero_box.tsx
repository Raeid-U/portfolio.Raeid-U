"use client";

import { useState, useEffect } from "react";
import React from "react";

export default function HeroBox() {
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
    <div className="mt-8 p-6 bg-background rounded-none w-full">
      <div className="grid grid-cols-1">
        <p className="text-4xl font-lateef text-center">سلام</p>
        <p className="text-right font-jetbrains text-offwhite">{`</>`}</p>
      </div>

      <div className="border p-8 font-jetbrains">
        <h1 className="text-lg md:text-xl tracking-wide font-semibold mt-2">
          I’m <span className="text-highlight">Raeid</span>
        </h1>

        <p className="mt-4 text-sm md:text-md leading-relaxed">
          full stack dev, travel, cloud computing, finance, chirography,
          automation, drumming, photography
        </p>

        <p className="mt-8 text-sm">i’ve got a lot of interests</p>

        <div className="mt-6 px-4 py-2 text-xs md:text-sm text-offwhite hover:tracking-widest transition-all duration-700">
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, "#contact")}
            className="hover:tracking-widest transition-all duration-700"
          >
            work with me →
          </a>
        </div>
      </div>
    </div>
  );
}
