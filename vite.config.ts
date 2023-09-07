import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      config: path.resolve(__dirname, './src/config'),
      containers: path.resolve(__dirname, './src/containers'),
      context: path.resolve(__dirname, './src/context'),
      enums: path.resolve(__dirname, './src/enums'),
      hooks: path.resolve(__dirname, './src/hooks'),
      mock: path.resolve(__dirname, './src/mock'),
      pages: path.resolve(__dirname, './src/pages'),
      providers: path.resolve(__dirname, './src/providers'),
      services: path.resolve(__dirname, './src/services'),
      slices: path.resolve(__dirname, './src/slices'),
      tests: path.resolve(__dirname, './src/tests'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
});
