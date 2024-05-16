import React, { useState } from 'react';

const AboutSection = () => {
  const [selectedStat, setSelectedStat] = useState('Next.js');

  const handleStatClick = (stat) => {
    setSelectedStat(stat);
  };

  const statDescriptions = {
    'Next.js': 'Next.js is a popular React framework for building server-side rendered and statically generated applications. This website is coded mainly in Next.JS!',
    'Tailwind': 'TailwindCSS is a utility-first CSS framework that enables rapid UI development. Similar to Next.Js, this website is coded with TailwindCSS',
    'C++': 'C++ is a powerful programming language commonly used for system programming, game development, and high-performance applications. I have made a Grade Calculator using C++ you can see in my projects!',
    'Python': 'Python is a versatile language known for its simplicity, used in web development, data science, and automation. I am currently upskilling my Python skills. Be sure to look out for py projects from me!',
    'R': 'R is a programming language and environment for statistical computing and graphics, widely used in data analysis and research. This extends to R-Markdown which I am also upskilling currently.',
    'SQL': 'SQL is a language used to communicate with and manipulate databases, essential for managing and querying data. I have used SQL on more than one occasion in some of my projects, be sure to check them out!',
  };

  const statValues = {
    'Next.js': 81,
    'Tailwind': 77,
    'C++': 91,
    'Python': 40,
    'R': 76,
    'SQL': 62,
  };

  return (
    <section id="about">
    <div className="bg-gray-200 text-blue-600 min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 flex justify-center border-r-2 border-blue-600 items-center">
            <img src="./assets/statsimg1.jpg" alt="Character" className="w-auto h-96 rounded-md border-4 border-blue-600" />
          </div>
          <div className="w-full md:w-1/2 md:ml-8">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">My Skills</h2>
            <div className="flex flex-col space-y-6">
              {Object.keys(statDescriptions).map(stat => (
                <StatBar key={stat} title={stat} value={statValues[stat]} onClick={() => handleStatClick(stat)} isActive={stat === selectedStat} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg font-medium text-center md:text-left">
            <strong>{selectedStat}:</strong> {statDescriptions[selectedStat]}
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

const StatBar = ({ title, value, onClick, isActive }) => {
  return (
    <div className={`flex items-center ${isActive ? 'font-bold' : ''}`}>
      <div className="w-20 pr-5 mr-4">{title}</div>
      <div className="relative flex-1 h-8 bg-gray-300 rounded-md cursor-pointer" onClick={onClick}>
        <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-md" style={{ width: `${value}%` }}></div>
      </div>
      <div className="ml-4">{value}%</div>
    </div>
  );
};

export default AboutSection;
