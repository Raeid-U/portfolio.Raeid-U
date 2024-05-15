import React from 'react';

const LandingHero = () => {
  return (
    <section className="bg-blue-900 h-screen py-32">
      <div className="max-w-7xl mx-auto pl-4 pr-8 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:text-right md:pr-9">
          <img src={"./assets/heroimg1.jpg"} alt={"alt"} className="w-full border-8 md:w-3/4 lg:w-3/4 xl:w-3/3 float-right" />
        </div>
        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Hi!</h1>
          <h1 className="text-4xl font-bold mb-4">I'm Raeid</h1>
          <p className="text-lg mb-6">
            I'm a 17 year-old Computer Science Student currently finishing my High-School Diploma. Next year I'm going to be attending the University of Waterloo for CS! 
          </p>
          <p className="text-lg mb-6">
            I am a fearless freshman with a flair for Figma. Currently my skills lie in Front-end Programming with Next.js and TailwindCSS experience. Whereas my backend skills lie in C++ and PHP.
          </p>
          <p className="text-lg mb-6">
            Check out some of my projects below or, if you would like to talk, hit the button to get into contact with me!
          </p>
          <button className="bg-white text-blue-900 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">Get in Contact</button>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
