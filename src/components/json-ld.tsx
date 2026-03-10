const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enzo Natali",
  url: siteUrl,
  jobTitle: "Développeur Web Full Stack",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
  ],
  sameAs: [
    "https://github.com/Enzoulette-94",
    "https://linkedin.com/in/",
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
