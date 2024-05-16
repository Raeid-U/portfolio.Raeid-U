import React from 'react';

const ExperienceSection = () => {
  return (
    <section>
      <div className="bg-gray-200 text-blue-600 min-h-screen flex justify-center items-center">
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
          <div className="flex flex-col space-y-8">
            <ExperienceItem
              image="./assets/experience_image1.jpg"
              title="Experience 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus in magna hendrerit gravida. Quisque ultricies semper ante, ut convallis justo rutrum eget."
            />
            <ExperienceItem
              image="./assets/experience_image2.jpg"
              title="Experience 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus in magna hendrerit gravida. Quisque ultricies semper ante, ut convallis justo rutrum eget."
            />
            <ExperienceItem
              image="./assets/experience_image3.jpg"
              title="Experience 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus in magna hendrerit gravida. Quisque ultricies semper ante, ut convallis justo rutrum eget."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ image, title, description }) => {
  return (
    <div className="flex items-center">
      <div className="w-3/4 pr-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="w-1/4 flex justify-end">
        <div className="relative h-32">
          <img src={image} alt={title} className="w-32 h-32 object-cover rounded-md" />
          <div className="absolute top-0 right-full w-0.5 h-full bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
