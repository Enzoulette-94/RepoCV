import { contact } from "@/data/home";

export const CHAPTERS = [
  { id: "accueil", label: "Accueil" },
  { id: "stacks", label: "Stacks" },
  { id: "projets", label: "Projets" },
  { id: "parcours", label: "Parcours" },
  { id: "contact", label: "Contact" },
  { id: "infos", label: "Infos" },
];

/**
 * Menu en pilule. Sur l'accueil les liens restent des ancres (#projets) ;
 * ailleurs ils ramènent à la bonne page de l'accueil (/#projets).
 */
export function SiteMenu({ base = "", current }: { base?: "" | "/"; current?: string }) {
  return (
    <header className="nav">
      <nav className="inner" aria-label="Menu principal">
        <ul className="menu">
          {CHAPTERS.map((c) => (
            <li key={c.id}>
              <a
                href={`${base}#${c.id}`}
                data-chapter={c.id}
                className={c.id === current ? "current" : undefined}
                aria-current={c.id === current ? "page" : undefined}
              >
                {c.label}
              </a>
            </li>
          ))}
          <li className="sep" aria-hidden="true" />
          <li className="cv">
            <a href={contact.cv} download={contact.cvFileName}>
              CV{" "}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1.5v8M3.5 6 7 9.5 10.5 6M2 12.5h10" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
