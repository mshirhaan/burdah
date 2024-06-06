import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Serve the sitemap file
    proxy: {
      "/sitemap.xml": {
        target: "http://qaseedaburda.com", // Replace with the appropriate URL where your sitemap.xml is located
      },
    },
  },
});
