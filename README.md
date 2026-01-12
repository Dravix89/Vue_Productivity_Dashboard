# DEMO = Vue 3 + TypeScript + Vite

# Vue Productivity Dashboard

A simple productivity dashboard built with Vue 3, TypeScript, Pinia and Tailwind CSS.

## Features

- Login system (fake authentication)
- Protected routes with Vue Router
- Dashboard with task statistics
- Tasks list (fetched from JSONPlaceholder API)
- User profile page
- Responsive layout (desktop & mobile)

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Pinia
- Vue Router
- Tailwind CSS
- Axios

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Launch the development server:
   npm run dev

3. Open in your browser:
   http://localhost:5173

## Structure du projet :

src/
├─ api/
│ └─ axios.ts
├─ stores/
│ ├─ auth.ts
│ └─ tasks.ts
├─ views/
│ ├─ Login.vue
│ ├─ Dashboard.vue
│ ├─ Tasks.vue
│ └─ Profile.vue
├─ components/
│ ├─ StatCard.vue
│ ├─ TaskItem.vue
│ └─ Navbar.vue
├─ router/
│ └─ index.ts
├─ types/
│ └─ index.ts
└─ main.ts

✅ **Résumé** :

## Notes (Fr)

- Le système de connexion est **factice** et sert uniquement à des fins de démonstration.
- Les tâches sont récupérées depuis l’**API publique JSONPlaceholder**.
- Il n’y a pas de vrai backend, donc les données ne sont pas sauvegardées entre les rafraîchissements de page.

## Notes (Eng)

- The login system is **fake** and only for demonstration purposes.
- Tasks are fetched from the **public JSONPlaceholder API**.
- No real backend is used, so data is not persisted between page reloads.
