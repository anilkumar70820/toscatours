export default {
  devtools: { enabled: true },

  head: {
    htmlAttrs: {
      lang: 'en'
    },
  },

  css: ['~/public/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/ui"]
};