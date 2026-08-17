import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//! IF you are using routes like react router add base: /Repo_name/
//! https://vite.dev/guide/static-deploy#github-pages

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test_vite_react",
});
