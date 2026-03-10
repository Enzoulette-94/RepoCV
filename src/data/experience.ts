export type TimelineItem = {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
  type: "work" | "education";
};

export const timeline: TimelineItem[] = [
  {
    title: "Assistant d'éducation",
    company: "Lycée Arago & Lycée Buffon, Paris",
    period: "Sept 2020 — Août 2025",
    description:
      "Encadrement, aide à l'étude et aux devoirs, accompagnement individualisé des étudiants. Participation aux activités éducatives, sportives et culturelles. Gestion de l'assiduité des élèves et tâches administratives.",
    type: "work",
  },
  {
    title: "Coach sportif indépendant",
    company: "BodyHit et Full Body",
    period: "Mars 2019 — Août 2025",
    description:
      "Création de programmes spécialisés en fonction des besoins des clients. Suivi physique et pédagogue du client.",
    type: "work",
  },
  {
    title: "Formation intensive Full-Stack",
    institution: "The Hacking Project",
    period: "Sept 2025 — Mars 2026",
    description:
      "Formation intensive en développement web full stack : HTML, CSS, JavaScript, React, Next.js, Node.js, bases de données, méthodologie agile et travail en équipe.",
    type: "education",
  },
{
    title: "Licence STAPS — spécialité MEEF",
    institution: "Paris Descartes",
    period: "Sept 2015 — Juin 2019",
    description:
      "Formation en sciences et techniques des activités physiques et sportives, orientée métiers de l'enseignement et de l'éducation.",
    type: "education",
  },
  {
    title: "Baccalauréat ES",
    institution: "Lycée Notre-Dame des Oiseaux",
    period: "2015",
    description: "Obtention du baccalauréat économique et social.",
    type: "education",
  },
];
