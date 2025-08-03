import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // 👇 Añade esta línea
  site: 'https://ricardoruizmoreno.com',
  integrations: [tailwind({
    applyBaseStyles: false, // Esto es para usar el plugin de tipografía
  })]
});