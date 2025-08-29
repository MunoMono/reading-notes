import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/reading-notes/",
  server: {
    open: "/reading-notes/", // auto-open correct path in dev
  },
});