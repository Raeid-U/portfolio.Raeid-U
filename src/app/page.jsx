'use client'
import React from 'react';
import NavBar from './components/nav'; 
import LandingHero from './components/hero';
import ProjectStrip from "./components/projects";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <LandingHero />
        <ProjectStrip />
      </main>
    </div>
  );
}
