# Ayesha Erum — Portfolio

A personal portfolio with a retro desktop-OS theme. The homepage is a computer
desktop with scattered folders; each folder opens a real page at its own URL
(`/about`, `/education`, `/experience`, `/achievements`, `/projects`,
`/certifications`, `/volunteering`, `/dm`).

Built with **Vite + React + React Router** (free, fast, real URL routes).
Contact form emails are sent with **FormSubmit.co** (free, no account, no
backend — the form posts to their endpoint and they forward it to your inbox).

## Run it locally

1. Open this folder in a terminal (in VS Code: **Terminal → New Terminal**).
2. Run `npm install` (first time only).
3. Run `npm run dev`.
4. Open the address it prints (usually `http://localhost:5173/`) in your browser.

## One-time email activation (required before the DM form works)

FormSubmit needs to verify that ayeshaerum2006@gmail.com wants to receive
form submissions. This takes one minute:

1. Run the site locally (steps above).
2. Go to the **DM** page → choose **Email** → fill in any subject/message → press **SEND**.
3. Open the inbox of **ayeshaerum2006@gmail.com**. You'll have an email from
   FormSubmit with a big **"Activate Form"** button. Click it.
4. That's it. Every submission from now on arrives as a normal email.
   (The very first test message is not delivered — send yourself one more to confirm.)

## Deployment (already set up)

The site is deployed to GitHub Pages at
**https://ayeshaerum.github.io/portfolio-ayesha/** from the repository
`AyeshaErum/portfolio-ayesha` (public).

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
- `vite.config.js` has `base: '/portfolio-ayesha/'` — if you ever rename the
  repository, update that line to match.
- `public/404.html` handles direct links to inner pages (like `/about`) on
  GitHub Pages. Leave `segmentCount = 1` unless you add a custom domain
  (then set it to `0`).
