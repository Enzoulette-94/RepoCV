import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, stateClass } from "@/data/projects";
import { codingAi, projectTools, tools } from "@/data/stacks";
import { SiteMenu } from "@/components/home/site-menu";
import { ToolIcon } from "@/components/home/tool-icon";
import { Gallery } from "@/components/project/gallery";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();

  const p = projects[i];
  const prev = projects[i - 1];
  const next = projects[i + 1];
  const live = p.sheet.state === "En ligne" ? p.demo : undefined;
  const used = projectTools[p.slug]?.tools ?? [];
  // Le rôle ne compte que sur les projets à plusieurs
  const team = !p.role.startsWith("Solo");
  // Une seule capture : c'est déjà celle du haut de page, pas besoin de la répéter
  const shots = p.screenshots ?? [];

  return (
    <div className="atelier doc">
      <SiteMenu base="/" current="projets" />

      <main>
        <div className="inner">
          <Link className="back" href={`/#projet-${p.slug}`}>
            <span aria-hidden="true">←</span> Retour au projet
          </Link>

          <header className="fiche doc-head">
            <p className="kind">
              <span>{p.sheet.kind}</span>
              <span className={stateClass(p.sheet.state)}>{p.sheet.state}</span>
              <span>Projet {i + 1} sur {projects.length}</span>
            </p>
            <h1>{p.title}</h1>
            <p className="pitch">{p.sheet.pitch}</p>
            <p className="links">
              {live && <a href={live} target="_blank" rel="noopener noreferrer">Voir le site <span aria-hidden="true">↗</span></a>}
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">Code source <span aria-hidden="true">↗</span></a>}
            </p>
          </header>

          <div className="frame doc-shot">
            <div className="frame-bar"><i /><i /><i /><span className="frame-url">{p.sheet.address}</span></div>
            <div className="shot"><Image src={p.image} alt={`Capture de ${p.title}`} fill priority sizes="(max-width: 1180px) 100vw, 1132px" /></div>
          </div>

          <div className="doc-body">
            <section aria-labelledby="h-story">
              <h2 id="h-story" className="eyebrow">L’histoire</h2>
              <div className="story">
                {p.longDescription.split("\n\n").map((para) => <p key={para}>{para}</p>)}
              </div>
              {p.highlights.length > 0 && (
                <>
                  <h2 className="eyebrow">Ce que j’ai fait</h2>
                  <ul className="done">
                    {p.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </>
              )}
            </section>

            <aside className="fiche" aria-label="En bref">
              <dl>
                <div><dt>Pour qui</dt><dd>{p.sheet.who}</dd></div>
                <div><dt>Le besoin</dt><dd>{p.sheet.need}</dd></div>
                {team && <div><dt>Mon rôle</dt><dd>{p.role}</dd></div>}
                <div><dt>Durée</dt><dd>{p.duration}</dd></div>
                <div><dt>Aujourd’hui</dt><dd>{p.sheet.now}</dd></div>
              </dl>
              <div className="wall">
                <div className="ai">
                  <h3>IA pour coder</h3>
                  <ul>{codingAi.map((id) => <li key={id} className="t"><ToolIcon id={id} /><span>{tools[id].label}</span></li>)}</ul>
                </div>
                <div>
                  <h3>Fait avec</h3>
                  <ul>{used.map((id) => <li key={id} className="t"><ToolIcon id={id} /><span>{tools[id].label}</span></li>)}</ul>
                </div>
              </div>
            </aside>
          </div>

          {shots.length > 1 && (
            <section className="doc-gallery" aria-labelledby="h-gallery">
              <h2 id="h-gallery" className="eyebrow">En images</h2>
              <Gallery shots={shots} title={p.title} address={p.sheet.address} />
            </section>
          )}

          <nav className="pnav doc-nav" aria-label="Projets">
            {prev ? <Link href={`/projects/${prev.slug}`}>← <b>{prev.title}</b></Link> : <span />}
            <Link href="/#projets">Tous les projets</Link>
            {next ? <Link href={`/projects/${next.slug}`}><b>{next.title}</b> →</Link> : <Link href="/#parcours"><b>Mon parcours</b> →</Link>}
          </nav>
        </div>
      </main>
    </div>
  );
}
