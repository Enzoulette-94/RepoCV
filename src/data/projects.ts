export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  duration: string;
  highlights: string[];
  image: string;
  gradient?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  screenshots?: string[];
  status?: "completed" | "in-progress";
};

export const projects: Project[] = [
  {
    slug: "marketplace",
    title: "Marketplace",
    description:
      "Backend d'une marketplace — authentification, paiement Stripe et API REST. Projet collaboratif (rôle : backend uniquement).",
    longDescription:
      "Premier projet en équipe avec des étudiants de ma promotion — une vraie découverte du travail collaboratif : se répartir les tâches, communiquer sur l'avancement, s'adapter au rythme des autres. J'ai pris en charge l'intégralité du backend : authentification avec Devise, paiement sécurisé via Stripe, modélisation de la base de données PostgreSQL et création des API REST consommées par le frontend de l'équipe.",
    role: "Backend",
    duration: "1 mois",
    highlights: [
      "Premier projet en équipe — découverte du travail collaboratif et de la communication entre développeurs",
      "Authentification complète avec Devise et paiement sécurisé via Stripe",
      "API REST consommées par le frontend, modélisation PostgreSQL",
    ],
    image: "/projects/marketplace.png",
    gradient: "linear-gradient(135deg, #5a1a1a 0%, #3d1515 100%)",
    tags: ["Ruby on Rails", "PostgreSQL", "Devise", "Stripe", "HTML", "SCSS"],
    github: "https://github.com/THP-Lab/template-marketplace",
    demo: "http://q8o4swwo4okswk88c00osg08.157.180.49.91.sslip.io/",
    featured: true,
    screenshots: ["/projects/marketplace.png"],
  },
  {
    slug: "gain-and-glory",
    title: "GainAndGlory",
    description:
      "Application de suivi sportif gamifiée — progresse, débloque des badges et affronte ta communauté.",
    longDescription:
      "GainAndGlory est mon projet de fin de formation — 3 semaines pour concevoir et développer une application de A à Z, seul, avec une totale liberté sur les choix techniques. Une PWA de suivi sportif gamifiée, pensée pour la musculation et la course à pied. L'utilisateur gagne de l'XP à chaque séance, monte en niveau (titres thématiques LOTR/DBZ), débloque des badges selon ses performances, et suit sa progression via des graphiques et un calendrier d'activité. Le feed social permet de partager ses sessions, liker et commenter celles des autres en temps réel. Des objectifs collectifs par équipes et des classements globaux (tonnage, distance, XP) complètent l'aspect communautaire. Côté technique : React 19 + TypeScript, Vite, Tailwind CSS v4, Framer Motion, Supabase (Auth, PostgreSQL, Realtime, Storage). Navigation adaptive : SideNav desktop + BottomNav mobile avec drawer \"Plus\". PWA installable avec service worker Workbox.",
    role: "Full-stack solo",
    duration: "En cours",
    highlights: [
      "Système de gamification complet : XP, niveaux (formule exponentielle), badges et streak quotidien",
      "Feed social temps réel via Supabase Realtime (likes, commentaires, partage de sessions)",
      "PWA installable, navigation adaptive desktop/mobile, lazy loading des pages",
      "Architecture Supabase : RLS, VIEWs calculées (tonnage, km chaussures), Auth + Storage",
      "Classements globaux et records personnels par exercice (Hall of Fame)",
    ],
    image: "",
    gradient: "linear-gradient(135deg, #1a3a6b 0%, #0f2444 100%)",
    tags: ["React 19", "TypeScript", "Supabase", "Tailwind CSS v4", "Vite", "Framer Motion", "PWA", "PostgreSQL"],
    github: "https://github.com/Enzoulette-94/GainAndGlory",
    featured: true,
    status: "in-progress",
  },
  {
    slug: "14-fait-vriller",
    title: "14 Fait Vriller",
    description:
      "Site prank humoristique conçu pour piéger ses amis.",
    longDescription:
      "Projet créatif fait pour le fun en 1h. Un petit piège où la réponse est oui quoi qu'il arrive — le bouton \"Non\" s'échappe à chaque fois que la souris s'en approche. Rien de sérieux, mais une bonne excuse pour jouer avec les événements souris en JavaScript vanilla.",
    role: "Solo",
    duration: "1h",
    highlights: [
      "Projet fun — manipulation des événements souris en JavaScript vanilla",
      "Le bouton 'Non' se déplace aléatoirement avant d'être cliqué",
    ],
    image: "/projects/14-fait-vriller.png",
    gradient: "linear-gradient(135deg, #5a1f3a 0%, #3d1530 100%)",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Enzoulette-94/14-fait-vriller",
    demo: "https://enzoulette-94.github.io/14-fait-vriller/",
    featured: true,
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description:
      "Ce portfolio — construit avec Next.js 16, shadcn/ui et Tailwind CSS v4.",
    longDescription:
      "Construit en parallèle de ma formation sur quelques semaines, sans jamais y passer de longues sessions d'affilée. L'occasion d'explorer Next.js 16, TypeScript, Tailwind CSS v4 et Framer Motion dans un vrai contexte de production. Design sobre et responsive, pensé pour mettre en valeur les projets et le parcours.",
    role: "Solo",
    duration: "Quelques semaines (en parallèle de la formation)",
    highlights: [
      "Next.js 16, TypeScript, Tailwind CSS v4 et Framer Motion",
      "Design sobre et responsive, optimisé pour le recrutement",
      "Construit en parallèle de la formation — itérations régulières",
    ],
    image: "/projects/portfolio.png",
    tags: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Enzoulette-94",
    featured: true,
  },
];
