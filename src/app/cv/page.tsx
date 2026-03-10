import type { Metadata } from "next";
import { Github, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { timeline } from "@/data/experience";
import { skills } from "@/data/skills";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "CV — Enzo Natali",
};

const contactInfo = [
  { icon: Phone, label: "06 21 84 79 57" },
  { icon: Mail, label: "Enzonatali75@gmail.com" },
  { icon: MapPin, label: "Saint-Maur-des-Fossés, 94100" },
  { icon: Github, label: "github.com/Enzoulette-94" },
];

const workEnvironment = [
  "Claude",
  "Claude Code",
  "Codex",
  "Warp",
  "VS Code",
  "Figma",
  "Docker",
  "Vercel",
  "Git / GitHub",
];

const softSkills = [
  "Travail d'équipe",
  "Communication",
  "Résolution de problèmes",
  "Autonomie",
  "Curiosité",
  "Adaptabilité",
  "Méthode Agile",
];

function CvTimeline({
  items,
}: {
  items: (typeof timeline)[number][];
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={`${item.title}-${item.period}`}>
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            {item.period}
          </p>
          <h3 className="text-sm font-bold text-black">{item.title}</h3>
          <p className="text-xs text-neutral-600">
            {item.company ?? item.institution}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function CvPage() {
  const workItems = timeline.filter((t) => t.type === "work");
  const educationItems = timeline.filter((t) => t.type === "education");

  return (
    <>
      {/* Print button — hidden when printing */}
      <div className="print:hidden fixed top-24 right-8 z-50">
        <PrintButton />
      </div>

      <div className="mx-auto max-w-[210mm] bg-white px-10 py-10 text-black print:px-0 print:py-0">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold uppercase tracking-widest text-black">
            Enzo Natali
          </h1>
          <p className="mt-1 text-sm font-medium uppercase tracking-wider text-neutral-600">
            Développeur Web Full Stack
          </p>
        </div>

        {/* Contact bar */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-neutral-600">
          {contactInfo.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-1.5">
              <item.icon className="h-3 w-3" />
              {item.label}
            </span>
          ))}
        </div>

        <hr className="my-5 border-black" />

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-6">
            {/* Profil */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black">
                Profil
              </h2>
              <div className="mt-2 space-y-2 text-xs leading-relaxed text-neutral-600">
                <p>
                  Développeur full-stack en reconversion, actuellement en
                  formation intensive à The Hacking Project, où je conçois des
                  applications web complètes avec JavaScript, React, Next.js,
                  Node.js et bases de données.
                </p>
                <p>
                  Issu d&apos;un parcours en éducation et en coaching sportif,
                  j&apos;ai appris à évoluer dans des environnements exigeants
                  et imprévisibles.
                </p>
                <p>
                  Je recherche une opportunité junior / alternance pour
                  m&apos;investir dans des projets ambitieux et continuer à
                  évoluer rapidement au sein d&apos;une équipe engagée.
                </p>
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black">
                Technologies
              </h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="rounded border-neutral-400 text-[10px] text-neutral-700 print:border-neutral-300"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Environnement de travail */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black">
                Environnement de travail
              </h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {workEnvironment.map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="rounded border-neutral-400 text-[10px] text-neutral-700 print:border-neutral-300"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Soft skills */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black">
                Soft Skills
              </h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded border-neutral-400 text-[10px] text-neutral-700 print:border-neutral-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Formation */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black">
                Formation
              </h2>
              <div className="mt-2">
                <CvTimeline items={educationItems} />
              </div>
            </section>

            {/* Expériences */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black">
                Expériences professionnelles
              </h2>
              <div className="mt-2">
                <CvTimeline items={workItems} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
