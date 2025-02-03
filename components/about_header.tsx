"use client";
import { useState, useEffect } from "react";

export default function AboutHeader() {
  const titles = [
    "programmer",
    "photographer",
    "drummer",
    "dev",
    "chirographer",
    "muslim",
    "entrepreneur",
    "visionary",
  ];
  const birthDate = new Date(2006, 8, 5);

  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const updateAge = () => {
      const today = new Date();
      let newAge = today.getFullYear() - birthDate.getFullYear();
      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() < birthDate.getDate())
      ) {
        newAge--;
      }
      setAge(newAge);
    };

    updateAge();
    const ageInterval = setInterval(updateAge, 24 * 60 * 60 * 1000);
    return () => clearInterval(ageInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      if (charIndex < titles[titleIndex].length) {
        timeout = setTimeout(() => {
          setCurrentTitle((prev) => prev + titles[titleIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentTitle((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        setDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting]);

  return (
    <div className="h-24 lg:h-48">
      <h2 className="text-xl md:text-2xl font-jetbrains">
        <span className="text-offwhite">about</span>
        <span className="text-highlight"> me</span>,
      </h2>
      <h2 className="text-xl md:text-2xl font-jetbrains">
        <span className="text-offwhite">the </span>
        <span className="text-highlight">{age} </span>
        <span className="text-offwhite">year old</span>
        <span className="text-highlight"> {currentTitle}</span>.
      </h2>
    </div>
  );
}
