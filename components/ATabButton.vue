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
      transform: scale(0, 1);
      background-color: $black;
      transition: transform 0.3s;
    }
    > .text {
      grid-area: text;
      line-height: 24px;
      transform: scale(0.9);
      transition: transform 0.4s;

      @include pc {
        font-size: 24px;
      }
      @include notpc {
        font-size: 20px;
      }
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
