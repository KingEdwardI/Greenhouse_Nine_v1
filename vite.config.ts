import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// Library build configuration
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      entryRoot: "src",
      insertTypesEntry: true,
      outDir: "dist",
      exclude: ["**/*.stories.tsx", "**/*.stories.ts"],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "GreenhouseNine",
      formats: ["es", "cjs"],
      fileName: (format: string) =>
        format === "es" ? "index.mjs" : "index.cjs",
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react-dom", "@radix-ui/themes"],
      output: {
        assetFileNames: (assetInfo: { name?: string }) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css"))
            return "style.css";
          return assetInfo.name ?? "[name][extname]";
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
