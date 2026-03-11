import type { Metadata } from "next";
import Link from "next/link";
import { Download, Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/about/timeline";
import { SkillBars } from "@/components/about/skill-bars";
import { FadeIn } from "@/components/about/fade-in";
import { timeline } from "@/data/experience";
import { skills } from "@/data/skills";
import { PageTransition } from "@/components/page-transition";
import { NavArrow } from "@/components/nav-arrow";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mon parcours, mes compétences et mon expérience en développement web.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "06 21 84 79 57",
    href: "tel:+33621847957",
  },
  {
    icon: Mail,
    label: "Enzonatali75@gmail.com",
    href: "mailto:Enzonatali75@gmail.com",
  },
  {
    icon: MapPin,
    label: "Saint-Maur-des-Fossés, 94100",
  },
  {
    icon: Github,
    label: "Enzoulette-94",
    href: "https://github.com/Enzoulette-94",
  },
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

export default function AboutPage() {
  const workItems = timeline.filter((t) => t.type === "work");
  const educationItems = timeline.filter((t) => t.type === "education");

  return (
    <PageTransition>
      <NavArrow href="/" direction="left" label="Retour à l'accueil" />
      <NavArrow href="/projects" direction="right" label="Voir mes projets" />
      <div className="container mx-auto max-w-5xl px-4 py-16">
        {/* Header — Name + Title */}
        <FadeIn delay={0.1}>
        <section className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Enzo Natali
          </h1>
          <p className="mt-2 text-lg font-medium text-primary">
            Développeur Web Full Stack
          </p>
        </section>
        </FadeIn>

        {/* Contact bar */}
        <FadeIn delay={0.2}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {contactInfo.map((item) => {
            const content = (
              <span className="inline-flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </span>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {content}
              </a>
            ) : (
              <span key={item.label}>{content}</span>
            );
          })}
        </div>
        </FadeIn>

        {/* Download CV */}
        <FadeIn delay={0.3}>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/cv" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Télécharger mon CV
            </Link>
          </Button>
        </div>
        </FadeIn>

        <FadeIn delay={0.35}>
        <Separator className="my-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent h-0.5 border-0" />
        </FadeIn>

        {/* Two-column layout like the CV */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left column — Profil + Compétences */}
          <div className="space-y-12">
            {/* Profil */}
            <FadeIn>
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
                Profil
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Développeur full-stack en reconversion, actuellement en
                  formation intensive à The Hacking Project, où je conçois des
                  applications web complètes avec JavaScript, React, Next.js,
                  Node.js et bases de données.
                </p>
                <p>
                  Issu d&apos;un parcours en éducation et en coaching sportif,
                  j&apos;ai appris à évoluer dans des environnements exigeants
                  et imprévisibles. Cette reconversion est un choix volontaire :
                  celui d&apos;entrer dans un domaine en constante évolution, où
                  l&apos;on apprend chaque jour et où chaque problème est un
                  nouveau défi à résoudre.
                </p>
                <p>
                  Le développement web représente pour moi un terrain
                  d&apos;exploration permanent : comprendre l&apos;inconnu,
                  analyser, expérimenter, corriger et progresser. Je recherche
                  une opportunité junior en stage de 6 mois pour finaliser
                  ma formation, m&apos;investir dans
                  des projets ambitieux, relever des défis techniques et
                  continuer à évoluer rapidement au sein d&apos;une équipe
                  engagée.
                </p>
              </div>
            </section>
            </FadeIn>

            {/* Compétences */}
            <FadeIn>
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
                Compétences
              </h2>
              <div className="mt-4">
                <SkillBars />
              </div>
            </section>
            </FadeIn>

            {/* Technologies */}
            <FadeIn>
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
                Technologies
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>
            </FadeIn>

            {/* Environnement de travail */}
            <FadeIn>
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
                Environnement de travail
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {workEnvironment.map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>
            </FadeIn>

            {/* Soft skills */}
            <FadeIn>
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
                Soft Skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>
            </FadeIn>
          </div>

          {/* Right column — Formation + Expérience */}
          <div className="space-y-12">
            {/* Formation */}
            <FadeIn>
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
                Formation
              </h2>
              <div className="mt-4">
                <Timeline items={educationItems} />
              </div>
            </section>
            </FadeIn>

            {/* Expérience */}
            <FadeIn>
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider text-primary">
                Expériences professionnelles
              </h2>
              <div className="mt-4">
                <Timeline items={workItems} />
              </div>
            </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
