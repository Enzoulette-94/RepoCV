"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML / CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Ruby on Rails",
  "REST API",
];

// Find the longest word to reserve space
const longest = techs.reduce((a, b) => (a.length > b.length ? a : b));

export function TechRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.5em] overflow-hidden align-bottom">
      {/* Invisible text to reserve width */}
      <span className="invisible font-semibold">{longest}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={techs[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center font-semibold text-emerald-500"
        >
          {techs[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
