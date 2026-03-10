"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center shadow-sm sm:p-12"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          Travaillons ensemble
        </h2>
        <p className="mt-3 text-muted-foreground">
          Vous avez un projet en tête ou une opportunité ? N&apos;hésitez pas à
          me contacter, je serais ravi d&apos;en discuter.
        </p>
        <Button size="lg" className="mt-6" asChild>
          <Link href="/contact">
            <Mail className="mr-2 h-4 w-4" />
            Me contacter
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
