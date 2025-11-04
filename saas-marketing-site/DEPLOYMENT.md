# Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment déployer votre site SaaS marketing sur GitHub Pages de manière professionnelle.

## 📋 Prérequis

- Un compte GitHub
- Git installé sur votre ordinateur
- Le projet `saas-marketing-site` cloné localement

## 🚀 Étapes de déploiement

### 1. Créer un repository GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur le **+** en haut à droite → **New repository**
3. Nommez le repository : `saas-marketing-site`
4. Sélectionnez **Public** (pour que GitHub Pages fonctionne)
5. Cliquez sur **Create repository**

### 2. Configurer Git localement

```bash
# Naviguez dans le dossier du projet
cd saas-marketing-site

# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Professional SaaS marketing website"

# Renommer la branche en 'main' (si nécessaire)
git branch -M main

# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/saas-marketing-site.git

# Pousser le code
git push -u origin main
```

### 3. Configurer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Build and deployment" :
   - **Source** : Sélectionnez "Deploy from a branch"
   - **Branch** : Sélectionnez `gh-pages` et `/root`
5. Cliquez sur **Save**

### 4. Activer les GitHub Actions

1. Allez sur l'onglet **Actions** de votre repository
2. Cliquez sur **I understand my workflows, go ahead and enable them**
3. Le workflow de déploiement s'activera automatiquement

### 5. Déclencher le premier déploiement

Le workflow s'exécutera automatiquement lors du prochain push. Pour le tester :

```bash
# Faire un changement mineur (par exemple, modifier le README)
echo "# Déploiement en cours..." >> README.md

# Commit et push
git add README.md
git commit -m "Trigger deployment"
git push
```

### 6. Vérifier le déploiement

1. Allez sur l'onglet **Actions** de votre repository
2. Vous devriez voir le workflow "Deploy to GitHub Pages" en cours d'exécution
3. Une fois terminé (checkmark ✓), votre site est en ligne !
4. Accédez à : `https://VOTRE_USERNAME.github.io/saas-marketing-site`

## 📝 Mises à jour futures

Chaque fois que vous pushez du code vers la branche `main`, le site se redéploie automatiquement :

```bash
# Faire des modifications
# ... éditer les fichiers ...

# Commit et push
git add .
git commit -m "Description de vos changements"
git push
```

## 🔧 Troubleshooting

### Le site n'apparaît pas après le déploiement

- **Attendez 5-10 minutes** : GitHub Pages peut prendre du temps pour mettre à jour
- **Vérifiez les Actions** : Allez dans l'onglet Actions pour voir s'il y a des erreurs
- **Videz le cache** : Essayez Ctrl+Shift+R (ou Cmd+Shift+R sur Mac)

### Le workflow échoue

1. Allez sur l'onglet **Actions**
2. Cliquez sur le workflow échoué
3. Vérifiez les logs pour identifier l'erreur
4. Les erreurs courantes :
   - Dépendances manquantes : Vérifiez `pnpm install`
   - Erreurs de build : Vérifiez la syntaxe TypeScript/React

### Les styles ne s'appliquent pas

- Assurez-vous que le build a réussi
- Videz le cache du navigateur
- Vérifiez que les fichiers CSS sont dans le dossier `dist/`

## 🎯 Domaine personnalisé (optionnel)

Pour utiliser votre propre domaine :

1. Allez dans **Settings** → **Pages**
2. Sous "Custom domain", entrez votre domaine
3. Configurez les DNS records chez votre registraire
4. GitHub validera automatiquement

## 📊 Monitoring

Pour suivre les visites de votre site :

1. Installez Google Analytics
2. Modifiez `client/index.html` pour ajouter le script de suivi
3. Ou utilisez les statistiques de GitHub Pages (Settings → Pages)

## 🔐 Sécurité

- ✅ HTTPS est activé automatiquement par GitHub Pages
- ✅ Vos secrets (`.env`) ne sont jamais poussés (voir `.gitignore`)
- ✅ Le code source reste visible (c'est un repository public)

## 📚 Ressources

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-common-issues-with-github-pages)

---

**Votre site est maintenant prêt pour le monde ! 🌍**
