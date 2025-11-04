import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Fix dla WSL - wymusza polling zamiast native file watchers
    },
    host: true, // Pozwala na dostęp z zewnątrz (opcjonalne)
  },
})
