"use client";

import Link from "next/link";
import { Download, Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/about/timeline";
import { FadeIn } from "@/components/about/fade-in";
import { timeline } from "@/data/experience";
import { skills } from "@/data/skills";

const contactInfo = [
  { icon: Phone, label: "06 21 84 79 57", href: "tel:+33621847957" },
  { icon: Mail, label: "Enzonatali75@gmail.com", href: "mailto:Enzonatali75@gmail.com" },
  { icon: MapPin, label: "Saint-Maur-des-Fossés, 94100" },
  { icon: Github, label: "Enzoulette-94", href: "https://github.com/Enzoulette-94" },
];

const workEnvironment = [
  "Claude", "Claude Code", "Codex", "Warp", "VS Code", "Figma", "Docker", "Vercel", "Git / GitHub",
];

const hobbies = [
  { name: "Sports collectifs", description: "Bercé depuis petit par ma famille — grand fan de Football, Basket et Football Américain." },
  { name: "Gastronomie", description: "Manger généreusement avec mes proches." },
  { name: "Jeux vidéo et culture numérique", description: "Joueur de Pokémon, Clair Obscur, FIFA et Le Seigneur des Anneaux sur PS2." },
];

const softSkills = [
  "Travail d'équipe", "Communication", "Résolution de problèmes",
  "Autonomie", "Curiosité", "Adaptabilité", "Méthode Agile",
];

export function AboutSection() {
  const workItems = timeline.filter((t) => t.type === "work");
  const educationItems = timeline.filter((t) => t.type === "education");

  return (
    <section id="about" className="scroll-mt-16 container mx-auto max-w-5xl px-4 py-24">
      <FadeIn delay={0.1}>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">À propos de moi</h2>
          <p className="mt-2 text-lg font-medium text-primary">Développeur Web Full Stack</p>
        </div>
      </FadeIn>

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
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                {content}
              </a>
            ) : (
              <span key={item.label}>{content}</span>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/cv.pdf" target="_blank" download="EnzoNatali26-DevFusllStack.pdf">
              <Download className="mr-2 h-4 w-4" />
              Télécharger mon CV
            </Link>
          </Button>
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <Separator className="my-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent h-0.5 border-0" />
      </FadeIn>

      <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div className="space-y-12">
          <FadeIn>
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wider text-primary">Profil</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Développeur full-stack en reconversion, actuellement en formation intensive à The Hacking Project,
                  où je conçois des applications web complètes avec JavaScript, React, Next.js, Node.js et bases de données.
                </p>
                <p>
                  Issu d&apos;un parcours en éducation et en coaching sportif, j&apos;ai appris à évoluer dans des
                  environnements exigeants et imprévisibles. Cette reconversion est un choix volontaire : celui d&apos;entrer
                  dans un domaine en constante évolution, où l&apos;on apprend chaque jour et où chaque problème est un
                  nouveau défi à résoudre.
                </p>
                <p>
                  Le développement web représente pour moi un terrain d&apos;exploration permanent : comprendre l&apos;inconnu,
                  analyser, expérimenter, corriger et progresser. Je recherche une opportunité pour m&apos;investir dans
                  des projets ambitieux, relever des défis techniques et
                  continuer à évoluer rapidement au sein d&apos;une équipe engagée.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wider text-primary">Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary">{skill.name}</Badge>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wider text-primary">Environnement de travail</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {workEnvironment.map((tool) => (
                  <Badge key={tool} variant="secondary">{tool}</Badge>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wider text-primary">Soft Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wider text-primary">Centres d&apos;intérêt</h3>
              <div className="mt-4 space-y-3">
                {hobbies.map((hobby) => (
                  <div key={hobby.name}>
                    <p className="text-sm font-medium">{hobby.name}</p>
                    <p className="text-sm text-muted-foreground">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>

        {/* Right column */}
        <div className="space-y-12">
          <FadeIn>
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wider text-primary">Formation</h3>
              <div className="mt-4">
                <Timeline items={educationItems} />
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wider text-primary">Expériences professionnelles</h3>
              <div className="mt-4">
                <Timeline items={workItems} />
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
