import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Left completely clean. Routing paths are injected safely via deploy.yml
  },
  tanstackStart: {
    server: { 
      entry: "server" 
    },
  },
});
