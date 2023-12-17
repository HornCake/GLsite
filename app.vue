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
