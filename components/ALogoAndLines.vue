<template>
  <div class="gray-lines">
    <div class="lines-h">
      <div class="line-h line-h-1"></div>
      <div class="line-h line-h-2"></div>
      <div class="line-h line-h-3"></div>
      <div class="line-h line-h-4"></div>
    </div>
    <div class="lines-v">
      <div class="line-v line-v-1"></div>
      <div class="line-v line-v-2"></div>
      <div class="line-v line-v-3"></div>
      <div class="line-v line-v-4"></div>
      <div class="line-v line-v-5"></div>
    </div>
  </div>
  <img class="logo yellow" src="@/assets/images/logo/yellow.svg" alt="ロゴ" />
  <img class="logo gray" src="@/assets/images/logo/gray.svg" alt="ロゴ" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  $line-dist: 1vw;
  .gray-lines {
    position: absolute;
    top: max(15vw, min(25vw, 100svh - 80px - 40vw));
  }

  .line {
    &s-h {
      position: absolute;
      display: flex;
      flex-direction: column;
      z-index: 9;
    }
    &s-v {
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      z-index: 9;
    }
    &-h {
      @include pc {
        border-bottom: 1px solid $gray;
      }
      @include notpc {
        border-bottom: 0.5px solid $gray;
      }
      &-1 {
        width: 55vw;
        margin-top: 12vw;
        margin-bottom: $line-dist;
        animation: line-h 2s ease-out 0.5s both;
      }
      &-2 {
        width: 40vw;
        margin-bottom: 11vw;
        animation: line-h 1.8s ease-out 0.7s both;
      }
      &-3 {
        width: 10vw;
        margin-bottom: $line-dist;
        margin-left: 0.5vw;
        animation: line-h 0.5s ease-out 1s both;
      }
      &-4 {
        width: 10vw;
        margin-bottom: 10vw;
        margin-left: 0.5vw;
        animation: line-h 0.5s ease-out 1.2s both;
      }
    }
    &-v {
      @include pc {
        border-left: 1px solid $gray;
      }
      @include notpc {
        border-left: 0.5px solid $gray;
      }
      &-1 {
        height: 29vw;
        margin-left: 2vw;
        margin-right: $line-dist;
        animation: line-v 1s ease-out both;
      }
      &-2 {
        height: 25vw;
        margin-right: 3vw;
        animation: line-v 1s ease-out 0.2s both;
      }
      &-3 {
        height: 10vw;
        margin-right: $line-dist;
        animation: line-v 0.5s ease-out 0.5s both;
      }
      &-4 {
        height: 9vw;
        margin-right: 46vw;
        animation: line-v 0.5s ease-out 0.7s both;
      }
      &-5 {
        height: 6vw;
        margin-bottom: 14vw;
        animation: line-v-5 0.3s ease-out 2.2s both;
      }
    }
  }
  .logo {
    position: absolute;
    display: block;
    top: max(11vw, min(21vw, 100svh - 80px - 44vw));
    @include pc {
      height: 16vw;
    }
    @include notpc {
      height: 16vw;
    }
    &.gray {
      z-index: 11;
      // transform: translate(10vw, 0);
      animation: logo 1.5s ease-in-out 0.5s both;
    }
    &.yellow {
      z-index: 10;
      left: 2vw;
      animation: logo 1.5s ease-in-out 0.7s both;
    }
  }

  @keyframes line-h {
    0% {
      transform-origin: left;
      transform: scale(0, 1);
    }
    100% {
      transform-origin: left;
      transform: scale(1);
    }
  }
  @keyframes line-v {
    0% {
      transform-origin: bottom;
      transform: scale(1, 0);
    }
    100% {
      transform-origin: bottom;
      transform: scale(1);
    }
  }
  @keyframes line-v-5 {
    0% {
      transform-origin: center;
      transform: scale(1, 0);
    }
    100% {
      transform-origin: left;
      transform: scale(1);
    }
  }
  @keyframes logo {
    0% {
      opacity: 0;
      transform: translate(3vw, 0);
    }
    100% {
      opacity: 1;
      transform: translate(10vw, 0);
    }
  }
</style>
