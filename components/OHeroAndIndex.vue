<template>
  <section class="hero no-line">
    <div class="boxes">
      <div class="box box1"></div>
      <div class="box box2"></div>
    </div>
    <h1>GL Competition 2023</h1>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .boxes {
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  }
  .box {
    background-color: $white;
    &.box1 {
      width: 30vw;
      height: 6vw;
    }
    &.box2 {
      width: 15vw;
      height: 4vw;
    }
  }

  .hero {
    margin-inline: 0;
    width: 100vw;

    background-color: $main;
    height: 200vh;
  }
</style>
