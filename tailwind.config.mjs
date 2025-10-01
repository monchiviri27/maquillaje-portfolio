// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
    // ESTE BLOQUE ES VITAL. DEBE INCLUIR TODOS LOS ARCHIVOS .astro, .js, etc.
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', 
        './public/**/*.html'
    ],
    theme: {
        extend: {
            // Asegúrate de que las fuentes que definimos antes (serif-elegant) estén aquí
        },
    },
    plugins: [],
};