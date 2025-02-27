import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
