import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    // Optimize chunks for better caching and SEO
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react')) {
            return 'vendor'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
        }
      }
    },
    // Optimize images and assets
    assetsInlineLimit: 4096,
    // Target modern browsers for better performance
    target: 'esnext'
  }
})