import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
    server: {
        port: 3000,
        strictPort: true,
    },
    preview: {
        port: 3000,
        strictPort: true,
    },
}) 