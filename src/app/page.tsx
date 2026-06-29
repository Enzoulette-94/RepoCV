import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

function SectionDivider() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ContactSection />
    </>
  );
}
