import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", //this is what "homepage" did in the package.json of CRA projects.
});
