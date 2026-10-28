"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { SiteMenu } from "./site-menu";
import "./home.css";

// Mot affiché sur le rideau entre deux chapitres
const CURTAIN_LABEL: Record<string, string> = {
  accueil: "Me revoilà",
  stacks: "Avec quoi je travaille",
  projets: "Bienvenue dans mon atelier",
  parcours: "Le chemin que j’ai fait",
  contact: "Contact",
  infos: "Bienvenue dans mon monde",
};
// Chapitres où l'on glisse latéralement d'une page à l'autre
const LATERAL = ["projets", "infos"];
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Cadre de l'accueil : menu, flèches, rideau, et la navigation page à page
 * (molette, clavier, glissement, liens #). Les pages sont rendues côté serveur
 * et passées en enfants ; ce composant ne fait que les animer.
 */
export function Deck({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const $ = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
    const scenes = [...root.querySelectorAll<HTMLElement>(".scene")];
    const curtain = $<HTMLElement>(".curtain");
    const curtainLabel = $<HTMLElement>(".curtain span");
    const count = $<HTMLElement>(".pager .count");
    const prevBtn = $<HTMLButtonElement>(".pager .prev");
    const nextBtn = $<HTMLButtonElement>(".pager .next");
    const navLinks = [...root.querySelectorAll<HTMLElement>(".nav [data-chapter]")];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = matchMedia("(max-width: 900px)");
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(() => { timers.delete(t); fn(); }, ms);
      timers.add(t);
      return t;
    };
    let cur = 0;
    let busy = false;

    const indexOf = (id: string) => scenes.findIndex((s) => s.id === id);

    function paint(i: number) {
      const s = scenes[i];
      count.innerHTML = `<b>${pad(i + 1)}</b> / ${pad(scenes.length)}`;
      prevBtn.disabled = i === 0;
      nextBtn.setAttribute("aria-label", i === scenes.length - 1 ? "Revenir au début" : "Page suivante");
      navLinks.forEach((a) => a.classList.toggle("current", a.dataset.chapter === s.dataset.chapter));
      root!.classList.toggle("tone-dark", s.classList.contains("dark"));
      if (location.hash.slice(1) !== s.id) history.replaceState(null, "", `#${s.id}`);
    }

    // Chaque page tient dans l'écran : si son contenu dépasse, on le réduit juste assez
    function fit(s: HTMLElement) {
      const inner = s.querySelector<HTMLElement>(":scope > .inner");
      if (!inner) return;
      inner.style.transform = "";
      inner.style.marginBottom = "";
      const cs = getComputedStyle(s);
      const avail = s.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      const h = inner.offsetHeight;
      if (h > avail) {
        const k = Math.max(0.6, avail / h);
        inner.style.transform = `scale(${k.toFixed(3)})`;
        inner.style.marginBottom = `${(-(h * (1 - k))).toFixed(1)}px`;
      }
    }
    const fitAll = () => scenes.forEach(fit);

    // Contact : les messages arrivent un par un, avec l'indicateur « en train d'écrire »
    const chatSteps = [...root.querySelectorAll<HTMLElement>(".chat [data-step]")];
    const typingRow = $<HTMLElement>(".chat .typing-row");
    let chatTimers: ReturnType<typeof setTimeout>[] = [];
    function playChat() {
      chatTimers.forEach((t) => { clearTimeout(t); timers.delete(t); });
      chatTimers = [];
      chatSteps.forEach((el) => el.classList.remove("on"));
      typingRow.hidden = true;
      if (reduce) { chatSteps.forEach((el) => el.classList.add("on")); return; }
      let t = 500;
      chatSteps.forEach((el, k) => {
        if (!el.classList.contains("replies")) {
          chatTimers.push(later(() => { el.before(typingRow); typingRow.hidden = false; }, t));
          t += k === 0 ? 600 : 900;
          chatTimers.push(later(() => { typingRow.hidden = true; el.classList.add("on"); }, t));
          t += 250;
        } else {
          chatTimers.push(later(() => el.classList.add("on"), t + 200));
        }
      });
    }

    function settle(i: number) {
      scenes.forEach((s, k) => {
        s.classList.remove("lat-in-right", "lat-in-left", "lat-go", "lat-out-left", "lat-out-right");
        if (k === i) s.classList.add("active");
        else s.classList.remove("active", "shown");
      });
      const s = scenes[i];
      s.scrollTop = 0;
      requestAnimationFrame(() => s.classList.add("shown"));
      if (s.id === "contact") playChat();
      s.querySelector<HTMLElement>("[tabindex='-1']")?.focus({ preventScroll: true });
      cur = i;
      paint(i);
    }

    function go(i: number) {
      if (busy || i === cur || i < 0 || i >= scenes.length) return;
      const from = scenes[cur];
      const to = scenes[i];
      const lateral = from.dataset.chapter === to.dataset.chapter && LATERAL.includes(to.dataset.chapter ?? "");
      if (reduce) { settle(i); return; }
      busy = true;
      if (lateral) {
        const fwd = i > cur;
        to.classList.add(fwd ? "lat-in-right" : "lat-in-left");
        to.scrollTop = 0;
        void to.offsetWidth;
        from.classList.add(fwd ? "lat-out-left" : "lat-out-right");
        to.classList.add("lat-go", "shown");
        later(() => { settle(i); busy = false; }, 980);
      } else {
        curtainLabel.textContent = CURTAIN_LABEL[to.dataset.chapter ?? ""] ?? "";
        curtain.className = "curtain cover";
        later(() => {
          settle(i);
          curtain.className = "curtain reveal";
          later(() => { curtain.className = "curtain"; busy = false; }, 820);
        }, 1200);
      }
    }
    // Après la dernière page, on repart au début
    const nav = (dir: number) => {
      if (busy) return;
      go(dir > 0 && cur === scenes.length - 1 ? 0 : cur + dir);
    };

    const ctrl = new AbortController();
    const on = { signal: ctrl.signal };

    root.addEventListener("click", (e) => {
      const target = e.target as Element;
      // Loisirs sur mobile : un seul texte ouvert à la fois
      const acc = target.closest<HTMLElement>(".acc");
      if (acc && mobile.matches) {
        const li = acc.parentElement!;
        li.parentElement!.querySelectorAll("li.open").forEach((o) => {
          if (o !== li) { o.classList.remove("open"); o.querySelector(".acc")?.setAttribute("aria-expanded", "false"); }
        });
        acc.setAttribute("aria-expanded", String(li.classList.toggle("open")));
        fit(acc.closest<HTMLElement>(".scene")!);
        return;
      }
      const t = target.closest<HTMLElement>("[data-go]");
      if (t) { e.preventDefault(); go(indexOf(t.dataset.go!)); return; }
      const a = target.closest<HTMLAnchorElement>('a[href^="#"]');
      const i = a ? indexOf(a.getAttribute("href")!.slice(1)) : -1;
      if (i >= 0) { e.preventDefault(); go(i); }
    }, on);
    prevBtn.addEventListener("click", () => nav(-1), on);
    nextBtn.addEventListener("click", () => nav(1), on);

    // Molette : une page par geste
    let wheelSum = 0;
    let lastWheel = 0;
    addEventListener("wheel", (e) => {
      e.preventDefault();
      const now = performance.now();
      if (now - lastWheel > 400) wheelSum = 0;
      lastWheel = now;
      wheelSum += e.deltaY;
      if (Math.abs(wheelSum) > 60 && !busy) { nav(wheelSum > 0 ? 1 : -1); wheelSum = 0; }
    }, { passive: false, signal: ctrl.signal });

    addEventListener("keydown", (e) => {
      if (["ArrowDown", "PageDown", "ArrowRight"].includes(e.key)) { e.preventDefault(); nav(1); }
      if (["ArrowUp", "PageUp", "ArrowLeft"].includes(e.key)) { e.preventDefault(); nav(-1); }
    }, on);

    // Glissement : vertical pour changer de page, horizontal entre projets ou loisirs
    let ty: number | null = null;
    let tx: number | null = null;
    addEventListener("touchmove", (e) => e.preventDefault(), { passive: false, signal: ctrl.signal });
    addEventListener("touchstart", (e) => { ty = e.touches[0].clientY; tx = e.touches[0].clientX; }, { passive: true, signal: ctrl.signal });
    addEventListener("touchend", (e) => {
      if (ty === null || tx === null) return;
      const dy = ty - e.changedTouches[0].clientY;
      const dx = tx - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) && LATERAL.includes(scenes[cur].dataset.chapter ?? "")) nav(dx > 0 ? 1 : -1);
      else if (dy > 50) nav(1);
      else if (dy < -50) nav(-1);
      ty = tx = null;
    }, { passive: true, signal: ctrl.signal });

    addEventListener("hashchange", () => { const i = indexOf(location.hash.slice(1)); if (i >= 0) go(i); }, on);
    addEventListener("resize", fitAll, on);
    document.fonts?.ready.then(fitAll);
    fitAll();

    const start = indexOf(location.hash.slice(1));
    if (start > 0) settle(start);
    else paint(0);

    return () => {
      ctrl.abort();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="atelier" ref={rootRef}>
      <SiteMenu />

      <div className="pager">
        <button type="button" className="prev" aria-label="Page précédente">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" stroke="currentColor" strokeWidth="1.5" /></svg>
        </button>
        <span className="count" aria-live="polite" />
        <button type="button" className="next" aria-label="Page suivante">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" stroke="currentColor" strokeWidth="1.5" /></svg>
        </button>
      </div>

      <main>{children}</main>

      <div className="curtain" aria-hidden="true"><span /></div>
    </div>
  );
}
