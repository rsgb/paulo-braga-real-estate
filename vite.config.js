import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/paulo-braga-real-estate/", // GitHub repo name
  // base: "/", // Netlify repo name
  server: {
    host: true,
  },
});
