'use client'
import React from 'react';
import NavBar from './components/nav'; 
import LandingHero from './components/hero';
import ProjectStrip from "./components/projects";
import AboutSection from './components/about';

export default function Home() {
  return (
    <div>
      
      <main>
        <NavBar />
        <LandingHero />
        <AboutSection />
        <ProjectStrip />
        
      </main>
    </div>
  );
}
