import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://papaya-hub.github.io',
  base: '/ai-react-site',
  outDir: './dist',
  vite: {
    ssr: {
      external: ['workbox-window']
    }
  }
});
