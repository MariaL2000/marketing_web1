import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/marketing_web1/',
   build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
