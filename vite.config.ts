import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Descomente y modifique la siguiente línea si va a hacer deploy en GitHub Pages
  // base: '/nombre-de-su-repositorio/',
})
