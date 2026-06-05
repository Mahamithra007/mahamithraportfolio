import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/mahamithraportfolio/',
  },
  tanstackStart: {
    server: { 
      entry: "server" 
    },
  },
});
