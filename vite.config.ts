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
      name: 'remoteApp',
      filename: 'remoteApp.js',
      exposes: {
        './App': './src/App.tsx',
        './Image': './src/components/imgChart.png',
      },
      // remotes: {
      //   remoteChart: {
      //     type: 'module',
      //     name: 'remoteChart',
      //     entry: 'http://localhost:5173/remoteChart.js',
      //   },
      // },
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
    }),
  ],
})
