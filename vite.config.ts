import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesRepo = repoName.endsWith(".github.io");
const githubPagesBase = isUserOrOrgPagesRepo ? "/" : `/${repoName}/`;

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? githubPagesBase : "/",
  plugins: [react(), tailwindcss()],
});
