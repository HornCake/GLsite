<template>
  <div class="button" :class="{ 'is-active': active }">
    <div class="text">{{ text }}</div>
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
    @include pc {
      width: 120px;
      height: 40px;
      grid-template:
        ". . ." 1fr
        ". text ." auto
        ". . ." 1fr
        "u u u" 3px/
        1fr auto 1fr;
    }
    @include notpc {
      width: 100px;
      height: 30px;
      grid-template:
        ". . ." 1fr
        ". text ." auto
        ". . ." 1fr
        "u u u" 2px/
        1fr auto 1fr;
    }
    &::after {
      grid-area: u;
      content: "";
      width: 100%;
      height: 100%;
      transform-origin: top center;
      background-color: $black;
      opacity: 0;
      transition: opacity 0.3s;
    }
    > .text {
      grid-area: text;
      line-height: 24px;
      transform-origin: center bottom;

      transform: scale(0.9);
      transition: transform 0.4s;
      font-family: hiragino-kaku-gothic-pron, sans-serif;
      font-weight: 300;
      @include pc {
        font-size: 24px;
      }
      @include notpc {
        font-size: 20px;
      }
    }
    &.is-active {
      &::after {
        opacity: 1;
      }
      > .text {
        transform: translate(0, -3px) scale(1);
      }
    }
    &:not(.is-active):hover > .text {
      transform: scale(0.95);
    }
  }
</style>
