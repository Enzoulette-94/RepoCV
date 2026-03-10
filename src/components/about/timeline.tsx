"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TimelineItem } from "@/data/experience";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative ml-8 border-l-2 border-primary/30 pl-16">
      {items.map((item, i) => (
        <motion.div
          key={`${item.title}-${item.period}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={cn("relative pb-10 last:pb-0")}
        >
          {/* Circle centered on the line */}
          <div className="absolute -left-[calc(4rem+1.25rem+1px)] flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
            {item.type === "work" ? (
              <Briefcase className="h-4 w-4 text-primary" />
            ) : (
              <GraduationCap className="h-4 w-4 text-primary" />
            )}
          </div>

          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {item.period}
          </p>
          <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">
            {item.company ?? item.institution}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
