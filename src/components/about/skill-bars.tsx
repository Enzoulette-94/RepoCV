"use client";

import { motion } from "framer-motion";

type SkillLevel = {
  name: string;
  level: number; // 0-100
};

const skillLevels: SkillLevel[] = [
  { name: "HTML / CSS / Tailwind", level: 90 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "React / Next.js", level: 80 },
  { name: "Ruby on Rails", level: 75 },
  { name: "Node.js / Express", level: 70 },
  { name: "PostgreSQL", level: 70 },
  { name: "Stripe / Devise", level: 65 },
];

export function SkillBars() {
  return (
    <div className="space-y-5">
      {skillLevels.map((skill, i) => (
        <div key={skill.name}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
