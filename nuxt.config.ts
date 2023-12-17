// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["@/assets/styles/common.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/main.scss" as *;`,
        },
      },
    },
  },
  app: {
    head: {
      title: "GL Competition 2023",
      meta: [
        { name: "title", content: "GL Competition 2023" },
        { property: "og:title", content: "GL Competition 2023" },
        { property: "og:description", content: "GL Competition 2023の公式ウェブサイトです" },
        { property: "og:image", content: "https://www.gl-competition.net/ogp.png" },
        { property: "og:url", content: "https://www.gl-competition.net/" },
      ],
    },
  },
});
