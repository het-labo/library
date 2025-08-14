// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    ssr: false, // disable SSR for SPA

    app: {
        head: {
          link: [
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap'
            }
          ]
        }
    },

    css: [
        '@/assets/css/global.css',
    ],
    
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'
    ],

    googleFonts: {
        families: {
          Manrope: '200..800',
          Inter: [100, 200, 300, 400, 500, 600, 700], // Choose the weights you need
          Roboto: [400, 500, 700], // Example of another font
          'Open Sans': [400, 600, 700] // Another example
        },
        display: 'swap',
        prefetch: true,
        preconnect: true,
        preload: true,
        download: true
    },

    
})
