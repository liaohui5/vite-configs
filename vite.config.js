import vue from "@vitejs/plugin-vue2";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
});
