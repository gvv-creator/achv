import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.achv.today',
  vite: {
    plugins: [tailwindcss()],
  },
});
