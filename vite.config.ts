import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  vite: {
    // Tells the compiler to rewrite asset URLs for your GitHub subfolder path
    base: "/mahamithraportfolio/",
    plugins: [
      TanStackRouterVite({
        routesDirectory: "./src/routes",
        generatedRouteTree: "./src/routeTree.gen.ts",
      }),
    ],
  },
  tanstackStart: {
    server: { 
      entry: "server" 
    },
  },
});
