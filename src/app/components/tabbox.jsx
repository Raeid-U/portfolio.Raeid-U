import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './about';
import EducationSection from './education';
import ExperienceSection from './experience';
import { FaBook, FaBriefcase, FaCode } from 'react-icons/fa';

const initialTabs = [
  { label: 'Skills', component: <AboutSection /> },
  { label: 'Education', component: <EducationSection /> },
  { label: 'Experience', component: <ExperienceSection /> }
];

const TabBox = () => {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]); 

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="bg-gray-200 py-12">
      <div id='tab' className="mx-auto px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row justify-center items-center">
        <div className="bg-white rounded-md p-8 mr-8">
          <h1 className="text-blue-600 text-3xl font-bold text-center mb-8">What am I good at?</h1>
          <div className="flex flex-col space-y-8">
            {initialTabs.map((item) => (
              <TabButton
                key={item.label}
                title={item.label}
                icon={getIcon(item.label)}
                onClick={() => handleTabClick(item)}
                isActive={item === selectedTab}
              />
            ))}
          </div>
        </div>
        <div className="bg-transparent rounded-md p-8">
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab.component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ title, icon, onClick, isActive }) => {
  return (
    <button
      className={`text-xl bg-gray-100 rounded-full p-3 flex items-center justify-start hover:bg-gray-300 transition duration-300 ${
        isActive ? 'text-blue-600' : 'text-gray-500'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </button>
  );
};

const getIcon = (label) => {
  switch (label) {
    case 'Skills':
      return <FaCode />;
    case 'Education':
      return <FaBook />;
    case 'Experience':
      return <FaBriefcase />;
    default:
      return null;
  }
};

export default TabBox;
