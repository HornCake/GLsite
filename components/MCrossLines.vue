<template>
  <div class="cross-lines-group cross-lines-1">
    <div class="cross-lines cross-lines-1-1"></div>
  </div>
  <div class="cross-lines-group cross-lines-2">
    <div class="cross-lines cross-lines-2-1"></div>
    <div class="cross-lines cross-lines-2-2"></div>
    <div class="cross-lines cross-lines-2-3"></div>
    <div class="cross-lines cross-lines-2-4"></div>
    <div class="cross-lines cross-lines-2-5"></div>
  </div>
  <div class="cross-lines-group cross-lines-3">
    <div class="cross-lines cross-lines-3-1"></div>
    <div class="cross-lines cross-lines-3-2"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .cross-lines {
    background-image: url("@/assets/images/cross_lines.svg");
    background-repeat: repeat;
    background-size: 4vw 4vw;
    margin: 0;
    &-group {
      position: absolute;
      z-index: 9;
    }
    &-1 {
      top: 0;
      left: 0;
      &-1 {
        width: 38vw;
        height: 16vw;
        background-position: 2vw 0;
      }
    }
    &-2 {
      top: max(3vw, min(13vw, 100svh - 80px - 52vw));
      right: 0;
      > .cross-lines {
        margin-left: auto;
      }
      &-1 {
        width: 22vw;
        height: 24vw;
      }
      &-2 {
        width: 78vw;
        height: 12vw;
      }
      &-3 {
        width: 94vw;
        height: 8vw;
      }
      &-4 {
        width: 70vw;
        height: 12vw;
      }
      &-5 {
        width: 42vw;
        height: 8vw;
      }
    }
    &-3 {
      bottom: 0;
      &-1 {
        width: 20vw;
        height: 4vw;
      }
      &-2 {
        width: 44vw;
        height: 12vw;
      }
    }
  }
</style>
