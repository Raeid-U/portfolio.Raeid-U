'use client'
import React from 'react';
import NavBar from './components/nav'; 
import LandingHero from './components/hero';
import ProjectStrip from "./components/projects";
import AboutSection from './components/about';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
        <NavBar />
        <LandingHero />
        <AboutSection />
        <ProjectStrip />
        <Footer />
    </div>
  );
}
