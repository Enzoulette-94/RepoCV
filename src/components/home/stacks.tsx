"use client";

import { useState, type CSSProperties } from "react";
import { projects } from "@/data/projects";
import { codingAi, projectTools, toolGroups, tools, type ToolId } from "@/data/stacks";
import { ToolIcon } from "./tool-icon";

const vars = (v: Record<string, string | number>) => v as CSSProperties;
const usage = (id: ToolId) => Object.values(projectTools).filter((p) => p.tools.includes(id)).length;

/**
 * Stacks : tous mes outils rangés par famille, avec les IA en tête.
 * Choisir un projet allume ses outils et estompe les autres.
 */
export function StacksScene() {
  const [slug, setSlug] = useState<string | null>(null);
  const current = slug ? projectTools[slug] : null;
  const title = slug ? projects.find((p) => p.slug === slug)?.title : null;
  const isOn = (id: ToolId) => !current || codingAi.includes(id) || current.tools.includes(id);

  const tile = (id: ToolId, ai = false) => {
    const n = ai ? projects.length : usage(id);
    return (
      <li key={id} className={isOn(id) ? "t on" : "t"}>
        <ToolIcon id={id} />
        <span>{tools[id].label}</span>
        {!current && n > 1 && <em aria-label={`${n} projets`}>×{n}</em>}
      </li>
    );
  };

  return (
    <section className="scene stacks" id="stacks" data-chapter="stacks" aria-labelledby="h-stacks">
      <div className="inner">
        <div className="side">
          <p className="eyebrow" data-in>Stacks</p>
          <h2 id="h-stacks" tabIndex={-1} data-in style={vars({ "--d": ".06s" })}>Avec qui <em>je travaille</em></h2>
          <p className="lead" data-in style={vars({ "--d": ".12s" })}>Les outils de chaque projet, et les IA qui m’accompagnent quand je code.</p>
          <div className="projs" data-scroll-x role="group" aria-label="Voir les outils d’un projet" data-in style={vars({ "--d": ".18s" })}>
            <button type="button" aria-pressed={!slug} onClick={() => setSlug(null)}>Tous</button>
            {projects.map((p) => (
              <button key={p.slug} type="button" aria-pressed={slug === p.slug} onClick={() => setSlug(p.slug)}>
                {projectTools[p.slug].short}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            {current ? `${title} : ${[...codingAi, ...current.tools].map((id) => tools[id].label).join(", ")}.` : "Tous les outils."}
          </p>
        </div>
        <div className={current ? "wall filter" : "wall"}>
          <div className="ai" data-in="right" style={vars({ "--d": ".14s" })}>
            <h3>IA pour coder</h3>
            <ul>{codingAi.map((id) => tile(id, true))}</ul>
          </div>
          {toolGroups.map((g, k) => (
            <div key={g.title} data-in="right" style={vars({ "--d": `${(0.2 + k * 0.06).toFixed(2)}s` })}>
              <h3>{g.title}</h3>
              <ul>{g.tools.map((id) => tile(id))}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
