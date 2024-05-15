import React, { useState } from 'react';

const AboutSection = () => {
  const [selectedStat, setSelectedStat] = useState('HTML');

  const handleStatClick = (stat) => {
    setSelectedStat(stat);
  };

  return (
    <div className="bg-gray-200 text-blue-600 min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-center items-center">

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src="./assets/statsimg1.jpg" alt="Character" className="w-auto h-96 rounded-md border-2 border-gray-700" />
          </div>
          
          <div className="w-full md:w-1/2 md:ml-8">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">My Skills</h2>

            <div className="flex flex-col space-y-6">
              <StatBar title="Next.js" value={80} onClick={() => handleStatClick("Next.js")} />
              <StatBar title="Tailwind " value={90} onClick={() => handleStatClick("TailwindCSS")} />
              <StatBar title="C++" value={70} onClick={() => handleStatClick("C++")} />
              <StatBar title="Python" value={85} onClick={() => handleStatClick("Python")} />
              <StatBar title="R" value={60} onClick={() => handleStatClick("R")} />
              <StatBar title="SQL" value={75} onClick={() => handleStatClick("SQL")} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg font-medium text-center md:text-left">
            Description of {selectedStat}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat sem sit amet nulla molestie, sit amet tristique odio luctus.
          </p>
        </div>
      </div>
    </div>
  );
};

const StatBar = ({ title, value, onClick }) => {
  return (
    <div className="flex items-center">
      <div className="w-20 pr-5 mr-4">{title}</div>
      <div className="relative flex-1 h-8 bg-gray-300 rounded-md cursor-pointer" onClick={onClick}>
        <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-md" style={{ width: `${value}%` }}></div>
      </div>
      <div className="ml-4">{value}%</div>
    </div>
  );
};

export default AboutSection;
