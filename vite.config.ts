import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    proxy: {
      "/api/sportsbook": {
        target: "https://www.betpawa.ng",
        changeOrigin: true,
        secure: false,
        headers: {
          'devicetype': 'web',
          'x-pawa-brand': 'betpawa-nigeria',
          'x-pawa-language': 'en'
        }
      },
    },
  },
});
