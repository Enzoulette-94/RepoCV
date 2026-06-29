"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { id: "projects", label: "Mes Projets" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  if (pathname === "/cv") return null;

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto grid h-16 grid-cols-3 items-center px-4">
        {/* Left — theme toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>

        {/* Center — nav links */}
        <div className="hidden items-center justify-center gap-1 md:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => scrollTo(e, "hero")}
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground",
              activeSection === "hero" && "text-primary font-medium"
            )}
          >
            Accueil
          </Button>
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              size="sm"
              onClick={(e) => scrollTo(e, link.id)}
              className={cn(
                "text-muted-foreground transition-colors hover:text-foreground",
                activeSection === link.id && "text-primary font-medium"
              )}
            >
              {link.label}
            </Button>
          ))}
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
                    key={link.id}
                    variant="ghost"
                    className={cn(
                      "justify-start text-muted-foreground",
                      activeSection === link.id && "text-primary font-medium"
                    )}
                    onClick={(e) => {
                      scrollTo(e, link.id);
                      setOpen(false);
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
