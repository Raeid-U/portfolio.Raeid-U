"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

type Project = {
  name: string;
  date: string;
  thumbnail: string;
  stack: string[];
  longdesc: string;
  github: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
        setSelectedProject(null);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden flex flex-col lg:flex-row bg-foreground text-offwhite">
      <div className="w-full lg:w-2/3 h-full overflow-y-auto no-scrollbar p-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0 max-w-4xl pb-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-foreground pb-10">
              <div
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  {selectedProject?.name === project.name && (
                    <div className="absolute top-2 left-2 bg-foreground text-offwhite text-xs uppercase px-3 py-1 z-10 flex items-center">
                      <FaCircle className="text-highlight mr-2" size={10} />
                      Selected
                    </div>
                  )}
                  <div className="w-[250px] h-[250px] overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      width={250}
                      height={250}
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="w-[250px] h-[150px] bg-background p-4 shadow-sm">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <span className="text-sm text-gray-400">
                      {project.date}
                    </span>
                    <div className="flex space-x-2 mt-3 overflow-x-auto no-scrollbar">
                      {project.stack.map((badge, idx) => (
                        <img
                          key={idx}
                          src={badge}
                          alt="Tech Badge"
                          className="h-6"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex w-full lg:w-1/2 h-full overflow-y-auto no-scrollbar items-start justify-center bg-background p-8 transition-all duration-500">
        {selectedProject ? (
          <div className="w-full max-w-lg p-6 bg-background">
            <div className="overflow-hidden">
              <Image
                src={selectedProject.thumbnail}
                alt={selectedProject.name}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex justify-between mt-4 items-center">
              <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              <span className="text-gray-400">{selectedProject.date}</span>
            </div>
            <div className="flex space-x-2 mt-3 overflow-x-auto no-scrollbar">
              {selectedProject.stack.map((badge, idx) => (
                <img key={idx} src={badge} alt="Tech Badge" className="h-6" />
              ))}
            </div>
            <p className="mt-4 text-justify">{selectedProject.longdesc}</p>
            <div className="mt-6 flex space-x-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhite text-nowrap overflow-hidden hover:tracking-widest transition-all duration-700"
              >
                Check it out on GitHub →
              </a>
            </div>
          </div>
        ) : (
          <p className="text-offwhite text-center">
            Select a project to view details
          </p>
        )}
      </div>

      {selectedProject && (
        <>
          <div
            className="fixed lg:hidden inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="fixed inset-x-4 bottom-4 h-[90%] bg-background p-6 text-offwhite lg:hidden overflow-y-auto no-scrollbar transition-transform duration-500 ease-in-out z-50 ">
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <div className="mt-10">
              <Image
                src={selectedProject.thumbnail}
                alt={selectedProject.name}
                width={500}
                height={300}
                className="w-full h-auto object-cover "
              />
              <h2 className="text-2xl mt-4 font-bold">
                {selectedProject.name}
              </h2>
              <span className="text-gray-400">{selectedProject.date}</span>
              <div className="flex space-x-2 mt-3 overflow-x-auto no-scrollbar">
                {selectedProject.stack.map((badge, idx) => (
                  <img key={idx} src={badge} alt="Tech Badge" className="h-6" />
                ))}
              </div>
              <p className="mt-4 text-justify">{selectedProject.longdesc}</p>
              <div className="mt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-offwhite text-nowrap overflow-hidden hover:tracking-widest transition-all duration-700"
                >
                  Check it out on GitHub →
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
