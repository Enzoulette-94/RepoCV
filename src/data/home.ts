export const contact = {
  email: "Enzonatali75@gmail.com",
  phone: "06 21 84 79 57",
  phoneHref: "tel:+33621847957",
  cv: "/cv.pdf",
  cvFileName: "EnzoNatali2026-DevFullStack.pdf",
};

export type PathStep = {
  year: string;
  title: string;
  where: string;
  when: string;
  now?: boolean;
};

export const pathSteps: PathStep[] = [
  { year: "2015", title: "Licence STAPS", where: "Université Paris Descartes", when: "2015 · 2019" },
  { year: "2019", title: "Coach sportif", where: "BodyHit et Full Body", when: "2019 · 2025" },
  { year: "2020", title: "Assistant d’éducation", where: "Lycées Arago et Buffon", when: "2020 · 2025" },
  { year: "2025", title: "Formation full-stack", where: "The Hacking Project", when: "sept. 2025 · mars 2026" },
  { year: "2026", title: "Formation Builder IA", where: "The Hacking Project", when: "avril · mai 2026" },
  { year: "Aujourd’hui", title: "Développeur web freelance", where: "Etcetera Studio, Panem", when: "depuis avril 2026", now: true },
];

export type Hobby = {
  id: string;
  tag: string;
  title: string;
  lead: string;
  /** Photo de fond, très estompée */
  background?: string;
  items: { title: string; subtitle?: string; text: string }[];
};

export const hobbies: Hobby[] = [
  {
    id: "sport",
    tag: "Depuis tout petit",
    title: "Le sport",
    lead: "J’ai été bercé dedans par ma famille, et je suis toujours un grand fan. Le sport a été mon premier amour.",
    background: "/home/sport.jpg",
    items: [
      {
        title: "Basket",
        subtitle: "Une passion partagée à la maison",
        text: "Fan de NBA depuis que j’ai découvert le grand Stephen Curry. Je me suis ensuite marié avec une arbitre de basket de haut niveau : ce sport fait partie de mon quotidien depuis maintenant 8 ans.",
      },
      {
        title: "Football américain",
        subtitle: "Mon coup de cœur",
        text: "Découvert au Flash de La Courneuve grâce à un ami, sans même connaître les règles. Un après-midi d’essai, et ça a été le coup de foudre. Pour moi, c’est le sport le plus passionnant à regarder tactiquement, avec les plus gros renversements chaque week-end.",
      },
      {
        title: "Football",
        subtitle: "Une histoire de famille",
        text: "C’est génétique, côté paternel : un grand-père, un père et un oncle fans de foot. Je joue au foot depuis que je tiens debout, et cette passion ne m’a jamais quitté.",
      },
    ],
  },
  {
    id: "partage",
    tag: "Avec mes proches",
    title: "Les moments à plusieurs",
    lead: "Ce que j’aime avant tout, c’est partager.",
    items: [
      {
        title: "Les discussions",
        text: "Avec deux parents qui travaillent dans la musique (le rock pour mon père, le jazz pour ma mère), j’ai rencontré beaucoup de monde depuis l’enfance, entre les concerts et les rendez-vous. Ils m’ont transmis le plaisir d’être sociable, d’écouter et d’être curieux des autres. Je ne dirai jamais non à une discussion.",
      },
      {
        title: "Le sport",
        text: "Le sport m’a permis de rencontrer la plupart de mes proches, y compris ma femme. Ce qui m’aide à traverser la vie avec beaucoup de facilité, ce sont les séances quotidiennes avec ma bande. Et les événements aussi : semi-marathon, Spartan Race, tournoi de beach-volley. Jamais seul.",
      },
      {
        title: "Les plats généreux",
        text: "Pour moi, un bon moment est souvent lié à ce qu’il y a sur la table. Mon plat ultime, c’est la raclette : du monde, des choix pour chacun, une ambiance. Bref, elle coche toutes les cases.",
      },
    ],
  },
  {
    id: "jeux",
    tag: "Manette en main",
    title: "Les jeux vidéo",
    lead: "Des jeux qui m’accompagnent depuis longtemps, et d’autres plus récents.",
    background: "/home/jeux.jpg",
    items: [
      {
        title: "Pokémon",
        subtitle: "Ma madeleine de Proust",
        text: "L’aventure d’une vie. Génération 90, c’est le jeu qui m’accompagne depuis toujours, et je prends plaisir à découvrir chaque nouvel opus. Malgré une grosse baisse de qualité, je ne peux pas m’en détacher et j’y reviens toujours. Ectoplasma ♥",
      },
      {
        title: "Clair Obscur",
        subtitle: "Pour ceux qui viendront après",
        text: "Découvert un peu après la hype, sur les conseils de mes amis. La plus grosse claque que j’ai prise devant un écran : l’œuvre la plus complète, du scénario au gameplay jusqu’à la musique. J’ai pleuré deux fois devant cette magie.",
      },
      {
        title: "Le Seigneur des Anneaux",
        subtitle: "Sur PS2",
        text: "Le premier jeu que j’ai eu sur ma console préférée, et sûrement celui auquel j’ai le plus joué de ma vie. Des heures à revivre l’aventure de la Communauté, en choisissant toujours Legolas (j’étais pas loin de créer un fan club). J’attends une réédition next-gen chaque jour qui passe.",
      },
    ],
  },
];

/** Nuage de mots : position en % sur ordinateur ; sur mobile, les mots sont regroupés par loisir */
export const cloudWords: { word: string; size: "l" | "m" | "s"; hobby: string; x: number; y: number }[] = [
  { word: "Le sport", size: "l", hobby: "sport", x: 16, y: 20 },
  { word: "Basket", size: "m", hobby: "sport", x: 34, y: 8 },
  { word: "Football", size: "m", hobby: "sport", x: 7, y: 46 },
  { word: "Football américain", size: "s", hobby: "sport", x: 18, y: 76 },
  { word: "Les moments à plusieurs", size: "l", hobby: "partage", x: 46, y: 86 },
  { word: "Les discussions", size: "s", hobby: "partage", x: 50, y: 7 },
  { word: "La raclette", size: "s", hobby: "partage", x: 22, y: 95 },
  { word: "Les jeux vidéo", size: "l", hobby: "jeux", x: 82, y: 22 },
  { word: "Pokémon", size: "m", hobby: "jeux", x: 66, y: 8 },
  { word: "Clair Obscur", size: "m", hobby: "jeux", x: 84, y: 70 },
  { word: "Le Seigneur des Anneaux", size: "s", hobby: "jeux", x: 80, y: 93 },
];
