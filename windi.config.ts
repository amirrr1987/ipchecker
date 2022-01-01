import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  attributify: true,
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  alias: {
    btn: "w-24 h-10",
    icon: "w-6 h-6 fill-current",
  },
});
