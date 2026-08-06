# Maya Chakrapani — Portfolio Site

Personal portfolio website for Maya Chakrapani, technical writer and user experience
documentation specialist. Built with React and Vite.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Structure

```
index.html                    Vite entry HTML
src/main.jsx                  React entry point
src/App.jsx                   Assembles all page sections
src/index.css                 Styling (light/dark aware, responsive)
src/components/               One component per section (Header, Hero, About,
                               Projects, VisionStudioCard, Skills, Education,
                               Contact, Footer, Reveal)
public/images/                Project screenshots
public/SampleInstallationGuide.docx   Downloadable writing sample
```

## Deploying

Built as a static bundle (`npm run build` → `dist/`), so it deploys to any static
host. The Vite `base` path in `vite.config.js` is set to `/mayaportfolio/` for
GitHub Pages project-site hosting at `https://mayamc.github.io/mayaportfolio/`.

- **GitHub Pages:** deployed via GitHub Actions (see `.github/workflows/deploy.yml`) —
  push to `main` and it builds and publishes automatically.
- **Netlify / Vercel:** build command `npm run build`, publish directory `dist`.

## Content

Sections: About, Documentation Projects (including a featured VisionStudio case
study), Skills, Education, Contact. Edit the relevant file in `src/components/` to
update copy or add new project cards.
