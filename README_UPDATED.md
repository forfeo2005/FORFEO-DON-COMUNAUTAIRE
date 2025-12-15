# Code Source - Forfeo Communauté & Concours

## Description du projet

Ce site web a été créé avec **Manus** et présente la plateforme communautaire Forfeo, qui permet de soutenir des causes sociales québécoises à travers des achats d'expériences.

**URL du site :** https://forfeocomm-8u2bw3op.manus.space/

## ✨ Nouveau logo professionnel

Le projet inclut maintenant un **nouveau logo professionnel** conçu spécifiquement pour Forfeo, qui s'harmonise parfaitement avec le design du site.

### Concept du logo

Le logo représente une **boîte cadeau** entourée d'un **réseau de connexions**, symbolisant :
- 🎁 **La générosité** : Chaque expérience est un cadeau pour la communauté
- 🌐 **L'impact collectif** : Les connexions représentent le réseau communautaire
- 💙 **Les valeurs locales** : Design moderne adapté à l'identité québécoise

### Palette de couleurs

Le logo utilise les couleurs du site pour une cohérence visuelle parfaite :
- **Cyan/Turquoise** (#22d3ee) : Boîte cadeau et lignes de réseau
- **Or/Jaune** (#fbbf24) : Ruban du cadeau et texte "FORFEO"
- **Blanc** (#ffffff) : Version pour fonds sombres

### Fichiers de logo disponibles

Tous les logos sont disponibles dans le dossier `assets/logos/` :

| Fichier | Usage | Format |
|---------|-------|--------|
| `forfeo_logo_horizontal.png` | Logo principal pour header (fond clair) | Paysage |
| `forfeo_logo_white_version.png` | Logo pour header sur fond sombre | Paysage |
| `forfeo_logo_vertical.png` | Réseaux sociaux, avatars | Carré |
| `forfeo_logo_icon_only.png` | Icône seule, watermark | Carré |
| `favicon.ico` | Favicon navigateurs | Multi-résolution |
| `favicon-192x192.png` | Favicon haute résolution | 192x192 px |
| `favicon-256x256.png` | Favicon très haute résolution | 256x256 px |
| `apple-touch-icon.png` | Icône Apple (iPhone/iPad) | 180x180 px |

📖 **Guide complet d'utilisation** : Consultez `assets/logos/LOGO_USAGE_GUIDE.md` pour toutes les règles d'utilisation, dimensions recommandées, et exemples d'intégration.

## Structure du projet

Le site est une **application React** moderne construite avec les technologies suivantes :

- **React** : Framework JavaScript pour l'interface utilisateur
- **Vite** : Outil de build et de développement rapide
- **TailwindCSS** : Framework CSS utilitaire pour le design
- **React Router** : Gestion de la navigation entre les pages

### Architecture des fichiers

```
forfeo_source_code/
├── index.html                      # Point d'entrée HTML original
├── index_with_new_logo.html        # Point d'entrée HTML avec nouveau logo
├── assets/
│   ├── index-S2zDNE-5.js          # Bundle JavaScript compilé (React + logique)
│   ├── index-DvqLSL8B.css         # Styles CSS compilés (TailwindCSS)
│   └── logos/                      # 🆕 Nouveaux logos Forfeo
│       ├── forfeo_logo_horizontal.png
│       ├── forfeo_logo_white_version.png
│       ├── forfeo_logo_vertical.png
│       ├── forfeo_logo_icon_only.png
│       ├── favicon.ico
│       ├── favicon-192x192.png
│       ├── favicon-256x256.png
│       ├── apple-touch-icon.png
│       └── LOGO_USAGE_GUIDE.md    # Guide d'utilisation des logos
├── README.md                       # Documentation originale
├── README_UPDATED.md               # Ce fichier (avec infos logos)
└── EXTRACTION_DETAILS.md           # Détails techniques de l'extraction
```

## Contenu du site

Le site comprend plusieurs sections principales :

### 1. Page d'accueil (/)
- **Hero section** : "Ensemble, pour un impact local durable"
- **Statistiques** : Dons collectés ($125,450), organismes soutenus (12), vies impactées (2,500+)
- **Mission** : Présentation de la mission de Forfeo
- **Valeurs** : Causes locales, impact collectif, transparence totale

### 2. Page Causes (/causes)
- Liste des causes sociales soutenues par Forfeo
- Sélection de domaines d'intervention critiques pour les communautés québécoises

### 3. Page Concours (/concours)
- Concours mensuels pour la communauté

### 4. Page Bundles (/bundles)
- Bundles solidaires d'expériences

### 5. Page Transparence (/transparence)
- Traçabilité complète des dons
- Documentation de l'impact des contributions

## Navigation

Le site dispose d'une **navigation principale** avec les liens suivants :
- Causes
- Concours
- Bundles
- Transparence
- Connexion

Un **pied de page** complet contient également :
- Accueil
- Causes
- Transparence
- Site principal
- Forfaits
- Contact
- Conditions
- Confidentialité
- Règlements

## Design et style

### Palette de couleurs
- **Fond principal** : Bleu marine foncé (#0f172a approximativement)
- **Texte principal** : Blanc
- **Accents** : Cyan/turquoise pour les titres et éléments importants
- **Accents secondaires** : Jaune/or pour certains mots-clés

### Typographie
- Police moderne et épurée
- Titres en grande taille avec effets de couleur dégradée
- Texte de corps lisible et bien espacé

### Éléments visuels
- **Nouveau logo Forfeo** en header avec boîte cadeau et réseau de connexions
- Badge "Made with Manus" en bas à droite
- Boutons avec effets de survol
- Design responsive adapté aux mobiles et tablettes

## Intégration du nouveau logo

### Dans le HTML

Le fichier `index_with_new_logo.html` inclut déjà les références aux favicons et styles pour le logo :

```html
<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="/assets/logos/favicon.ico">
<link rel="icon" type="image/png" sizes="192x192" href="/assets/logos/favicon-192x192.png">
<link rel="apple-touch-icon" href="/assets/logos/apple-touch-icon.png">

<!-- Style pour le logo -->
<style>
  .forfeo-logo {
    height: 48px;
    width: auto;
    display: block;
  }
  
  @media (max-width: 768px) {
    .forfeo-logo {
      height: 36px;
    }
  }
</style>
```

### Dans le composant React Header

Pour intégrer le logo dans le header du site, modifiez le composant React correspondant :

```jsx
// Dans le composant Header
function Header() {
  return (
    <header className="bg-slate-900">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/assets/logos/forfeo_logo_white_version.png" 
            alt="Forfeo - Communauté & Concours"
            className="forfeo-logo"
          />
        </a>
        {/* Reste de la navigation */}
      </nav>
    </header>
  );
}
```

### Recommandations d'intégration

1. **Header** : Utilisez `forfeo_logo_white_version.png` sur le fond bleu marine du site
2. **Footer** : Utilisez `forfeo_logo_white_version.png` ou `forfeo_logo_icon_only.png`
3. **Emails** : Utilisez `forfeo_logo_horizontal.png` (fonds généralement clairs)
4. **Réseaux sociaux** : Utilisez `forfeo_logo_vertical.png` pour les profils
5. **Favicon** : Déjà configuré avec `favicon.ico` et versions PNG

## Technologies utilisées

### Frontend
- **React 18** : Bibliothèque JavaScript pour construire l'interface utilisateur
- **React Router DOM** : Navigation côté client
- **TailwindCSS** : Framework CSS utilitaire

### Build & Bundling
- **Vite** : Outil de build moderne et rapide
- **ES Modules** : Format de modules JavaScript moderne

### Meta tags et SEO
Le site inclut des meta tags complets pour :
- **Open Graph** (Facebook, LinkedIn)
- **Twitter Cards**
- **Canonical URL**
- Image de prévisualisation sociale

## Fonctionnalités

### Application Single Page (SPA)
Le site fonctionne comme une **Single Page Application** :
- Navigation instantanée sans rechargement de page
- Routage côté client avec React Router
- Chargement initial puis navigation fluide

### Responsive Design
- Adaptation automatique aux différentes tailles d'écran
- Menu de navigation adaptatif
- Mise en page flexible avec TailwindCSS

### Analytics
Le site intègre :
- **Manus Analytics** pour le suivi des performances
- **Plausible Analytics** pour les statistiques de visite

## Notes techniques

### Fichier JavaScript (index-S2zDNE-5.js)
Ce fichier contient :
- Le code React compilé et minifié
- Les composants de l'application
- La logique de routage
- Les bibliothèques tierces (React, React Router, etc.)
- Taille : ~518 Ko

### Fichier CSS (index-DvqLSL8B.css)
Ce fichier contient :
- Les styles TailwindCSS compilés
- Les classes utilitaires
- Les styles personnalisés
- Taille : ~121 Ko

### Fichier HTML (index.html)
Point d'entrée minimal qui :
- Définit la structure HTML de base
- Charge les ressources CSS et JavaScript
- Contient un div `#root` où React monte l'application
- Inclut les meta tags pour le SEO et les réseaux sociaux

## Déploiement

Le site est actuellement déployé sur l'infrastructure **Manus** :
- URL : https://forfeocomm-8u2bw3op.manus.space/
- Hébergement : Manus Space
- CDN : CloudFlare (pour les assets statiques)

## Modification et développement

Pour modifier ce site, vous auriez besoin de :

1. **Accéder au projet source** dans l'éditeur Manus
2. **Modifier les composants React** dans l'interface de développement
3. **Intégrer les nouveaux logos** en suivant le guide d'utilisation
4. **Rebuild le projet** avec Vite
5. **Redéployer** sur Manus Space

Les fichiers JavaScript et CSS fournis ici sont **compilés et minifiés**, ce qui signifie qu'ils ne sont pas facilement modifiables directement. Pour des modifications, il faudrait accéder au code source original dans l'environnement de développement Manus.

## Informations complémentaires

- **Créé avec** : Manus (plateforme de développement web)
- **Framework** : React + Vite + TailwindCSS
- **Type** : Site web statique (SPA)
- **Logo** : Conçu spécifiquement pour Forfeo (décembre 2025)
- **Licence** : Non spécifiée
- **Date d'extraction** : 14 décembre 2025
- **Dernière mise à jour** : 14 décembre 2025 (ajout des logos)

---

**Note** : Ce code source a été extrait du site déployé et enrichi avec de nouveaux logos professionnels. Pour accéder au code source original non compilé et pouvoir le modifier facilement, il faudrait accéder au projet dans l'interface de développement Manus.
