"use client";

import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { NavArrow } from "@/components/nav-arrow";

export function ProjectsClient() {
  const completed = projects.filter((p) => p.status !== "in-progress");
  const inProgress = projects.filter((p) => p.status === "in-progress");

  return (
    <>
      <NavArrow href="/about" direction="left" label="Retour au CV" />
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mes Projets
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explorez mes réalisations.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {completed.map((project, i) => {
              const fullWidth = i === 0 || i === completed.length - 1;
              return (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={i}
                  fullWidth={fullWidth}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {inProgress.length > 0 && (
          <div className="mx-auto mt-20 max-w-4xl">
            <h2 className="text-xl font-bold tracking-tight text-primary mb-6">
              En cours
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {inProgress.map((project, i) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={i}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
