"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { contact } from "@/data/home";

// Les sections vivent sur l'accueil : chaque lien ouvre la bonne page de l'accueil
const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#stacks", label: "Stacks" },
  { href: "/#projets", label: "Projets" },
  { href: "/#parcours", label: "Parcours" },
  { href: "/#contact", label: "Contact" },
  { href: "/#infos", label: "Infos" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/cv") return null;

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto grid h-16 grid-cols-3 items-center px-4">
        {/* Left — theme toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>

        {/* Center — nav links */}
        <div className="hidden items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              size="sm"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <a href={contact.cv} download={contact.cvFileName}>
              Mon CV
            </a>
          </Button>
        </div>

        {/* Right — empty on desktop, hamburger on mobile */}
        <div className="flex items-center justify-end md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant="ghost"
                    className="justify-start text-muted-foreground"
                  >
                    <Link href={link.href} onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start text-muted-foreground"
                >
                  <a
                    href={contact.cv}
                    download={contact.cvFileName}
                    onClick={() => setOpen(false)}
                  >
                    Mon CV
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
