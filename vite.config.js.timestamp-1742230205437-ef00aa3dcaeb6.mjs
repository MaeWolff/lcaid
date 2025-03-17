// vite.config.js
import tailwindcss from "file:///Users/maxence/Library/Mobile%20Documents/com%7Eapple%7ECloudDocs/Documents/fichu-studio/themes/lcaid/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///Users/maxence/Library/Mobile%20Documents/com%7Eapple%7ECloudDocs/Documents/fichu-studio/themes/lcaid/node_modules/vite/dist/node/index.js";
import shopify from "file:///Users/maxence/Library/Mobile%20Documents/com%7Eapple%7ECloudDocs/Documents/fichu-studio/themes/lcaid/node_modules/vite-plugin-shopify/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    shopify({
      sourceCodeDir: "src",
      entrypointsDir: "src/entrypoints"
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].min.js",
        chunkFileNames: "[name].[hash].min.js",
        assetFileNames: "[name].[hash].min[extname]"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWF4ZW5jZS9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Eb2N1bWVudHMvZmljaHUtc3R1ZGlvL3RoZW1lcy9sY2FpZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21heGVuY2UvTGlicmFyeS9Nb2JpbGUgRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvRG9jdW1lbnRzL2ZpY2h1LXN0dWRpby90aGVtZXMvbGNhaWQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21heGVuY2UvTGlicmFyeS9Nb2JpbGUlMjBEb2N1bWVudHMvY29tJTdFYXBwbGUlN0VDbG91ZERvY3MvRG9jdW1lbnRzL2ZpY2h1LXN0dWRpby90aGVtZXMvbGNhaWQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHNob3BpZnkgZnJvbSBcInZpdGUtcGx1Z2luLXNob3BpZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHNob3BpZnkoe1xuICAgICAgc291cmNlQ29kZURpcjogXCJzcmNcIixcbiAgICAgIGVudHJ5cG9pbnRzRGlyOiBcInNyYy9lbnRyeXBvaW50c1wiLFxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MoKV0sXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLltoYXNoXS5taW4uanNcIixcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiW25hbWVdLltoYXNoXS5taW4uanNcIixcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiW25hbWVdLltoYXNoXS5taW5bZXh0bmFtZV1cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxZCxPQUFPLGlCQUFpQjtBQUM3ZSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7QUFFcEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ04sZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
