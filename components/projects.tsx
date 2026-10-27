"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  name: string;
  date: string;
  thumbnail: string;
  stack: string[];
  shortdesc: string;
  longdesc: string;
  github: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data: Project[]) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <section className="w-full bg-foreground px-6 py-14 text-offwhite sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="group min-w-0 overflow-hidden bg-background text-left shadow-sm outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-foreground"
            aria-label={`View details for ${project.name}`}
          >
            <div className="relative hidden aspect-[16/10] overflow-hidden bg-foreground sm:block">
              <Image
                src={project.thumbnail}
                alt=""
                fill
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex min-h-[210px] flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-tight">
                  {project.name}
                </h3>
                <span
                  className="shrink-0 text-highlight transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
              <span className="mt-2 font-mono text-sm text-gray-400">
                {project.date}
              </span>
              <p className="mt-4 leading-6 text-gray-300">
                {project.shortdesc}
              </p>
              <div className="no-scrollbar mt-auto flex gap-2 overflow-x-auto pt-5">
                {project.stack.map((badge) => (
                  <img
                    key={badge}
                    src={badge}
                    alt="Technology badge"
                    className="h-6 shrink-0"
                  />
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedProject(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative my-auto w-full max-w-6xl overflow-hidden bg-background shadow-2xl"
          >
            <button
              type="button"
              autoFocus
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 grid h-8 font-bold w-8 place-items-center bg-background text-lg text-offwhite backdrop-blur-none transition-colors hover:bg-highlight hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
              aria-label="Close project details"
            >
              ✕
            </button>

            <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)]">
              <div className="relative aspect-square min-h-64 overflow-hidden bg-foreground lg:min-h-[600px]">
                <Image
                  src={selectedProject.thumbnail}
                  alt={`${selectedProject.name} project preview`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col p-6 sm:p-10 lg:p-12">
                <span className="font-mono text-sm text-gray-400">
                  {selectedProject.date}
                </span>
                <h2
                  id="project-dialog-title"
                  className="mt-3 pr-10 text-3xl font-bold leading-tight sm:text-4xl"
                >
                  {selectedProject.name}
                </h2>

                <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto">
                  {selectedProject.stack.map((badge) => (
                    <img
                      key={badge}
                      src={badge}
                      alt="Technology badge"
                      className="h-7 shrink-0"
                    />
                  ))}
                </div>

                <p className="mt-8 leading-7 text-gray-200">
                  {selectedProject.longdesc}
                </p>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-3 border-b border-highlight pb-1 text-offwhite transition-all duration-300 hover:gap-5"
                >
                  View on GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
