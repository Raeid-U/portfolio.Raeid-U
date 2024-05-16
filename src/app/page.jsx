'use client'
import React from 'react';
import NavBar from './components/nav'; 
import LandingHero from './components/hero';
import ProjectStrip from "./components/projects";
import AboutSection from './components/about';
import Footer from './components/footer';
import SlideUpDiv from './components/slidediv';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start"  });
    }
  };

  return (
    <div>
        <SlideUpDiv />
        <NavBar scrollToSection={scrollToSection} />
        <LandingHero scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectStrip />
        <Footer />
    </div>
  );
}
