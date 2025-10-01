// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- ¡Este es el paquete correcto!

import react from '@astrojs/react';

export default defineConfig({
    integrations: [tailwind(), react()], 
});