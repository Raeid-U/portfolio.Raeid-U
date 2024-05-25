import React, { useRef } from 'react';
import Background from './background';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LandingHero = ({ scrollToSection }) => {
  const [ref, inView] = useInView();
  const containerRef = useRef();

  return (
    <Background>
      <section id="home" className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-32 flex flex-col items-center relative z-10 space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center lg:space-x-8 lg:space-y-0 space-y-4">
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-6">
              <motion.img 
                src="./assets/heroimg1.jpg" 
                alt="alt" 
                className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-md border-4 sm:border-6 lg:border-8 border-white shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.img 
                src="./assets/heroimg2.jpg" 
                alt="alt" 
                className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-md border-4 sm:border-6 lg:border-8 border-white shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              />
            </div>
            <motion.div 
              className="relative mt-4 lg:mt-0"
              ref={containerRef}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src="./assets/heroimg3.jpg" alt="alt" className="w-36 h-36 sm:w-52 sm:h-52 lg:w-60 lg:h-60 object-cover rounded-md border-4 sm:border-6 lg:border-8 border-white shadow-lg" />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold ml-6 mr-6 mb-4 mb-2 sm:mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Hi!
            </motion.h1>
            <motion.h1 
              className="text-2xl sm:text-3xl lg:text-4xl mb-2 ml-6 mr-6 mb-4 sm:mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              I'm Raeid
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg lg:text-xl ml-6 mr-6 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              {`I'm a 17 year-old Computer Science Student currently finishing my High-School Diploma. Next year I'm going to be attending the University of Waterloo for CS!`}
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg lg:text-xl ml-6 mr-6 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              {`I am a fearless freshman with a flair for Figma. Currently my skills lie in Front-end Programming with Next.js and TailwindCSS experience. Whereas my backend skills lie in C++ and PHP.`}
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg lg:text-xl ml-6 mr-6 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {`Check out some of my projects below or, if you would like to talk, hit the button to get into contact with me!`}
            </motion.p>
            <motion.div 
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 1 }}
            >
              <button className="bg-white ml-6 mr-6 mb-4 text-blue-900 py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-100 transition duration-300" onClick={() => scrollToSection("contact")}>Get in Contact</button>
            </motion.div>
          </div>
        </div>
      </section>
    </Background>
  );
};

export default LandingHero;
