import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all network interfaces
    port: 5173, // Optional: Specify a port (default is 5173)
    open: false, // Prevent the browser from opening automatically
  },
});
