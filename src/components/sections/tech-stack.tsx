"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Outils",
} as const;

export function TechStack() {
  const categories = ["frontend", "backend", "tools"] as const;

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Technologies & Outils
        </h2>
        <p className="mt-2 text-muted-foreground">
          Les technologies que j&apos;utilise au quotidien.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-10">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {categoryLabels[category]}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills
                .filter((s) => s.category === category)
                .map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm">
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
