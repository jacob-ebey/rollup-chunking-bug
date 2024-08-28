import { defineConfig } from "vite";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: ["src/entry-a.js", "src/entry-b.js"],
      output: {
        manualChunks(id) {
          if (id.includes("chunk-")) {
            return "chunked";
          }
        },
      },
    },
  },
});
