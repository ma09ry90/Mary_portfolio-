import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.JPEG', '**/*.jpeg', '**/*.PNG', '**/*.png'],
  server: {
    port: 5173,
    open: true
  },
  build: {
    target: 'esnext',
    minify: 'esbuild', 
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
})
