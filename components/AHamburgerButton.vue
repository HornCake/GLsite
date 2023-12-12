<template>
  <div class="hamburger">
    <div class="line line-1" :class="{ active: active }"></div>
    <div class="line line-2" :class="{ active: active }"></div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    active: boolean;
  }>();
</script>

<style scoped lang="scss">
  .hamburger {
    cursor: pointer;
    position: relative;
    margin-top: calc($header-height / 2 - 15px);
    margin-right: 20px;
    height: 30px;
    width: 30px;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
      > div {
        filter: drop-shadow(0 0 3px rgba($text_white, 0.5));
      }
    }
  }
  .line {
    width: 100%;
    border-bottom: 2px $text_white solid;
    transform-origin: center center;
    &-1 {
      transform: translate(0, 8px);
    }
    &-2 {
      transform: translate(0, 18px);
    }
  }
  .active {
    border-bottom: 2px $sub solid;
    filter: drop-shadow(0 0 5px rgba($sub, 0.5));
  }
</style>
