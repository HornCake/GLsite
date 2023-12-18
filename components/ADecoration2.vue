<template>
  <div class="deco" :class="{ 'v-flip': vflip, 'h-flip': hflip }">
    <div class="cross-line"></div>
    <div class="boxes">
      <div class="box box-2-1"></div>
      <div class="box box-2-2"></div>
      <div class="box box-2-3"></div>
      <div class="box box-2-4"></div>
      <div class="box box-2-5"></div>
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
  .deco {
    position: absolute;
    width: 300px;
    height: 320px;
    width: 100%;
    background-color: $main;
    clip-path: polygon(0 10px, 210px 10px, 210px 80px, 260px 80px, 260px 210px, 140px 210px, 140px 310px, 0 310px);
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
      transform: translate(0, -340px) scale(-1, 1);
      right: min(0px, max(min(20%, 50% - 350px), 50% - 500px) - 350px);
    }
    &:not(.h-flip).v-flip {
      transform: translate(0, -340px) scale(1, -1);
      left: min(0px, max(min(20%, 50% - 350px), 50% - 500px) - 350px);
    }
  }
  .cross-line {
    position: absolute;
    left: 90px;
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
    &-2 {
      &-1 {
        width: 300px;
        height: 10px;
      }
      &-2 {
        width: 90px;
        height: 70px;
      }
      &-3 {
        width: 40px;
        height: 130px;
      }
      &-4 {
        width: 160px;
        height: 100px;
      }
      &-5 {
        width: 300px;
        height: 10px;
      }
    }
  }
</style>
