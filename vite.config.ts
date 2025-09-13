import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.scss",
      name: "ui-theme",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        assetFileNames: "index.css",
      },
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
});
