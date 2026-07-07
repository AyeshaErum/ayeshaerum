import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://ayeshaerum.github.io/portfolio-ayesha/
// — base must match the repo name. Local dev is unaffected (Vite serves at /
// in dev... it serves at the base path; the printed URL includes it).
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-ayesha/',
})
