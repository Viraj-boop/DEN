import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isProduction = mode === "production";

  return {
    server: {
      host: true, // works for localhost + LAN
      port: 8080,
      strictPort: true,
      open: true,
      hmr: {
        overlay: true,
      },
    },

    plugins: [
      react(), // clean React setup (no lovable, no emotion)
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
      },
    },

    build: {
      outDir: "dist",
      sourcemap: !isProduction,
      minify: "esbuild",
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
          },
        },
      },
    },

    preview: {
      port: 5000,
      strictPort: true,
    },

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV || "development"),
    },

    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  };
});