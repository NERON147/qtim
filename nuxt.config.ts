// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-03-20',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Qtest',
      link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
      meta: [

      ],
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },

  dir: {
    assets: 'src/assets',
    public: 'public',
    plugins: 'src/plugins',
    pages: 'src/pages',
    layouts: 'src/layouts',
    middleware: 'src/middleware'
  },

  components: ['src/components'],
  css: ['~/src/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
  ],
});