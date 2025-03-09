import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";

export default defineConfig({
  plugins: [
    shopify({
      sourceCodeDir: "src",
      entrypointsDir: "src/entrypoints",
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].min.js",
        chunkFileNames: "[name].[hash].min.js",
        assetFileNames: "[name].[hash].min[extname]",
      },
    },
  },
});
