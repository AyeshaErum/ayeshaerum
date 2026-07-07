import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to GitHub Pages at https://ayeshaerum.github.io/ayeshaerum/
// — base must match the repo name (repo: AyeshaErum/ayeshaerum).
export default defineConfig({
  plugins: [react()],
  base: '/ayeshaerum/',
})
