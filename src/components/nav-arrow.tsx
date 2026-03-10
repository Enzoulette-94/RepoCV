"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function NavArrow({
  href,
  direction,
  label,
}: {
  href: string;
  direction: "left" | "right";
  label: string;
}) {
  const Icon = direction === "right" ? ArrowRight : ArrowLeft;
  const positionClass =
    direction === "right"
      ? "right-6 sm:right-8"
      : "left-6 sm:left-8";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className={`fixed top-1/2 z-40 -translate-y-1/2 ${positionClass}`}
    >
      <Link
        href={href}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary/10"
        aria-label={label}
      >
        <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
      </Link>
    </motion.div>
  );
}
