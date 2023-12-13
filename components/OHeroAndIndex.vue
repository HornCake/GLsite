<template>
  <section class="y-bg no-line">
    <div class="slogan">叫べ、一年。</div>
    <ACrossLines />
    <AWhiteBoxes />

    <section class="hero"></section>
    <h1 class="en">GL Competition 2023</h1>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .y-bg {
    position: relative;
    margin-inline: 0;
    width: 100vw;

    height: calc(200svh - 80px);
    background-color: $main;
    overflow: hidden;
  }
  .hero {
    height: calc(100svh - 80px);
  }
  .slogan {
    position: absolute;
    z-index: 11;
    top: max(29vw, min(39vw, 100svh - 80px - 26vw));
    right: 6vw;
    font-size: 120px;
    font-weight: 500;
  }
</style>
