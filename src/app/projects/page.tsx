import type { Metadata } from "next";
import { ProjectsClient } from "./projects-client";

export const metadata: Metadata = {
  title: "Projets",
  description: "Mes réalisations en développement web — projets solo et collaboratifs.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
