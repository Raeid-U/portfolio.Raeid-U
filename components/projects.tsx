"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        if (data.length > 0) setSelectedProject(data[0]);
      });
  }, []);

  return (
    <section className="w-full h-screen flex bg-foreground text-offwhite">
      <div className="w-1/2 h-full overflow-y-auto p-8 no-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
            >
              {selectedProject && selectedProject.name === project.name && (
                <div className="absolute flex items-center top-2 left-2 bg-foreground text-offwhite text-xs uppercase px-3 py-1 z-10">
                  <FaCircle className="text-red-500 mr-2" size={10} />
                  Selected
                </div>
              )}

              <div className="w-[250px] h-[250px] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>

              <div className="w-[250px] h-[150px] bg-background p-4">
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <span className="text-sm text-gray-400">{project.date}</span>
                </div>

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
          ))}
        </div>
      </div>

      <div className="w-1/2 h-auto flex items-center justify-center bg-foreground no-scrollbar overflow-y-auto mt-10 p-8">
        {selectedProject ? (
          <div className="w-3/4 p-4">
            <div className="pt-4">
              <Image
                src={selectedProject.thumbnail}
                alt={selectedProject.name}
                width={500}
                height={300}
                className="w-full"
              />
            </div>

            <div className="flex justify-between mt-4">
              <h2 className="text-2xl">{selectedProject.name}</h2>
              <span className="text-gray-400">{selectedProject.date}</span>
            </div>

            <div className="flex space-x-2 mt-3 overflow-x-auto scrollbar-hide">
              {selectedProject.stack.map((badge, idx) => (
                <img key={idx} src={badge} alt="Tech Badge" className="h-6" />
              ))}
            </div>

            <p className="mt-4">{selectedProject.longdesc}</p>

            <div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-offwhite hover:tracking-widest transition-all duration-700"
              >
                Check it out on GitHub →
              </a>
            </div>

            <button
              className="mt-6 px-4 py-2 bg-highlight text-black hover:bg-offwhite transition"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Select a project to view details</p>
        )}
      </div>

      {selectedProject && (
        <div className="fixed inset-x-4 bottom-4 h-[90%] bg-background p-6 text-offwhite md:hidden overflow-y-auto border border-offwhite">
          <button
            className="absolute top-4 right-4 text-xl"
            onClick={() => setSelectedProject(null)}
          >
            ✕
          </button>

          <Image
            src={selectedProject.thumbnail}
            alt={selectedProject.name}
            width={500}
            height={300}
            className="w-full"
          />
          <h2 className="text-2xl mt-4">{selectedProject.name}</h2>
          <span className="text-gray-400">{selectedProject.date}</span>
          <div className="flex space-x-2 mt-3 overflow-x-auto scrollbar-hide">
            {selectedProject.stack.map((badge, idx) => (
              <img key={idx} src={badge} alt="Tech Badge" className="h-6" />
            ))}
          </div>
          <p className="mt-4">{selectedProject.longdesc}</p>
        </div>
      )}
    </section>
  );
}
