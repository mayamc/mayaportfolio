# Maya Chakrapani — Portfolio Site

Personal portfolio website for Maya Chakrapani, technical writer and user experience
documentation specialist. Built as a static, dependency-free HTML/CSS/JS site.

**View locally:** open `index.html` in a browser, or serve the folder with any static
file server.

```bash
# optional: serve locally
npx serve .
```

## Structure

```
index.html                     Page markup and content
css/style.css                  Styling (light/dark aware, responsive)
js/script.js                   Mobile nav, scroll reveal, footer year
SampleInstallationGuide.docx   Downloadable writing sample
```

## Deploying

This site has no build step, so it deploys as-is to any static host:

- **GitHub Pages:** Settings → Pages → Deploy from branch `main`, folder `/ (root)`.
- **Netlify / Vercel:** point either at this repo with no build command and publish
  directory `.`.

## Content

Sections: About, Documentation Projects, Skills, Education, Contact. Edit `index.html`
directly to update copy or add new project cards.
