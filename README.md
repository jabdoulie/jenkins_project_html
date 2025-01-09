# Voyagez avec Nous

Bienvenue dans le projet "Voyagez avec Nous", une application web qui vous invite à découvrir des destinations populaires autour du monde. Ce projet utilise HTML, CSS et JavaScript pour offrir une expérience interactive et visuellement agréable.

## Aperçu

Le site propose une page d'accueil avec un bouton pour explorer des destinations populaires telles que Paris, Tokyo, et Bali. Le site utilise le framework Bootstrap pour un design réactif et élégant. Le JavaScript est utilisé pour afficher l'heure actuelle et pour un effet de défilement fluide vers la section des destinations.

## Fonctionnalités

- **Design réactif** : Grâce à Bootstrap, le site s'adapte parfaitement aux écrans de bureau, tablette et mobile.
- **Destinations populaires** : Une liste de destinations avec une courte description et des images de chaque lieu.
- **Heure actuelle** : L'heure locale est affichée en temps réel dans la section des destinations.

## Prérequis

Avant de commencer, vous aurez besoin de :
- [Docker](https://www.docker.com/products/docker-desktop) installé sur votre machine.
- Un éditeur de texte pour modifier le code, comme [VS Code](https://code.visualstudio.com/).

## Installation et Lancement

### 1. Clonez le dépôt

Clonez ce projet sur votre machine locale

### 2. Construisez l'image Docker

Dans le répertoire du projet, construisez l'image Docker avec la commande suivante :

```bash
docker build -t voyagez-avec-nous .
```

### 3. Lancez le container Docker

Une fois l'image construite, exécutez le container en utilisant cette commande :

```bash
docker run -d -p 8080:80 voyagez-avec-nous
```

### 4. Accédez à l'application

Ouvrez votre navigateur et accédez à l'URL suivante pour voir l'application :

```
http://localhost:8080
```

## Structure du projet

Voici la structure des fichiers du projet :

```
/project
  |-- Dockerfile         # Dockerfile pour la création de l'image
  |-- index.html         # Le fichier HTML principal
  |-- style.css          # Le fichier CSS pour le style personnalisé
  |-- script.js          # Le fichier JavaScript pour les interactions
  |-- README.md          # Ce fichier de documentation
```