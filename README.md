# Ayesha Erum — Portfolio

A personal portfolio with a retro desktop-OS theme. The homepage is a computer
desktop with scattered folders; each folder opens a real page at its own URL
(`/about`, `/education`, `/experience`, `/achievements`, `/projects`,
`/certifications`, `/volunteering`, `/dm`).

Built with **Vite + React + React Router** (free, fast, real URL routes).
The DM contact form uses a `mailto:` link — pressing SEND opens the visitor's
own email app with the subject and message pre-filled, so no third-party
service ever handles the message.

## Run it locally

1. Open this folder in a terminal (in VS Code: **Terminal → New Terminal**).
2. Run `npm install` (first time only).
3. Run `npm run dev`.
4. Open the address it prints in your browser.

## Deployment (already set up)

The site is deployed to GitHub Pages at
**https://ayeshaerum.github.io/ayeshaerum/** from the repository
`AyeshaErum/ayeshaerum` (public).

Deploys are automatic: every push to the `main` branch runs the GitHub
Actions workflow in `.github/workflows/deploy.yml`, which builds the site and
publishes it. To update the live site:

1. Make your changes (see `HOW_TO_ADD_CONTENT.md` for content edits).
2. Open a terminal in this folder and run, one line at a time:
   ```
   git add .
   git commit -m "Describe your change here"
   git push
   ```
3. Wait 1–2 minutes. Check progress under the repository's **Actions** tab on
   GitHub. When the workflow shows a green check, the change is live.

Notes:
- `vite.config.js` has `base: '/ayeshaerum/'` — if you ever rename the
  repository, update that line to match.
- `public/404.html` handles direct links to inner pages (like `/about`) on
  GitHub Pages. Leave `segmentCount = 1` unless you add a custom domain
  (then set it to `0`).
