"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Captures du projet dans des fenêtres de navigateur ; un clic ouvre la capture
 * en grand dans une boîte de dialogue (Échap ferme, ← → pour passer de l'une à l'autre).
 */
export function Gallery({ shots, title, address }: { shots: string[]; title: string; address: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const step = (dir: number) => setOpen((k) => (k === null ? k : (k + dir + shots.length) % shots.length));
  const alt = (k: number) => `${title}, capture ${k + 1} sur ${shots.length}`;

  return (
    <>
      <ul className={shots.length === 1 ? "shots single" : "shots"}>
        {shots.map((src, k) => (
          <li key={src}>
            <button type="button" className="frame" onClick={() => setOpen(k)} aria-label={`Agrandir la capture ${k + 1}`}>
              <span className="frame-bar"><i /><i /><i /><span className="frame-url">{address}</span></span>
              <span className="shot"><Image src={src} alt={alt(k)} fill sizes="(max-width: 900px) 100vw, 560px" /></span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="viewer"
        aria-label={open === null ? title : alt(open)}
        onClose={() => setOpen(null)}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        {open !== null && (
          <>
            <figure>
              <Image key={shots[open]} src={shots[open]} alt={alt(open)} width={1920} height={1200} sizes="92vw" />
              <figcaption>{open + 1} / {shots.length}</figcaption>
            </figure>
            <button type="button" className="close" onClick={() => setOpen(null)} aria-label="Fermer">×</button>
            {shots.length > 1 && (
              <>
                <button type="button" className="prev" onClick={() => step(-1)} aria-label="Capture précédente">←</button>
                <button type="button" className="next" onClick={() => step(1)} aria-label="Capture suivante">→</button>
              </>
            )}
          </>
        )}
      </dialog>
    </>
  );
}
