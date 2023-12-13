<template>
  <NuxtLink to="/" class="link"><slot /></NuxtLink>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .link {
    text-decoration: none;
    display: block;
    color: $text_white;
    padding-left: 10px;
    transition: color 0.3s;
    @include notsp {
      font-size: 20px;
      height: 30px;
      line-height: 30px;
    }
    @include sp {
      font-size: 16px;
      height: 26px;
      line-height: 26px;
    }

    &::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: $text_white;
      transform: translate(-10px, -4px);
      transition:
        background-color 0.3s,
        transform 0.3s;
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      border-bottom: 0.1px solid $text_white;
      transform-origin: left center;
      transition: transform 0.3s;
      @include notsp {
        transform: scale(0, 1);
      }
    }
    &:hover {
      color: $sub;
      &::before {
        transform: translate(-10px, -4px) rotate(45deg);
        background-color: $main;
      }
      &::after {
        transform: scale(1);
      }
    }
  }
</style>
