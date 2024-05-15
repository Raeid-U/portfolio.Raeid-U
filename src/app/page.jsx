import React from 'react';
import NavBar from './components/nav'; 
import LandingHero from './components/hero';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <LandingHero />
      </main>
    </div>
  );
}
