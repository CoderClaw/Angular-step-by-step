/// <reference types="vitest" />

import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";

export default defineConfig(({ mode }) => ({
  resolve: {
    mainFields: ["module"],
  },
  plugins: [angular()],
  build: {
    target: ["es2022"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["src/**/*.spec.ts"],
    reporters: ["default"],
  },
  define: {
    "import.meta.vitest": mode !== "production",
  },
}));
