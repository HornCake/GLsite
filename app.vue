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
  });
</script>

<style scoped lang="scss">
  main {
    padding-top: $header-height;
  }
</style>
