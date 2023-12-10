<template>
  <div class="button" :class="{ 'is-active': active }">
    <span class="text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    text: string;
    active?: boolean;
  }>();
</script>

<style scoped lang="scss">
  .button {
    cursor: pointer;
    display: grid;
    grid-template:
      ". . ." 1fr
      ". text ." auto
      ". . ." 1fr
      "u u u" 3px/
      1fr auto 1fr;
    width: 120px;
    height: 40px;
    &::after {
      grid-area: u;
      content: "";
      width: 100%;
      height: 3px;
      transform-origin: top center;
      transform: scale(0, 1);
      background-color: $black;
      transition: transform 0.4s;
    }
    > .text {
      grid-area: text;
      font-size: 24px;
      line-height: 24px;
      transform: scale(0.9);
      transition: transform 0.4s;
    }
    &.is-active {
      &::after {
        transform: scale(1);
      }
      > .text {
        transform: translate(0, -3px) scale(1);
      }
    }
    &:not(.is-active):hover > .text {
      transform: translate(0, -1px) scale(0.95);
    }
  }
</style>
