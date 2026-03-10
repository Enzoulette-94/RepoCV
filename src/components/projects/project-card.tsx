"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index = 0,
  fullWidth = false,
}: {
  project: Project;
  index?: number;
  fullWidth?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      layout
      className={cn(fullWidth && "sm:col-span-2")}
    >
      <div
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-blue-700 bg-muted/20 p-6 transition-all duration-300 hover:border-blue-900 hover:bg-muted/40 hover:scale-[1.015] hover:shadow-2xl hover:shadow-blue-700/20",
          fullWidth && "sm:flex-row sm:items-start sm:gap-12"
        )}
      >
        {/* Contenu principal */}
        <div className="relative flex min-w-0 flex-1 flex-col">
          <Link href={`/projects/${project.slug}`} className="group/title">
            <h2 className="text-xl font-semibold tracking-tight text-foreground transition-opacity group-hover/title:opacity-70">
              {project.title}
            </h2>
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
        <div
          className={cn(
            "relative mt-5 flex shrink-0 items-center gap-1",
            fullWidth && "sm:mt-0 sm:flex-col sm:items-end sm:justify-between"
          )}
        >
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
                aria-label={`Démo — ${project.title}`}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground sm:ml-0"
          >
            Détails
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
