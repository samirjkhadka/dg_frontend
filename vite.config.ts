import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { Script } from "vm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    open: true,
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://youtube.com https://www.google.com; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.youtube.com https://youtube.com; connect-src 'self' https://www.youtube.com https://youtube.googleapis.com; img-src 'self' data: https:; media-src 'self' https://www.youtube.com",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    chunkSizeWarningLimit: 1600,
  },
});
