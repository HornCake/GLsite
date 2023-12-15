<template>
  <div class="deco1" :class="{ 'v-flip': vflip, 'h-flip': hflip }">
    <div class="cross-line"></div>
    <div class="boxes">
      <div class="box box-1-1"></div>
      <div class="box box-1-2"></div>
      <div class="box box-1-3"></div>
      <div class="box box-1-4"></div>
      <div class="box box-1-5"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    vflip?: boolean;
    hflip?: boolean;
  }>();
</script>

<style scoped lang="scss">
  .deco1 {
    position: absolute;
    width: 300px;
    height: 320px;
    width: 100%;
    background-color: $main;
    clip-path: polygon(0 10px, 200px 10px, 200px 110px, 270px 110px, 270px 210px, 160px 210px, 160px 310px, 0 310px);
    @include notpc {
      display: none;
    }
    &:not(.v-flip):not(.h-flip) {
      transform: translate(0, -340px);
      left: min(0px, max(min(20%, 50% - 350px), 50% - 500px) - 350px);
    }
    &.v-flip.h-flip {
      transform: translate(0, -340px) scale(-1, -1);
      right: min(0px, max(min(20%, 50% - 350px), 50% - 500px) - 350px);
    }
    &:not(.v-flip).h-flip {
      transform: translate(0, -340px) scale(1, -1);
      left: min(0px, max(min(20%, 50% - 350px), 50% - 500px) - 350px);
    }
    &:not(.h-flip).v-flip {
      transform: translate(0, -340px) scale(-1, 1);
      right: min(0px, max(min(20%, 50% - 350px), 50% - 500px) - 350px);
    }
  }
  .cross-line {
    position: absolute;
    left: 100px;
    width: 220px;
    height: 100%;
    background-image: url("@/assets/images/cross_lines.svg");
    background-repeat: repeat;
    background-size: 4vw 4vw;
    margin: 0;
  }
  .boxes {
    width: 300px;
    height: 320px;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  }
  .box {
    background-color: $background;
    margin-left: auto;
    &-1 {
      &-1 {
        width: 300px;
        height: 10px;
      }
      &-2 {
        width: 100px;
        height: 100px;
      }
      &-3 {
        width: 30px;
        height: 100px;
      }
      &-4 {
        width: 140px;
        height: 100px;
      }
      &-5 {
        width: 300px;
        height: 10px;
      }
    }
  }
</style>
