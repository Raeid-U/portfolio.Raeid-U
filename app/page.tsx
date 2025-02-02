import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Banner from "../components/hero_banner";
import About from "../components/about";

export default function Home() {
  return (
    <>
      <div className="bg-transparent w-full align-middle items-center font-jetbrains justify-center">
        <Navbar />
        <Hero />
        <Banner />
        <About />
      </div>
    </>
  );
}
