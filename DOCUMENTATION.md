# Documentation — Portfolio Enzo Natali

## C'est quoi ce projet ?

Un site portfolio personnel construit avec **Next.js 16**. Il présente ton parcours, tes compétences et tes projets. Il est entièrement statique (pas de base de données, pas de backend) et déployable sur Vercel en un clic.

---

## Les pages

| URL | Ce qu'elle affiche |
|---|---|
| `/` | Page d'accueil avec ton nom et le titre animé |
| `/about` | Ton CV complet (profil, compétences, expériences, formations) |
| `/projects` | La grille bento de tous tes projets |
| `/projects/[slug]` | La page détail d'un projet (ex: `/projects/marketplace`) |
| `/contact` | Tes coordonnées (téléphone, email, GitHub, adresse) |
| `/cv` | Ton CV en version imprimable format A4 |

---

## Comment modifier le contenu

Tout le contenu du site est centralisé dans 3 fichiers dans `src/data/`. Tu n'as pas besoin de toucher aux composants pour mettre à jour les infos.

### Ajouter / modifier un projet — `src/data/projects.ts`

Chaque projet est un objet avec ces champs :

```ts
{
  slug: "nom-url",              // apparaît dans l'URL : /projects/nom-url
  title: "Nom du projet",
  description: "Courte description (affichée sur la card)",
  longDescription: "Description longue (affichée sur la page détail)",
  image: "/projects/image.png", // image principale (dossier public/projects/)
  gradient: "linear-gradient(135deg, #couleur1, #couleur2)", // fond de la card (optionnel)
  tags: ["React", "Node.js"],   // badges technos
  github: "https://github.com/...",  // optionnel
  demo: "https://...",               // optionnel
  featured: true,
  screenshots: ["/projects/img1.png", "/projects/img2.png"], // galerie cliquable (optionnel)
}
```

**Pour ajouter un projet** : copie un bloc existant, change les valeurs, ajoute l'image dans `public/projects/`.

**Pour la couleur de fond de la card** : modifie le champ `gradient`. Si tu ne veux pas de couleur (comme Portfolio), supprime simplement le champ `gradient`.

---

### Modifier les expériences / formations — `src/data/experience.ts`

```ts
{
  title: "Intitulé du poste ou diplôme",
  company: "Nom de l'entreprise",    // pour type: "work"
  institution: "Nom de l'école",     // pour type: "education"
  period: "Sept 2020 — Août 2025",
  description: "Description du poste ou de la formation.",
  type: "work" | "education",        // "work" = expérience pro, "education" = formation
}
```

Les entrées `type: "work"` apparaissent dans **Expériences professionnelles**, les `type: "education"` dans **Formation** — aussi bien sur `/about` que sur `/cv`.

---

### Modifier les compétences — `src/data/skills.ts`

```ts
{ name: "React", category: "frontend" | "backend" | "tools" }
```

Les skills s'affichent sous forme de badges dans `/about` et `/cv`.

---

## Structure des fichiers

```
src/
├── app/                    → Les pages (Next.js App Router)
│   ├── page.tsx            → Page d'accueil
│   ├── layout.tsx          → Layout commun (navbar, footer, thème)
│   ├── about/page.tsx      → Page CV animée
│   ├── projects/
│   │   ├── page.tsx        → Grille bento des projets
│   │   └── [slug]/page.tsx → Page détail d'un projet
│   ├── contact/page.tsx    → Page contact
│   ├── cv/page.tsx         → CV imprimable A4
│   ├── sitemap.ts          → Sitemap auto-généré pour le SEO
│   └── robots.ts           → Fichier robots.txt pour le SEO
│
├── components/
│   ├── navbar.tsx          → Barre de navigation (responsive)
│   ├── footer.tsx          → Footer avec liens sociaux
│   ├── page-transition.tsx → Animation de transition entre pages
│   ├── about/
│   │   ├── fade-in.tsx     → Composant d'animation au scroll
│   │   ├── timeline.tsx    → Affichage timeline (expériences/formations)
│   │   └── skill-bars.tsx  → Barres de progression des compétences
│   ├── projects/
│   │   ├── project-card.tsx      → Card bento d'un projet
│   │   ├── screenshot-gallery.tsx → Galerie de screenshots
│   │   └── lightbox.tsx          → Visionneuse d'images en plein écran
│   ├── sections/
│   │   └── hero.tsx        → Section d'accueil (nom + titre animé)
│   └── ui/                 → Composants shadcn/ui (Button, Badge, Card...)
│
└── data/                   → ⭐ Tout le contenu du site est ici
    ├── projects.ts
    ├── experience.ts
    └── skills.ts
```

---

## Les animations

Le site utilise **Framer Motion** pour les animations :

- **Transition de page** : chaque page fait un fade + glissement vers le haut au chargement (`page-transition.tsx`)
- **Page /about** : le titre, la barre de contact et le bouton CV apparaissent en séquence avec un délai croissant. Les sections du bas se déclenchent au scroll (`fade-in.tsx`)
- **Timeline** : chaque entrée glisse depuis la gauche avec un décalage progressif
- **Barres de compétences** : se remplissent au scroll
- **Cards projets** : apparaissent en séquence au chargement de `/projects`

---

## Thème clair / sombre

Le site supporte le mode clair et sombre automatiquement via `next-themes`. Le bouton de bascule est dans la navbar. Le thème suit par défaut la préférence du système.

Les couleurs sont définies dans `src/app/globals.css` avec des variables CSS en espace colorimétrique OKLCH.

---

## Ajouter une image à un projet

1. Place ton image dans `public/projects/` (formats recommandés : `.png` ou `.webp`)
2. Dans `src/data/projects.ts`, ajoute le chemin dans `screenshots` :
   ```ts
   screenshots: ["/projects/mon-image.png"]
   ```
3. L'image apparaît automatiquement dans la galerie de la page détail du projet, cliquable en plein écran.

---

## Lancer le site en local

```bash
npm run dev     # démarre sur http://localhost:3000
npm run build   # compile pour la production
npm run start   # démarre la version compilée
```

---

## Déployer sur Vercel

1. Push ton code sur GitHub
2. Connecte le repo sur [vercel.com](https://vercel.com)
3. Ajoute la variable d'environnement : `NEXT_PUBLIC_SITE_URL=https://ton-domaine.com`
4. Vercel déploie automatiquement à chaque push sur `main`
