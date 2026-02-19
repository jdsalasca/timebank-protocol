import { defineConfig } from "vite";

const proxyTarget = process.env.VITE_PROXY_TARGET ?? "http://localhost:8082";

export default defineConfig({
  server: {
    host: true,
    port: 5174,
    proxy: {
      "/api": {
        target: proxyTarget,
        changeOrigin: true
      }
    }
  }
});
