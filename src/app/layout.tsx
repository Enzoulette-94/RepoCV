import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfolio | Développeur Web Full Stack",
    template: "%s | Portfolio",
  },
  description:
    "Portfolio de développeur web full stack — projets, compétences et parcours. React, Next.js, TypeScript, Node.js.",
  keywords: [
    "développeur web",
    "full stack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Enzo Natali" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Portfolio",
    title: "Portfolio | Développeur Web Full Stack",
    description:
      "Portfolio de développeur web full stack — projets, compétences et parcours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Développeur Web Full Stack",
    description:
      "Portfolio de développeur web full stack — projets, compétences et parcours.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-svh flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
