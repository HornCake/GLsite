<template>
  <div>
    <OHeader />
    <main>
      <NuxtPage />
      <ATopScrollButtton />
    </main>
  </div>
</template>

<script setup lang="ts">
  useHead({
    meta: [
      { name: "title", content: "GL Competition 2023" },
      { property: "og:title", content: "GL Competition 2023" },
      { property: "og:description", content: "GL Competition 2023の公式ウェブサイトです" },
      { property: "og:image", content: "ogpImage" },
      { property: "og:url", content: "https://www.gl-competition.net/" },
    ],
    script: [
      {
        src: "https://use.typekit.net/nhz2ruy.js",
      },
    ],
  });
  onMounted(() => {
    try {
      // @ts-ignore
      Typekit.load({ async: true });
    } catch (e) {
      console.log(e);
    }
  });
</script>

<style scoped lang="scss">
  main {
    padding-top: $header-height;
  }
</style>
