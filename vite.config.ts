import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      filename: 'remoteApp.js',
      name: 'remoteApp',
      exposes: {
        './App': './src/App.jsx',
      },
      remotes: {},
      shared: {
        react: {
          requiredVersion: '^18.2.0',
          singleton: true,
        },
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
