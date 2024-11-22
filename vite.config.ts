import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2022',
  },
  plugins: [
    react(),
    federation({
      filename: 'remoteApp.js',
      name: 'remoteApp',
      exposes: {
        './App': './src/App.tsx',
      },
      remotes: {},
      shared: {
        react: {
          requiredVersion: '^18.3.1',
          singleton: true,
        },
        'react-dom': {
          requiredVersion: '^18.3.1',
          singleton: true,
        },
      },
      manifest: true,
    }),
  ],
})
