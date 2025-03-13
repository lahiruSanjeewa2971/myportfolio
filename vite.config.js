import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./src/assets", // Ensure relative paths for assets
  build: {
    outDir: "dist", // Default build directory
  },
});
