// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: { htmlAttrs: { lang: "pt-BR" } },
  },
  modules: ["unplugin-icons/nuxt"],
});
