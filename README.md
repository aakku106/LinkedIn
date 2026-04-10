# LinkedIn Clone

React + TypeScript implementation of a LinkedIn-style interface with local persistence, routed pages, and authenticated access to protected views.

## Overview

This project is a Vite-based single-page application that uses:

- React 19 for UI composition
- React Router for route-based navigation
- Dexie (IndexedDB) for local data storage
- Zustand (persist middleware) for authentication state
- Tailwind CSS (v4) with additional component-level CSS files

At startup, the app seeds IndexedDB with one demo user and demo posts if the database is empty.

## Implemented Functionality

## Authentication

- Email/password sign-in backed by local IndexedDB user records
- Persisted auth session using Zustand storage
- Route protection via `ProtectedRoute`
- Sign-out from profile menu

## Feed

- Feed route with left/main/right layout
- Create post form (text-based)
- Post list sorted by latest `createdAt`
- Like toggle with per-user like state (`likedByUserIds`)
- Seeded sample posts with generated image URLs

## Profile

- Profile page bound to the currently authenticated user
- User details rendered from stored profile fields

## Notifications

- Notification page with tab filters (`All`, `Jobs`, `My posts`, `Mentions`)
- Notification items generated from externally fetched random user data

## Search

- Navbar user search UI
- Fetches users from `https://randomuser.me/api/?results=20`
- Caches search users in `sessionStorage`

## Routing

Configured routes:

- `/login`
- `/feed`
- `/profile`
- `/notifications`
- `/network` (placeholder)
- `/jobs` (placeholder)
- `/messages` (placeholder)

## Data Layer

Dexie database name: `linkedinClone`

Tables:

- `users`: `++id,email`
- `posts`: `++id,userId,createdAt`

Primary models (from code):

- `User`: profile and auth fields (`name`, `email`, `password`, `profilePic`, `headline`, etc.)
- `Post`: content, owner (`userId`), timestamp, optional image, and like metadata

## Demo Credentials

Seeded default user:

- Email: `aakku@aakku.com`
- Password: `1234`

These values come from `src/lib/seed.ts` and are inserted only when the local database is empty.

## Project Structure

```text
src/
 app/              # router, root layout, route guard
 components/       # shared UI components
 features/
  auth/           # login page + auth store
  feed/           # feed page, post creation, post hook
  notification/   # notification page
  profile/        # profile page
 hooks/            # reusable hooks (search users)
 lib/              # Dexie database + seed logic
 assets/           # images and css files
```

## Local Development

## Prerequisites

- Bun (primary runtime/package manager used in this project)
- Node.js + npm (optional alternative; commands are equivalent)

## Install (Bun)

```bash
bun install
```

## Run Development Server (Bun)

```bash
bun run dev
```

## Build (Bun)

```bash
bun run build
```

## Preview Production Build (Bun)

```bash
bun run preview
```

## Lint (Bun)

```bash
bun run lint
```

## Equivalent npm Commands

If you prefer Node.js + npm, use the same scripts:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Notes and Current Limitations

- Google sign-in option is present in the login UI but not implemented.
- `network`, `jobs`, and `messages` routes are placeholders.
- Authentication is local-only (no backend API).
- Credentials are stored in IndexedDB for demo use; this is not production-grade auth.

## GitHub Deployment

This project is configured for GitHub Pages deployment.

- `vite.config.ts` sets `base` dynamically when running in GitHub Actions.
- For `<username>.github.io` repositories, base path resolves to `/`.
- For project repositories, base path resolves to `/<repo-name>/`.

Typical deployment flow:

1. Build the app in CI with `bun run build`.
2. Publish the generated `dist` directory to GitHub Pages.
3. Ensure Pages is configured to deploy from the GitHub Actions workflow.
