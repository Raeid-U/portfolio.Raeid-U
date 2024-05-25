'use client'
import React from 'react';
import NavBar from './components/nav'; 
import LandingHero from './components/hero';
import ProjectStrip from "./components/projects";
import TabBox from './components/tabbox';
import Footer from './components/footer';
import SlideUpDiv from './components/slidediv';
import { CustomScrollBar } from './components/nav';
import Head from 'next/head';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start"  });
    }
  };

  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <html lang='en'>
        <body>
          <SlideUpDiv />
          <NavBar scrollToSection={scrollToSection} />
          <CustomScrollBar />
          <LandingHero scrollToSection={scrollToSection} />
          <TabBox />
          <ProjectStrip />
          <Footer />
        </body>
      </html>
    </>
  );
}
