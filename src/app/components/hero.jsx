import React from 'react';

const LandingHero = () => {
  return (
    <div className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="" alt="Hero" className="rounded-lg shadow-md" />
        </div>
        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Your Catchy Headline Goes Here</h1>
          <p className="text-lg mb-6">A brief description of your product or service can go here. Highlight the main benefits or features to capture attention. Add more content to make this section longer.</p>
          <p className="text-lg mb-6">For example, you can include more details about your product, highlight customer testimonials, or provide additional information about your services.</p>
          <button className="bg-white text-blue-900 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">Get in Contact</button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
