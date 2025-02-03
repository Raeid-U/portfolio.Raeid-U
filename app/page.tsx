import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import HeroBanner from "../components/hero_banner";
import About from "../components/about";
import ProjectBanner from "../components/projects_banner";
import Projects from "../components/projects";
import ContactBanner from "../components/contact_banner";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <div className="bg-transparent w-full align-middle items-center font-jetbrains justify-center">
        <Navbar />
        <div id="home">
          <Hero />
          <HeroBanner />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <ProjectBanner />
          <Projects />
        </div>
        <div id="contact">
          <ContactBanner />
          <Footer />
        </div>
      </div>
    </>
  );
}
