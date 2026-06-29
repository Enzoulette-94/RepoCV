"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsSection() {
  const completed = [
    ...projects.filter((p) => p.status !== "in-progress"),
    ...projects.filter((p) => p.status === "in-progress"),
  ];

  return (
    <section id="projects" className="scroll-mt-16 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Mes Projets</h2>
          <p className="mt-4 text-lg text-muted-foreground">Explorez mes réalisations.</p>
        </motion.div>

        <div className="mx-auto mt-14 flex max-w-4xl flex-col divide-y divide-border">
          <AnimatePresence mode="popLayout">
            {completed.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
