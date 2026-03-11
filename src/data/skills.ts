export type Skill = {
  name: string;
  category: "frontend" | "backend" | "tools";
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "shadcn/ui", category: "frontend" },
  { name: "HTML / CSS", category: "frontend" },

  // Backend
  { name: "Ruby on Rails", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "Devise", category: "backend" },
  { name: "Stripe", category: "backend" },

];
