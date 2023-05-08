import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = (to: any) => {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
    return { top: 0 };
  };
});
