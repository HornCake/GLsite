<template>
  <section>
    <AScrollAnchorHeading text="協賛" />
    <section class="imgs">
      <div class="img" v-for="i in 4" :key="i"></div>
    </section>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .imgs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .img {
    width: 25vw;
    height: 20vw;
    background-color: $gray_light;
    margin-inline: 1vw;
    margin-bottom: 5vw;
  }
</style>
