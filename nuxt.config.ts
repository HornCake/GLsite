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
      title: "GL コンペティション 2023",
      meta: [
        { name: "title", content: "GL コンペティション 2023" },
        { property: "og:site:name", content: "GL コンペティション 2023" },
        { property: "og:title", content: "GL コンペティション 2023" },
        { property: "og:description", content: "GL コンペティション 2023の公式ウェブサイトです" },
        { property: "og:image", content: "https://www.gl-competition.net/ogp.png" },
        { property: "og:url", content: "https://www.gl-competition.net/" },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          property: "og:type",
          content: "website",
        },
      ],
    },
  },
});
