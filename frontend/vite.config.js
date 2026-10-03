import { defineConfig } from 'vite';

// Relative asset paths so the built site works under /Earthquakes/ on GitHub Pages.
// esnext keeps the top-level await in main.js.
export default defineConfig({
  base: './',
  build: { target: 'esnext' },
});
