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

## Deploy to GitHub Pages (when you're ready)

1. Create a GitHub account at https://github.com if you don't have one.
2. On GitHub, click the **+** in the top-right → **New repository**. Name it
   (e.g. `portfolio`), keep it **Public**, and click **Create repository**. Don't
   tick any of the "initialize" checkboxes.
3. In `vite.config.js` in this project, change the line
   `base: '/',` to `base: '/portfolio/',` — using your exact repository name
   between the slashes.
4. In `public/404.html`, confirm `segmentCount = 1` (already set — only change
   to `0` if you later use a custom domain).
5. Open a terminal in this folder and run, one line at a time:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` and `portfolio` with your GitHub username and repo
   name. Git will ask you to sign in to GitHub the first time.)
6. Run `npm run build`. This creates a `dist` folder.
7. Install the deploy helper once: `npm install -D gh-pages`
8. Add this line inside `"scripts"` in `package.json`:
   `"deploy": "gh-pages -d dist",`
9. Run `npm run deploy`. This publishes the `dist` folder to a `gh-pages` branch.
10. On GitHub, open your repository → **Settings** → **Pages** (left sidebar).
    Under **Branch**, pick `gh-pages`, folder `/ (root)`, and click **Save**.
11. After a minute, your site is live at
    `https://YOUR_USERNAME.github.io/portfolio/`.
12. To update the site later: make your changes, then run
    `npm run build` followed by `npm run deploy`.
