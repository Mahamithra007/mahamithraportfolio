import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Tells Vite to build all file assets relative to the repository subfolder
  base: "/mahamithraportfolio/",
  plugins: [
    // Forces TanStack Router to recognize the subfolder as the base URL root path
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tsconfigPaths(),
  ],
});
