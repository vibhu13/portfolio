import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://vibhu13.github.io/portfolio/",
  plugins: [react()],
})
