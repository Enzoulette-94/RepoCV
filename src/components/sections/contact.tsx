"use client";

import { motion } from "framer-motion";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "06 21 84 79 57", href: "tel:+33621847957" },
  { icon: Mail, label: "Email", value: "Enzonatali75@gmail.com", href: "mailto:Enzonatali75@gmail.com" },
  { icon: MapPin, label: "Adresse", value: "Saint-Maur-des-Fossés, 94100" },
  { icon: Github, label: "GitHub", value: "Enzoulette-94", href: "https://github.com/Enzoulette-94" },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 container mx-auto max-w-2xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Me contacter</h2>
        <p className="mt-2 text-muted-foreground">
          N&apos;hésitez pas à me contacter via l&apos;un de ces moyens.
        </p>
      </motion.div>

      <div className="mt-10 divide-y divide-border">
        {contactInfo.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between py-4"
          >
            <div className="flex items-center gap-3 text-muted-foreground">
              <item.icon className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm">{item.label}</span>
            </div>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-sm font-medium">{item.value}</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
