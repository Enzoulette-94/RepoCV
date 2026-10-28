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
  inProduction?: boolean;
};

export const projects: Project[] = [
  {
    slug: "etcetera-studio",
    title: "Etcetera Studio",
    description:
      "J'ai créé le site d'Etcetera Studio, un institut de beauté et de bien-être à Chanteloup-en-Brie, pensé pour qu'on le trouve facilement sur Google.",
    longDescription:
      "Amèle et Sarah m'ont contacté pour créer le site de leur institut. Amèle s'occupe des ongles (manucure russe, soin japonais, pédicure), Sarah des soins du corps (drainage lymphatique, madérothérapie). Je voulais que le site donne la même impression que leur studio : un endroit doux et apaisant, où l'on vient prendre soin de soi. J'ai donc misé sur des tons chauds, beaucoup de photos du lieu et des textes qui parlent du bien-être plus que de la technique.\n\nLa partie qui m'a le plus intéressé, c'est le référencement. Un institut de quartier vit de sa clientèle locale, donc il fallait qu'on le trouve en cherchant « manucure » ou « drainage lymphatique » près de chez soi. J'ai fait en sorte que Google puisse lire tout le site, ses horaires, ses prestations et ses tarifs. Aujourd'hui, le site est bien référencé.\n\nJ'ai avancé avec elles au fil de leurs retours pendant trois semaines, jusqu'à la mise en ligne.",
    role: "Solo",
    duration: "3 semaines",
    highlights: [
      "J'ai travaillé directement avec les deux gérantes, de leurs premières idées jusqu'à la mise en ligne",
      "J'ai construit un univers doux et chaleureux qui reflète l'esprit bien-être du studio",
      "J'ai travaillé le référencement local pour que l'institut ressorte sur Google",
      "J'ai soigné la version mobile pour que le site s'ouvre vite sur téléphone",
      "J'ai relié chaque bouton « Réserver » à leur page de prise de rendez-vous en ligne",
    ],
    image: "/projects/etcetera-studio.png",
    tags: ["React 19", "TypeScript", "Vite", "React Router", "Tailwind CSS v4", "Framer Motion", "SSR", "SEO"],
    demo: "https://etceterastudio.fr/",
    featured: true,
    status: "completed",
    screenshots: [
      "/projects/etcetera-studio/accueil.png",
      "/projects/etcetera-studio/studio.png",
      "/projects/etcetera-studio/manucure.png",
      "/projects/etcetera-studio/drainage.png",
      "/projects/etcetera-studio/avis.png",
    ],
  },
  {
    slug: "gain-and-glory",
    title: "GainAndGlory",
    description:
      "Une appli de suivi sportif que j'ai créée pour mes amis : chaque séance rapporte de l'XP, des badges et une place au classement.",
    longDescription:
      "Avec mes amis, on s'entraîne beaucoup, entre la musculation et la course à pied, et on aime se tirer la bourre. J'ai voulu en faire une appli : chaque séance enregistrée rapporte de l'XP, on monte en niveau, on débloque des badges et on se compare dans les classements.\n\nJ'ai commencé GainAndGlory comme projet de fin de formation : trois semaines, seul, avec le choix total des outils. On peut y suivre sa progression avec des graphiques, partager ses séances, liker et commenter celles des autres, et se fixer des objectifs en équipe.\n\nJe continue à travailler dessus pour l'améliorer avec les retours de mes amis.",
    role: "Solo",
    duration: "3 semaines",
    highlights: [
      "J'ai imaginé tout le système de progression : XP, niveaux, badges et séries de jours d'entraînement",
      "J'ai créé un fil d'actualité où chacun voit en direct les séances des autres",
      "J'ai mis en place des classements et un mur des records personnels",
      "J'ai rendu l'appli installable sur le téléphone, comme une vraie application",
    ],
    image: "/projects/GandG.png",
    gradient: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 100%)",
    tags: ["React 19", "TypeScript", "Supabase", "Tailwind CSS v4", "Vite", "Framer Motion", "PWA", "PostgreSQL"],
    github: "https://github.com/Enzoulette-94/GainAndGlory",
    demo: "https://gg.enzonatali.dev/",
    inProduction: true,
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
    slug: "assg-site",
    title: "A.S.S.G",
    description:
      "Le site de l'association sportive Sainte-Geneviève, que j'ai fait bénévolement pour un ami. Les familles l'utilisent pour découvrir les activités et inscrire leurs enfants.",
    longDescription:
      "Un ami s'occupe de l'Association Sportive Sainte-Geneviève, qui propose des activités aux enfants : baby gym, judo, sports de raquette et jeux traditionnels. Je lui ai créé leur site bénévolement.\n\nLes parents y trouvent les activités, les actualités, les informations pratiques et le formulaire d'inscription. Comme le public est familial, j'ai choisi des couleurs vives et une navigation très simple, pensée d'abord pour le téléphone. Aujourd'hui, les familles l'utilisent vraiment.",
    role: "Solo, bénévole",
    duration: "1 semaine",
    highlights: [
      "J'ai réalisé ce site bénévolement pour l'association d'un ami",
      "Le site est en ligne et utilisé par les familles",
      "J'ai choisi un design coloré et simple, adapté aux parents et aux enfants",
      "Je l'ai pensé d'abord pour le téléphone",
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
  {
    slug: "rubberduck-ai",
    title: "Rubberduck AI",
    description:
      "Une IA qui ne donne pas la réponse mais aide à la trouver, en posant les bonnes questions. Un projet qu'on construit en équipe.",
    longDescription:
      "Quand un développeur bloque, une astuce connue consiste à expliquer son problème à voix haute à un canard en plastique : en le formulant, on finit souvent par trouver la solution. Avec Rubberduck AI, le canard est remplacé par une IA. On lui décrit son blocage, et au lieu de donner la réponse, elle pose des questions pour aider à raisonner.\n\nOn construit ce projet en équipe, et on fait vraiment tout ensemble : on réfléchit aux fonctionnalités à plusieurs et on se partage le code sans frontière entre front et back. On peut se connecter avec Google ou GitHub, les réponses s'affichent au fur et à mesure et les conversations sont sauvegardées.",
    role: "Travail d'équipe",
    duration: "En cours",
    highlights: [
      "On a tout construit à plusieurs, en partageant le travail sur toutes les parties",
      "On a réglé l'IA pour qu'elle guide par des questions au lieu de donner la réponse",
      "On a mis en place la connexion avec Google et GitHub",
      "Les réponses de l'IA s'affichent mot à mot, comme sur ChatGPT",
    ],
    image: "/projects/rubberduck-ai.png",
    tags: ["React", "TypeScript", "Vite", "Express", "Prisma", "PostgreSQL", "OpenAI", "Turborepo", "Tailwind CSS"],
    github: "https://github.com/Naethr/Rubberduck_AI",
    inProduction: true,
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
      "Le site d'une vraie boulangerie à Saint-Maur : on choisit son pain en ligne, on paie et on passe le récupérer.",
    longDescription:
      "La gérante d'une boulangerie artisanale de Saint-Maur-des-Fossés m'a contacté pour créer son site. Je l'ai pensé comme la vitrine de la boutique : on y découvre les pains, les viennoiseries et les pâtisseries, on remplit son panier, on paie en ligne et on passe récupérer sa commande.\n\nJ'ai aussi ajouté une galerie, une page d'actualités et un formulaire de contact. Pour l'ambiance, j'ai choisi des couleurs sombres et dorées et des typographies à l'ancienne, pour rappeler le côté artisanal.\n\nLe site est terminé. J'attends les photos de la boulangerie pour le mettre en ligne.",
    role: "Solo",
    duration: "~2 semaines",
    highlights: [
      "J'ai construit une boutique en ligne complète, du panier au paiement",
      "J'ai mis en place la commande à retirer en boutique",
      "J'ai créé un formulaire de contact qui envoie directement un e-mail à la boulangerie",
      "J'ai choisi une ambiance artisanale : couleurs sombres et dorées, typographies à l'ancienne",
    ],
    image: "/projects/panem.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Resend", "Zustand", "Framer Motion"],
    github: "https://github.com/Enzoulette-94/Panem",
    inProduction: true,
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
    slug: "marketplace",
    title: "Haubergerie de Pontius",
    description:
      "Mon premier projet en équipe, à trois. Je me suis occupé de tout le backend : comptes utilisateurs, paiement Stripe et API.",
    longDescription:
      "C'était mon premier projet en équipe : on était trois étudiants de ma promotion à construire une marketplace. Je me suis occupé de tout le backend, c'est-à-dire les comptes utilisateurs, le paiement, la base de données et l'API utilisée par le reste de l'équipe.\n\nLe plus dur a été le paiement avec Stripe. J'ai passé beaucoup de temps à comprendre comment tout s'enchaîne, de la commande jusqu'à la confirmation du paiement, avant que ça fonctionne vraiment.\n\nC'est aussi la première fois que je travaillais en méthode agile. On se répartissait les tâches, on faisait le point régulièrement et on s'adaptait au rythme de chacun. J'y ai appris à communiquer sur mon avancement et à faire en sorte que mon travail s'emboîte avec celui des autres.",
    role: "Backend, équipe de 3",
    duration: "1 mois",
    highlights: [
      "J'ai développé tout le backend de la marketplace pour le reste de l'équipe",
      "J'ai intégré le paiement Stripe, la partie qui m'a demandé le plus de travail",
      "J'ai découvert la méthode agile : répartition des tâches, points réguliers, entraide",
    ],
    image: "/projects/marketplace.png",
    gradient: "linear-gradient(135deg, #5a1a1a 0%, #3d1515 100%)",
    tags: ["Ruby on Rails", "PostgreSQL", "Devise", "Stripe", "HTML", "SCSS"],
    github: "https://github.com/THP-Lab/template-marketplace",
    featured: true,
    screenshots: ["/projects/marketplace.png"],
  },
];
