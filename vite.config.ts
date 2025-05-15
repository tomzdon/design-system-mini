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
    host: "0.0.0.0",
    allowedHosts: [
      "9968942d-7f75-4541-93fb-123c05d51eff-00-2losina8gq77g.kirk.replit.dev",
      "design-system-mini-tomekkwlodarczy.replit.app",
    ],
    proxy: {
      "/api/sportsbook": {
        target: "https://www.betpawa.ng",
        changeOrigin: true,
        secure: false,
      },
      "/production/api/sportsbook": {
        target: "https://ng.develop.frontend-react-web.verekuu.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
