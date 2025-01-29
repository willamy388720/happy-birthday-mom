import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import { fileURLToPath } from "url";

// Definir __dirname manualmente para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@dtos": `${path.resolve(__dirname, "./src/dtos/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@env": `${path.resolve(__dirname, "./src/env/")}`,
      "@lib": `${path.resolve(__dirname, "./src/lib/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@styles": `${path.resolve(__dirname, "./src/styles/")}`,
      "@hooks": `${path.resolve(__dirname, "./src/hooks/")}`,
      "@contexts": `${path.resolve(__dirname, "./src/contexts/")}`,
      "@themes": `${path.resolve(__dirname, "./src/themes/")}`,
      "@routes": `${path.resolve(__dirname, "./src/routes/")}`,
    },
  },
});
