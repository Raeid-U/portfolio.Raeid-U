import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <div className="bg-transparent w-full align-middle items-center font-jetbrains justify-center">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
