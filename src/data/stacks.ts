import { toolIcons } from "./tool-icons";

export type Tool = {
  label: string;
  /** Tracé SVG du logo ; sinon une lettre */
  icon?: string;
  mono?: string;
};

export const tools = {
  claude: { label: "Claude", icon: toolIcons.claude },
  chatgpt: { label: "ChatGPT", icon: toolIcons.openai },
  react: { label: "React", icon: toolIcons.react },
  next: { label: "Next.js", icon: toolIcons.nextdotjs },
  typescript: { label: "TypeScript", icon: toolIcons.typescript },
  javascript: { label: "JavaScript", icon: toolIcons.javascript },
  html: { label: "HTML", icon: toolIcons.html5 },
  tailwind: { label: "Tailwind CSS", icon: toolIcons.tailwindcss },
  scss: { label: "SCSS", icon: toolIcons.sass },
  alpine: { label: "Alpine.js", icon: toolIcons.alpinedotjs },
  motion: { label: "Framer Motion", icon: toolIcons.framer },
  zustand: { label: "Zustand", mono: "Z" },
  express: { label: "Express", icon: toolIcons.express },
  rails: { label: "Ruby on Rails", icon: toolIcons.rubyonrails },
  prisma: { label: "Prisma", icon: toolIcons.prisma },
  postgresql: { label: "PostgreSQL", icon: toolIcons.postgresql },
  supabase: { label: "Supabase", icon: toolIcons.supabase },
  vite: { label: "Vite", icon: toolIcons.vite },
  turborepo: { label: "Turborepo", icon: toolIcons.turborepo },
  stripe: { label: "Stripe", icon: toolIcons.stripe },
  resend: { label: "Resend", icon: toolIcons.resend },
  vercel: { label: "Vercel", icon: toolIcons.vercel },
  openai: { label: "API OpenAI", icon: toolIcons.openai },
} satisfies Record<string, Tool>;

export type ToolId = keyof typeof tools;

/** IA qui m'aident à coder, sur tous les projets */
export const codingAi: ToolId[] = ["claude", "chatgpt"];

export const toolGroups: { title: string; tools: ToolId[] }[] = [
  { title: "Front", tools: ["react", "next", "typescript", "javascript", "html", "tailwind", "scss", "alpine", "motion", "zustand"] },
  { title: "Back et données", tools: ["express", "rails", "prisma", "postgresql", "supabase"] },
  { title: "Outils et services", tools: ["vite", "turborepo", "stripe", "resend", "vercel", "openai"] },
];

/** Outils de chaque projet, par slug, avec un nom court pour les filtres */
export const projectTools: Record<string, { short: string; tools: ToolId[] }> = {
  "etcetera-studio": { short: "Etcetera", tools: ["react", "typescript", "vite", "tailwind", "motion"] },
  panem: { short: "Panem", tools: ["next", "typescript", "tailwind", "motion", "zustand", "stripe", "resend"] },
  "assg-site": { short: "A.S.S.G", tools: ["html", "javascript", "alpine", "tailwind", "vercel"] },
  "gain-and-glory": { short: "GainAndGlory", tools: ["react", "typescript", "vite", "tailwind", "motion", "supabase", "postgresql"] },
  "rubberduck-ai": { short: "Rubberduck", tools: ["react", "typescript", "vite", "tailwind", "express", "prisma", "postgresql", "turborepo", "openai"] },
  marketplace: { short: "Haubergerie", tools: ["rails", "postgresql", "html", "scss", "stripe"] },
};
