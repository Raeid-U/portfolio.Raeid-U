"use client";
import React, { useState } from "react";

export default function AboutBox() {
  const sections = [
    {
      title: "studying",
      content: (
        <>
          <p>
            <span className="text-highlight">Computer Science</span> @ UWaterloo
          </p>
          <p>
            and <span className="text-highlight">Business Administration</span>{" "}
            @ WLU
          </p>
        </>
      ),
    },
    {
      title: "currently",
      content: (
        <>
          <p>
            working as a{" "}
            <span className="text-highlight">data science intern</span> at IFC,
            and a <span className="text-highlight">freelance</span> dev.
          </p>
        </>
      ),
    },
    {
      title: "open to work in",
      content: (
        <>
          <p>finance, data science, web dev, and business solutions</p>
        </>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 300);
  };

  const nextSlide = () => {
    changeSlide((currentIndex + 1) % sections.length);
  };

  const prevSlide = () => {
    changeSlide((currentIndex - 1 + sections.length) % sections.length);
  };

  return (
    <div className="relative mt-8 p-6 bg-background w-full max-w-lg min-h-lg mx-auto">
      <div className="grid grid-rows-2">
        <p className="text-4xl font-lateef text-center">حياء</p>
        <div className="grid grid-cols-3 items-center">
          <button
            onClick={prevSlide}
            className="text-2xl text-offwhite text-left hover:text-highlight transition"
          >
            ←
          </button>
          <p className="text-4xl font-lateef text-center"></p>
          <button
            onClick={nextSlide}
            className="text-2xl text-right text-offwhite hover:text-highlight transition"
          >
            →
          </button>
        </div>
      </div>

      <div className="border border-offwhite">
        <div
          className={`text-center p-8 font-jetbrains transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}
        >
          <h1 className="text-2xl tracking-wide font-semibold">
            {sections[currentIndex].title}
          </h1>
          <div className="mt-4 text-md leading-relaxed">
            {sections[currentIndex].content}
          </div>
        </div>
        <button className="mt-6 px-4 py-2 mb-4 text-offwhite hover:tracking-widest transition-all duration-700">
          my resumé →
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {sections.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-highlight" : "border border-offwhite"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
