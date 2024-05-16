import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="relative overflow-y-auto h-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-blue-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black to-blue-900 opacity-25"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-75 animate-pulse"></div>
      {children}
    </div>
  );
};

export default Background;