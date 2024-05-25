import React from 'react';

const EducationSection = () => {
  return (
    <section>
      <div className="bg-gray-200 text-blue-600 min-h-screen flex justify-center items-center">
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
          <div className="flex flex-col space-y-8">
            <EducationItem
              image="./assets/highschool.svg"
              title="High School"
              description="I attended North Park Senior Public School in Brampton, Ontario. I completed my High School Diploma as part of the International Business and Technology program as well as the SHSM program."
            />
            <EducationItem
              image="./assets/university_of_waterloo.png"
              title="University of Waterloo"
              description="Currently I plan to attend the University of Waterloo for a Co-op enabled Bachelors of Computer Science."
            />
            <EducationItem
              image="./assets/wilfrid_laurier_university.png"
              title="Wilfrid Laurier University"
              description="Simultaneously with the University of Waterloo, I plan to complete a Bachalors of Business Administration at Wilfrid Laurier University. Big thanks to Mr. Scorcia for guiding me into this amazing program."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationItem = ({ image, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="w-1/4 flex justify-center relative">
        <img src={image} alt={title} className="max-w-32 max-h-32 object-contain rounded-md" />
      </div>
      <div className="w-3/4 pl-8 flex flex-col justify-center max-h-32 overflow-auto">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EducationSection;
