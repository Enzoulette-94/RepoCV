"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { contact } from "@/data/home";

/**
 * Aperçu du CV avant de le télécharger.
 * Tout lien marqué data-cv-preview ouvre l'aperçu ; sans JavaScript, il télécharge le PDF.
 */
export function CvPreview() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest("a[data-cv-preview]");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={dialog}
      className="cv-view"
      aria-labelledby="cv-view-title"
      onClose={() => setOpen(false)}
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="cv-bar">
        <p id="cv-view-title">Mon CV <span>PDF · 1 page</span></p>
        <a className="btn btn-primary btn-small" href={contact.cv} download={contact.cvFileName}>
          Télécharger <span aria-hidden="true">↓</span>
        </a>
        <button type="button" className="cv-close" onClick={() => setOpen(false)} aria-label="Fermer l’aperçu">×</button>
      </div>
      {open && (
        <div className="cv-paper">
          <Image src="/cv-preview.png" alt="Aperçu du CV d’Enzo Natali, développeur web full-stack" width={1413} height={2000} sizes="(max-width: 900px) 100vw, 760px" priority />
        </div>
      )}
    </dialog>
  );
}
