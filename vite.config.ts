import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), WindiCSS()],
});
