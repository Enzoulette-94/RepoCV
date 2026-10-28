import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ces pages vivent maintenant sur l'accueil
  async redirects() {
    return [
      { source: "/about", destination: "/#parcours", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/projects", destination: "/#projets", permanent: true },
    ];
  },
};

export default nextConfig;
