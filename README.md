# Daniel Cousino — VS Code Portfolio

A single-page portfolio for Daniel Cousino that mimics the look and feel of Visual Studio Code. The site highlights professional experience, technical skills, education, certifications, and contact information inside a VS Code-inspired workspace built with React, TypeScript, and Vite.

## ✨ Features

- VS Code-like chrome including activity bar, explorer, tabs, and status bar
- Responsive layout with accessible keyboard-friendly navigation
- Resume-driven content rendered from structured data
- Themed with a dark palette and typography reminiscent of the editor
- Production-ready Vite build with TypeScript strictness

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 20.19 or ≥ 22.12 (tested on Node 22.20.0)
- npm ≥ 10

### Installation

```powershell
npm install
```

### Local Development

```powershell
npm run dev
```

The dev server runs on the port shown in the console (default `http://localhost:5173`).

### Production Build

```powershell
npm run build
```

### Preview Production Build

```powershell
npm run preview
```

## 🧱 Project Structure

- `src/App.tsx` — Application shell, navigation, and resume content definitions
- `src/App.css` — VS Code-inspired layout and component styling
- `src/index.css` — Global variables, typography, and layout defaults
- `public/` — Static assets served as-is

## ✍️ Customizing Content

- Update the resume data inside `src/App.tsx` to reflect new roles, projects, or messaging.
- Adjust the theme colors in `src/App.css` or tweak CSS variables in `src/index.css` to create custom palettes.
- Add new sections by extending the `SectionKey` union, `sectionOrder`, and corresponding content rendering logic.

## 📦 Deployment

The project builds to the `dist/` directory. Deploy the static output to any static host (Azure Static Web Apps, GitHub Pages, Netlify, Vercel, etc.).

## 🧪 Verification

- `npm run build` — Compiles TypeScript and bundles the production site.

## 📄 License

This project is provided as-is for Daniel Cousino’s personal portfolio. Update or extend it to suit future opportunities.
