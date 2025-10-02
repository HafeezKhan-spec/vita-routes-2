# Advance Edge Website (Vite + React + Tailwind)

This repository contains the Advance Edge website built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui.

## Quick Start

Requirements: Node.js and npm.

```sh
npm i
npm run dev
```

- Local preview: `http://localhost:8080/`
- If you see `net::ERR_CONNECTION_REFUSED` on `8081`, use `8080` instead.

## Recent Updates

- Mobile header back arrow on small screens to navigate back (fallback to `/`).
- Mobile menu stability: overlay rendered via portal (`document.body`) and corrected stacking context to prevent clipping after scroll.
- "Book a Call" CTAs on Home now route directly to `/contact` using `Link`.

## Key Files

- `src/components/Header.tsx`: Mobile menu, back arrow, header behavior on scroll.
- `src/pages/Home.tsx`: Home page hero and CTAs linking to Contact.

## How to Test

- Open `http://localhost:8080/`.
- On mobile view:
  - Scroll down ≥25% and open the hamburger menu; the overlay should fully cover the screen.
  - Tap the back arrow to navigate back; if no history, it goes to `/`.
  - Tap any "Book a Call" CTA on Home; it should route to `/contact`.

## Troubleshooting

- If assets momentarily show `ERR_ABORTED` during hot reload, wait a moment; these are transient during dependency optimization.
- Ensure the dev server is running (`npm run dev`) and that you are visiting `http://localhost:8080/`.

---
 
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/2ada3e15-bd7d-473a-b52e-a58d086b5742

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2ada3e15-bd7d-473a-b52e-a58d086b5742) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2ada3e15-bd7d-473a-b52e-a58d086b5742) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
