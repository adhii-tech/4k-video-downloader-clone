import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // Prevent Vite from clearing the terminal
  clearScreen: false,

  server: {
    port: 1420,
    strictPort: true,

    watch: {
      ignored: [
        "**/src-tauri/target/**",
        "**/src-tauri/target/**/*",
        "**/target/**",
        "**/target/**/*",
      ],
    },
  },

  // Tauri environment variables
  envPrefix: ["VITE_", "TAURI_"],

  build: {
    // Tauri supports ES2021
    target: ["es2021", "chrome100", "safari13"],

    // Don't minify during debug
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,

    // Generate sourcemaps in debug mode
    sourcemap: !!process.env.TAURI_DEBUG,
  },
});
