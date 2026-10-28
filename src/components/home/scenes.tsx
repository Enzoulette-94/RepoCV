import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { projects, type Project } from "@/data/projects";
import { cloudWords, contact, hobbies, pathSteps } from "@/data/home";

// Variables CSS en ligne : délai d'entrée, position dans le nuage…
const vars = (v: Record<string, string | number>) => v as CSSProperties;
const pad = (n: number) => String(n).padStart(2, "0");
const sceneId = (p: Project) => `projet-${p.slug}`;
const liveUrl = (p: Project) => (p.sheet.state === "En ligne" ? p.demo : undefined);

export function HeroScene() {
  return (
    <section className="scene hero active shown" id="accueil" data-chapter="accueil" aria-labelledby="h-accueil">
      <div className="inner">
        <h1 id="h-accueil" tabIndex={-1}>
          <span data-in="left" style={vars({ "--d": ".05s" })}>Enzo</span>
          <span data-in="right" style={vars({ "--d": ".16s" })}><em>Natali</em></span>
        </h1>
        <p className="role" data-in style={vars({ "--d": ".3s" })}>Développeur web <span>Full Stack</span></p>
        <div className="actions" data-in style={vars({ "--d": ".4s" })}>
          <a className="btn btn-primary btn-lg" href="#projets">Voir mes projets <span aria-hidden="true">→</span></a>
          <a className="btn btn-outline btn-lg" href={contact.cv} download={contact.cvFileName}>Télécharger mon CV <span aria-hidden="true">↓</span></a>
        </div>
        <p className="hint" data-in style={vars({ "--d": ".6s" })}>
          <span className="keys" aria-hidden="true"><kbd>↓</kbd><kbd>↑</kbd></span>
          <span className="hint-desk">Faites défiler ou utilisez les flèches pour changer de page</span>
          <span className="hint-touch">Glissez vers le haut pour changer de page</span>
        </p>
      </div>
    </section>
  );
}

