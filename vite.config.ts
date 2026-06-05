import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/mahamithraportfolio/',
    build: {
      // Directs Vite to bundle the static single-page bundle into 'dist'
      outDir: 'dist',
    }
  },
  tanstackStart: {
    server: { 
      entry: "server" 
    },
  },
});
