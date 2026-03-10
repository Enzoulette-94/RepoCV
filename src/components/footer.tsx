import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  {
    href: "https://github.com/Enzoulette-94",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="mt-auto w-full">
      <Separator />
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Portfolio. Tous droits
          r&eacute;serv&eacute;s.
        </p>
        <div className="flex gap-1">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="ghost" size="icon" asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
