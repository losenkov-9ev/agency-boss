export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/assets/css/main.css', 'swiper/css', 'swiper/css/navigation'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://agencyboss.ru',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'preload', as: 'image', href: '/assets/agency-boss-hero.png' },
      ],
    },
  },
  compatibilityDate: '2026-07-14',
})
