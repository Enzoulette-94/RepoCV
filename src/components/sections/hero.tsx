"use client";

import { motion } from "framer-motion";
import { NavArrow } from "@/components/nav-arrow";
import { TechRotator } from "@/components/tech-rotator";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-6"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Enzo Natali
        </h1>
        <p className="text-xl font-medium sm:text-2xl md:text-3xl">
          Développeur Web{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Full Stack
          </span>
        </p>
        <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-xl">
          Je crée des sites web en <TechRotator />
        </p>
      </motion.div>

      <NavArrow href="/about" direction="right" label="Voir mon CV" />
    </section>
  );
}
