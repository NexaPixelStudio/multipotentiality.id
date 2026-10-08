import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' membuat situs bisa dibuka dari domain apa pun (domain sendiri maupun GitHub Pages).
export default defineConfig({
  plugins: [react()],
  base: './'
});
