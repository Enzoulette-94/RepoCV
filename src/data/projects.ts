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
    slug: "gain-and-glory",
    title: "GainAndGlory",
    description:
      "Application de suivi sportif gamifiée — progresse, débloque des badges et affronte ta communauté.",
    longDescription:
      "GainAndGlory est mon projet de fin de formation — 3 semaines pour concevoir et développer une application de A à Z, seul, avec une totale liberté sur les choix techniques. Une PWA de suivi sportif gamifiée, pensée pour la musculation et la course à pied. L'utilisateur gagne de l'XP à chaque séance, monte en niveau (titres thématiques LOTR/DBZ), débloque des badges selon ses performances, et suit sa progression via des graphiques et un calendrier d'activité. Le feed social permet de partager ses sessions, liker et commenter celles des autres en temps réel. Des objectifs collectifs par équipes et des classements globaux (tonnage, distance, XP) complètent l'aspect communautaire.\n\nCôté technique : React 19 + TypeScript, Vite, Tailwind CSS v4, Framer Motion, Supabase (Auth, PostgreSQL, Realtime, Storage). Navigation adaptive : SideNav desktop + BottomNav mobile avec drawer \"Plus\". PWA installable avec service worker Workbox.",
    role: "Full-stack solo",
    duration: "3 semaines",
    highlights: [
      "Système de gamification complet : XP, niveaux (formule exponentielle), badges et streak quotidien",
      "Feed social temps réel via Supabase Realtime (likes, commentaires, partage de sessions)",
      "PWA installable, navigation adaptive desktop/mobile, lazy loading des pages",
      "Architecture Supabase : RLS, VIEWs calculées (tonnage, km chaussures), Auth + Storage",
      "Classements globaux et records personnels par exercice (Hall of Fame)",
    ],
    image: "/projects/GandG.png",
    gradient: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 100%)",
    tags: ["React 19", "TypeScript", "Supabase", "Tailwind CSS v4", "Vite", "Framer Motion", "PWA", "PostgreSQL"],
    github: "https://github.com/Enzoulette-94/GainAndGlory",
    demo: "https://gg.enzonatali.dev/",
    featured: true,
    status: "completed",
    screenshots: [
      "/projects/gain-and-glory/1.png",
      "/projects/gain-and-glory/2.png",
      "/projects/gain-and-glory/3.png",
      "/projects/gain-and-glory/4.png",
    ],
  },
  {
    slug: "marketplace",
    title: "Haubegerie de Pontius",
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
    demo: "https://haubergeriedepontius.com/",
    featured: true,
    screenshots: ["/projects/marketplace.png"],
  },
  {
    slug: "rubberduck-ai",
    title: "Rubberduck AI",
    description:
      "Un assistant IA qui t'aide à résoudre tes problèmes en te guidant par les bonnes questions — sans jamais te donner la réponse toute faite.",
    longDescription:
      "En programmation, il existe une technique appelée \"rubber duck debugging\" : expliquer son problème à voix haute à un canard en plastique. Le simple fait de verbaliser force à reformuler, et souvent la solution apparaît d'elle-même. Rubberduck AI remplace le canard par une IA : l'utilisateur décrit son bug ou son blocage, et l'assistant l'aide à raisonner étape par étape pour trouver la solution — sans donner la réponse directement, mais en posant les bonnes questions.\n\nProjet collaboratif construit en monorepo Turborepo. L'utilisateur se connecte via Google ou GitHub OAuth, puis échange avec l'IA en temps réel grâce au streaming SSE (les réponses s'affichent mot par mot comme sur ChatGPT). Les conversations sont sauvegardées. Côté technique : React 19 + Vite + React Router v7 côté client, Express v5 + Prisma + PostgreSQL + OpenAI Responses API côté serveur.",
    role: "Full-stack — collaboratif",
    duration: "En cours",
    highlights: [
      "Streaming SSE temps réel avec l'OpenAI Responses API — contrat delta / done / error",
      "Auth Google OAuth complète avec cookies HTTP-only et sessions persistées",
      "Monorepo Turborepo : frontend Vite/React et backend Express totalement découplés",
      "Architecture en couches : routes, services IA, services chat — zéro fuite de secrets côté client",
    ],
    image: "/projects/rubberduck-ai.png",
    tags: ["React", "TypeScript", "Vite", "Express", "Prisma", "PostgreSQL", "OpenAI", "Turborepo", "Tailwind CSS"],
    github: "https://github.com/Naethr/Rubberduck_AI",
    featured: true,
    status: "in-progress",
    screenshots: [
      "/projects/rubberduck-ai/accueil.png",
    ],
  },
  {
    slug: "panem",
    title: "Boulangerie Panem",
    description:
      "Site e-commerce pour une boulangerie artisanale — boutique click & collect, paiement Stripe et formulaire de contact.",
    longDescription:
      "Site vitrine et e-commerce conçu pour une boulangerie artisanale à Saint-Maur-des-Fossés. Les clients peuvent parcourir le catalogue (pains, viennoiseries, pâtisseries), composer leur panier et passer commande en click & collect avec paiement sécurisé via Stripe. Le site inclut une galerie, une page actualités et un formulaire de contact avec envoi d'email via Resend et protection hCaptcha.\n\nCôté technique : Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion pour les animations, Zustand pour le panier, Stripe pour le paiement, Resend pour les emails. Design haut de gamme avec typographies Google Fonts (IM Fell English, Cormorant Garamond, Jost) et une palette sombre et dorée.",
    role: "Solo",
    duration: "~2 semaines",
    highlights: [
      "Boutique click & collect complète avec panier Zustand et paiement Stripe",
      "Formulaire de contact avec envoi d'email via Resend et protection hCaptcha",
      "Design haut de gamme — typographie élégante, palette sombre et dorée",
      "Galerie, page actualités et navigation multi-page avec Framer Motion",
    ],
    image: "/projects/panem.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Resend", "Zustand", "Framer Motion"],
    github: "https://github.com/Enzoulette-94/Panem",
    featured: true,
    status: "in-progress",
    screenshots: [
      "/projects/panem/accueil.png",
      "/projects/panem/boutique.png",
      "/projects/panem/galerie.png",
      "/projects/panem/contact.png",
    ],
  },
  {
    slug: "assg-site",
    title: "A.S.S.G",
    description:
      "Site vitrine pour l'Association Sportive Sainte-Geneviève — activités sportives pour enfants, inscription et actualités.",
    longDescription:
      "Site vitrine multipage conçu pour l'Association Sportive Sainte-Geneviève, une asso proposant des activités sportives et ludiques aux enfants (Baby Gym, Judo, Sports de Raquette, Jeux Traditionnels). Le site couvre l'ensemble des besoins de l'association : présentation des activités, actualités, informations pratiques et formulaire d'inscription téléchargeable. Design coloré et accessible, adapté à une audience familiale, avec une navigation responsive via Alpine.js.",
    role: "Solo",
    duration: "1 semaine",
    highlights: [
      "Site multipage statique entièrement responsive (mobile-first)",
      "Alpine.js pour la navigation mobile et les interactions légères",
      "Palette graphique sur mesure avec Tailwind CSS v3 — typo Boogaloo + Nunito",
      "Déployé sur Vercel avec build CSS optimisé (minifié)",
    ],
    image: "/projects/assg-site.png",
    tags: ["HTML", "Tailwind CSS", "Alpine.js", "JavaScript", "Vercel"],
    github: "https://github.com/Enzoulette-94/assg-site",
    demo: "https://www.assgparis.fr/",
    featured: false,
    status: "completed",
    screenshots: [
      "/projects/assg-site/accueil.png",
      "/projects/assg-site/club.png",
      "/projects/assg-site/activites.png",
      "/projects/assg-site/actualites.png",
      "/projects/assg-site/inscription.png",
      "/projects/assg-site/information.png",
    ],
  },
];
