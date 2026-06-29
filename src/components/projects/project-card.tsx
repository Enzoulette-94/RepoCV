"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { Lightbox } from "./lightbox";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <Lightbox
        src={lightboxOpen ? project.image : null}
        alt={project.title}
        onClose={() => setLightboxOpen(false)}
      />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      layout
      className="group py-8"
    >
      <div className="flex items-start gap-8">
        {/* Aperçu image */}
        {project.image && (
          <button
            onClick={() => setLightboxOpen(true)}
            className="hidden shrink-0 overflow-hidden rounded-lg border border-border sm:block cursor-zoom-in"
            aria-label={`Agrandir l'aperçu de ${project.title}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={120}
              className="h-[120px] w-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        )}

        {/* Contenu principal */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Link href={`/projects/${project.slug}`} className="group/title inline-flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-semibold tracking-tight text-foreground transition-opacity group-hover/title:opacity-70">
              {project.title}
            </h2>
            {project.status === "in-progress" && (
              <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                En cours
              </span>
            )}
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 flex-col items-end justify-between gap-6">
          <div className="flex gap-0.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub — ${project.title}`}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le site — ${project.title}`}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Détails
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
    </>
  );
}
