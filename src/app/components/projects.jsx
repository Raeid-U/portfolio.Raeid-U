'use client'
import React, { useState } from 'react';
import Background from './background';

const projects = [
    {
        name: "Hikmah Hacks",
        description: "Description of Project 1 goes here.",
        smallDescription: "Hackathon Manager"
    },
    {
        name: "Student Library System",
        description: "Description of Project 2 goes here.",
        smallDescription: "Basic HTML, CSS, JS Library System"
    },
    {
        name: "High School Grade Calculator",
        description: "Description of Project 3 goes here.",
        smallDescription: "C++ Based calculator"
    }, 
    {
        name: "Ninja Game",
        description: "Description of Project 1 goes here.",
        smallDescription: "Simple dodging game built in P5.JS "
    },
    {
        name: "Coming Soon!",
        description: "Patience is a Virtue",
        smallDescription: "Creativity takes time"
    },
    {
        name: "Coming Soon!",
        description: "Patience is a Virtue",
        smallDescription: "Creativity takes time"
    },
    // Add more projects as needed
];

function ProjectStrip() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Function to handle opening the modal with the entire card
    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };
    
    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section id="projects">
        <Background>
        <div className="text-white bg-blue-900 h-auto py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl mb-12 text-center font-bold mb-4 z-10">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center z-10">
                    {projects.map((project, index) => (
                        <div className="text-white" key={index}>
                            <ProjectCard project={project} onClick={() => handleOpenModal(project)} />
                        </div>
                    ))}
                </div>
            </div>
            {showModal && (
                <Background>
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-blue-900 rounded-lg overflow-hidden">
                        <div className="p-8">
                            <div className="flex flex-col items-center">
                                <img className="object-cover rounded-full h-32 w-32 mb-6" src="path/to/placeholder/image.jpg" alt="Project" />
                                <p className="text-2xl font-semibold mb-4">{selectedProject.name}</p>
                                <p className="text-lg">{selectedProject.description}</p>
                            </div>
                            <div className="flex justify-center mt-8">
                                <button className="px-4 py-2 bg-white text-blue-900 rounded-md hover:bg-blue-100 transition duration-300" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                </Background>
            )}
        </div>
        </Background>
        </section>
    );
}

const ProjectCard = ({ project, onClick }) => {
    const { name, smallDescription } = project;

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md" onClick={onClick}>
            <img 
                className="object-cover h-64 w-full" 
                src="path/to/placeholder/image.jpg" 
                alt={name} 
            />
            <div className="p-4">
                <p className="text-lg text-blue-900 font-semibold mb-2">{name}</p>
                <p className="text-sm text-blue-900">{smallDescription}</p>
            </div>
        </div>
    );
}

export default ProjectStrip;
