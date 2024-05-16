'use client'
import React, { useState, useEffect } from 'react';

const SlideUpDiv = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full inset-0 bg-gradient-to-br from-black to-blue-900 z-50 flex items-center justify-center transition-all duration-700 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="text-center bg-white rounded-md p-10 flex flex-col items-center justify-center">
        <p className="font-bold text-6xl text-blue-600 mb-4">Raeid<span className="font-bold text-6xl text-blue-900">.us</span></p>
      </div>
    </div>
  );
};

export default SlideUpDiv;
