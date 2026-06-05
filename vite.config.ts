import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Left clean to allow the build script to handle the routing paths dynamically
  },
  tanstackStart: {
    server: { 
      entry: "server" 
    },
  },
});
