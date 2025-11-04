# EcoFlow - Site Marketing SaaS Professionnel

Un site web de marketing moderne et attrayant pour une plateforme SaaS de gestion de projets, conçu avec une palette de couleurs arborales inspirées de la nature.

## 🌿 Caractéristiques

- **Design professionnel** avec palette de couleurs arborales (verts forêt, feuille, olive)
- **5 pages complètes** : Accueil, Portfolio, Témoignages, Blog, Contact
- **Responsive design** : Optimisé pour mobile, tablette et desktop
- **Animations fluides** : Transitions et animations élégantes
- **Navigation intuitive** : Menu sticky avec logo et CTA
- **Formulaire de contact** : Formulaire interactif fonctionnel
- **Performance optimisée** : Build rapide et léger

## 🚀 Technologies utilisées

- **React 19** - Framework frontend
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Styling utility-first
- **shadcn/ui** - Composants UI professionnels
- **Lucide React** - Icônes vectorielles
- **Wouter** - Routage client-side
- **Vite** - Build tool moderne

## 📁 Structure du projet

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Page d'accueil
│   │   ├── Portfolio.tsx     # Cas d'usage clients
│   │   ├── Testimonials.tsx  # Avis clients
│   │   ├── Blog.tsx          # Articles et actualités
│   │   ├── Contact.tsx       # Formulaire de contact
│   │   └── NotFound.tsx      # Page 404
│   ├── components/           # Composants réutilisables
│   ├── App.tsx              # Routes et layout principal
│   ├── index.css            # Styles globaux et variables CSS
│   └── main.tsx             # Point d'entrée React
├── public/                   # Fichiers statiques
└── index.html               # Template HTML
```

## 🎨 Palette de couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Vert Forêt | #2d5a3d | Texte principal, accents |
| Vert Feuille | #3d7a52 | Boutons, accents secondaires |
| Vert Clair | #8bc34a | Éléments secondaires |
| Vert Olive | #558b2f | Texte muted |
| Vert Très Clair | #d4e8d9 | Backgrounds légers |
| Blanc Cassé | #f9fdf7 | Background principal |

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+
- pnpm (ou npm)

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/saas-marketing-site.git
cd saas-marketing-site

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

Le site sera accessible à `http://localhost:5173`

### Build pour la production

```bash
# Créer le build optimisé
pnpm build

# Prévisualiser le build
pnpm preview
```

## 📦 Déploiement sur GitHub Pages

### Configuration initiale

1. **Créer un repository GitHub** nommé `saas-marketing-site`

2. **Initialiser Git** dans le projet :
```bash
git init
git add .
git commit -m "Initial commit: SaaS marketing website"
git branch -M main
git remote add origin https://github.com/votre-username/saas-marketing-site.git
git push -u origin main
```

3. **Configurer GitHub Pages** :
   - Allez dans Settings → Pages
   - Sélectionnez "Deploy from a branch"
   - Choisissez la branche `gh-pages` et le dossier `/ (root)`

### Déploiement automatique

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) déploie automatiquement le site à chaque push sur `main` :

- Build du projet
- Déploiement sur la branche `gh-pages`
- Site accessible à `https://votre-username.github.io/saas-marketing-site`

## 📱 Pages disponibles

### Accueil (`/`)
- Hero section avec CTA
- Section fonctionnalités
- Call-to-action principal

### Portfolio (`/portfolio`)
- Showcase de 3 cas d'usage clients
- Descriptions des projets
- Liens vers les cas d'étude

### Témoignages (`/testimonials`)
- Avis clients avec étoiles
- Statistiques clés (5000+ utilisateurs, 98% satisfaction)
- Témoignages authentiques

### Blog (`/blog`)
- Articles avec catégories
- Dates de publication
- Newsletter d'abonnement

### Contact (`/contact`)
- Formulaire de contact interactif
- Informations de contact
- Adresse et moyens de communication

## 🎯 Optimisations

- **CSS Variables** pour une maintenance facile des couleurs
- **Animations CSS** pour des transitions fluides
- **Responsive Design** avec Tailwind breakpoints
- **Accessibilité** : Navigation au clavier, contraste approprié
- **Performance** : Code splitting, lazy loading

## 📝 Personnalisation

### Changer le nom de l'entreprise
Remplacez "EcoFlow" par votre nom dans :
- `client/src/pages/Home.tsx`
- Tous les fichiers de pages
- `README.md`

### Modifier les couleurs
Éditez les variables CSS dans `client/src/index.css` :
```css
:root {
  --primary: #votre-couleur;
  --accent: #votre-couleur;
  /* ... */
}
```

### Ajouter du contenu
Modifiez directement le contenu des pages React dans `client/src/pages/`

## 🔗 Ressources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 📄 Licence

Ce projet est fourni à titre d'exemple. Libre d'utilisation et de modification.

## ✨ Prochaines étapes

- [ ] Ajouter un système de blog dynamique
- [ ] Intégrer un CMS
- [ ] Ajouter des analytics
- [ ] Implémenter un système de newsletter
- [ ] Ajouter des tests automatisés

---

**Créé avec ❤️ pour les entrepreneurs modernes**
