import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((cmd) => {
  const config = {
    plugins: [react()],
    base: "/portfolio2/",
  };
  // if (cmd !== "serve") config.base = "/";

  return config;
});