export function ProjectsIndexScene() {
  return (
    <section className="scene alt index" id="projets" data-chapter="projets" aria-labelledby="h-projets">
      <div className="inner">
        <div className="intro">
          <div>
            <p className="eyebrow" data-in="top">Projets</p>
            <h2 id="h-projets" tabIndex={-1} data-in="top" style={vars({ "--d": ".06s" })}>Six projets, six histoires</h2>
          </div>
          <p data-in="right" style={vars({ "--d": ".12s" })}>
            2 sites clients, 1 site bénévole, 1 appli perso et 2 projets en équipe.
            <span className="hide-m"><br />Cliquez sur un projet pour découvrir son histoire.</span>
          </p>
        </div>
        <ul className="plist">
          {projects.map((p, i) => {
            const live = liveUrl(p);
            return (
              <li key={p.slug} data-in="right" style={vars({ "--d": `${(0.14 + i * 0.06).toFixed(2)}s` })}>
                <button type="button" className="open" data-go={sceneId(p)}>
                  <span className="n">{pad(i + 1)}</span>
                  <span className="t">{p.title}<span className="k">{p.sheet.kind}</span></span>
                  <span className="p">{p.sheet.pitch}</span>
                </button>
                {live ? (
                  <a className="live" href={live} target="_blank" rel="noopener noreferrer">{p.sheet.address} <span aria-hidden="true">↗</span></a>
                ) : (
                  <span className="state">{p.sheet.state}</span>
                )}
                <span className="thumb" aria-hidden="true"><Image src={p.image} alt="" fill sizes="120px" /></span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function ProjectScenes() {
  const n = projects.length;
  return projects.map((p, i) => {
    const prev = projects[i - 1];
    const next = projects[i + 1];
    const live = liveUrl(p);
    return (
      <section key={p.slug} className="scene project" id={sceneId(p)} data-chapter="projets" aria-labelledby={`h-${p.slug}`}>
        <div className={`project-bg${p.sheet.darkShot ? " is-dark" : ""}`} aria-hidden="true">
          <Image src={p.image} alt="" fill sizes="100vw" data-in="zoom" />
        </div>
        <div className="inner">
          <div className="frame" data-in="left">
            <div className="frame-bar"><i /><i /><i /><span className="frame-url">{p.sheet.address}</span></div>
            <div className="shot"><Image src={p.image} alt={`Capture de ${p.title}`} fill sizes="(max-width: 900px) 100vw, 640px" /></div>
          </div>
          <article className="fiche">
            <p className="kind" data-in="right" style={vars({ "--d": ".1s" })}>
              <span>{p.sheet.kind}</span>
              <span className={p.sheet.state === "En ligne" ? "online" : undefined}>{p.sheet.state}</span>
              <span>Projet {i + 1} sur {n}</span>
            </p>
            <h2 id={`h-${p.slug}`} tabIndex={-1} data-in="right" style={vars({ "--d": ".16s" })}>{p.title}</h2>
            <p className="pitch" data-in="right" style={vars({ "--d": ".22s" })}>{p.sheet.pitch}</p>
            <dl data-in style={vars({ "--d": ".3s" })}>
              <div><dt>Pour qui</dt><dd>{p.sheet.who}</dd></div>
              <div><dt>Le besoin</dt><dd>{p.sheet.need}</dd></div>
              <div><dt>Ce que j’ai fait</dt><dd>{p.sheet.did}</dd></div>
              <div><dt>Aujourd’hui</dt><dd>{p.sheet.now}</dd></div>
            </dl>
            <p className="stack" data-in style={vars({ "--d": ".38s" })}>Fait avec <b>{p.sheet.stack}</b></p>
            <p className="links" data-in style={vars({ "--d": ".42s" })}>
              {live && <a href={live} target="_blank" rel="noopener noreferrer">Voir le site</a>}
              {!live && p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">Code source</a>}
              <Link href={`/projects/${p.slug}`}>Tout le projet</Link>
            </p>
          </article>
          <nav className="pnav" aria-label="Projets" data-in style={vars({ "--d": ".5s" })}>
            <button type="button" data-go={prev ? sceneId(prev) : "projets"}>← {prev ? <b>{prev.title}</b> : "Tous les projets"}</button>
            <button type="button" data-go="projets">Tous les projets</button>
            <button type="button" data-go={next ? sceneId(next) : "parcours"}>{next ? <b>{next.title}</b> : <b>Mon parcours</b>} →</button>
          </nav>
        </div>
      </section>
    );
  });
}

export function PathScene() {
  return (
    <section className="scene alt path" id="parcours" data-chapter="parcours" aria-labelledby="h-parcours">
      <div className="inner">
        <div className="head">
          <div>
            <p className="eyebrow" data-in="left">Parcours</p>
            <h2 id="h-parcours" tabIndex={-1} data-in="left" style={vars({ "--d": ".06s" })}>Du terrain au code</h2>
          </div>
        </div>
        <ol className="line" aria-label="Parcours de 2015 à aujourd’hui">
          {pathSteps.map((st, k) => (
            <li key={st.year} className={st.now ? "now" : undefined} style={vars({ "--d": `${(0.35 + k * 0.18).toFixed(2)}s` })}>
              <span className="year">{st.year}</span>
              <span className="pt" aria-hidden="true" />
              <h3>{st.title}</h3>
              <p className="where">{st.where}</p>
              <p className="when">{st.when}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ContactScene() {
  const who = <span className="who" aria-hidden="true">EN</span>;
  const arrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" /></svg>;
  const download = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1.5v8M3.5 6 7 9.5 10.5 6M2 12.5h10" stroke="currentColor" strokeWidth="1.5" /></svg>;
  return (
    <section className="scene dark contact" id="contact" data-chapter="contact" aria-labelledby="h-contact">
      <div className="contact-bg" aria-hidden="true"><Image src="/home/contact.jpg" alt="" fill sizes="100vw" /></div>
      <div className="inner">
        <p className="eyebrow" data-in>Contact</p>
        <h2 className="big" id="h-contact" tabIndex={-1} data-in style={vars({ "--d": ".06s" })}>Écrivons la suite <em>ensemble.</em></h2>
        <p className="coords" data-in style={vars({ "--d": ".12s" })}>
          <a href={`mailto:${contact.email}`}>{contact.email.toLowerCase()}</a>
          <span aria-hidden="true">·</span>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </p>
        <div className="chat" aria-live="polite">
          <div className="msg first" data-step>{who}<p className="bubble">Salut&nbsp;!</p></div>
          <div className="msg" data-step>{who}<p className="bubble">Un projet de site, un poste à pourvoir ou juste une question&nbsp;?</p></div>
          <div className="msg" data-step>{who}<p className="bubble">Je vous réponds personnellement.</p></div>
          <div className="msg typing-row" hidden>{who}<p className="bubble typing" aria-label="Enzo écrit"><i /><i /><i /></p></div>
          <div className="replies" data-step>
            <span className="lbl" aria-hidden="true">Vous</span>
            <a className="chip" href={`mailto:${contact.email}`}>Je vous écris par mail {arrow}</a>
            <a className="chip" href={contact.phoneHref}>Je vous appelle {arrow}</a>
            <a className="chip" href={contact.cv} download={contact.cvFileName}>Je regarde votre CV {download}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LikesScene() {
  return (
    <section className="scene dark likes" id="infos" data-chapter="infos" aria-labelledby="h-infos">
      <div className="inner">
        <div className="cloud">
          <div className="cloud-center">
            <h2 id="h-infos" tabIndex={-1} data-in style={vars({ "--d": ".06s" })}>Ce que j’aime</h2>
            <p className="intro" data-in style={vars({ "--d": ".12s" })}>Cliquez sur un mot pour en savoir plus.</p>
          </div>
          {cloudWords.map((w, k) => (
            <span key={w.word} className="pos" style={{ left: `${w.x}%`, top: `${w.y}%` }}>
              <span data-in style={vars({ "--d": `${(0.2 + k * 0.06).toFixed(2)}s` })}>
                <button
                  type="button"
                  className={`word ${w.size}`}
                  data-go={`hobby-${w.hobby}`}
                  style={vars({ "--f": `${(6 + (k % 4) * 1.3).toFixed(1)}s`, "--fd": `${(-k * 0.7).toFixed(1)}s`, "--fx": `${k % 2 ? 5 : -5}px` })}
                >
                  {w.word}
                </button>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HobbyScenes() {
  return hobbies.map((h, k) => {
    const prev = hobbies[k - 1];
    const next = hobbies[k + 1];
    return (
      <section key={h.id} className="scene dark hobby" id={`hobby-${h.id}`} data-chapter="infos" aria-labelledby={`h-${h.id}`}>
        {h.background && (
          <div className="hobby-bg" aria-hidden="true"><Image src={h.background} alt="" fill sizes="100vw" data-in="zoom" /></div>
        )}
        <div className="inner">
          <p className="tag" data-in>{h.tag}</p>
          <h2 id={`h-${h.id}`} tabIndex={-1} data-in style={vars({ "--d": ".08s" })}>{h.title}</h2>
          <p className="lead" data-in style={vars({ "--d": ".16s" })}>{h.lead}</p>
          <ul className="tiles">
            {h.items.map((it, j) => (
              <li key={it.title} className={j === 0 ? "open" : undefined} data-in style={vars({ "--d": `${(0.24 + j * 0.08).toFixed(2)}s` })}>
                <button type="button" className="acc" aria-expanded={j === 0} aria-controls={`t-${h.id}-${j}`}>
                  <b>{it.title}</b>
                  {it.subtitle && <span>{it.subtitle}</span>}
                </button>
                <p id={`t-${h.id}-${j}`}>{it.text}</p>
              </li>
            ))}
          </ul>
          <nav className="hnav" aria-label="Hobbies" data-in style={vars({ "--d": ".5s" })}>
            <button type="button" data-go={prev ? `hobby-${prev.id}` : "infos"}>← {prev ? <b>{prev.title}</b> : "Ce que j’aime"}</button>
            <button type="button" data-go="infos">Tous mes hobbies</button>
            <button type="button" data-go={next ? `hobby-${next.id}` : "accueil"}>{next ? <b>{next.title}</b> : <b>Retour à l’accueil</b>} →</button>
          </nav>
        </div>
      </section>
    );
  });
}
