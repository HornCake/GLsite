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
  $line-dist-pc: 1vw;
  $line-dist-tab: 1.5vw;
  $line-dist-sp: 2vw;
  .gray-lines {
    position: absolute;
    @include pc {
      top: max(15vw, min(25vw, 100svh - 80px - 40vw));
    }
    @include tab {
      top: max(-10vw, 100svh - $header_height - 85vw);
    }
    @include sp {
      top: max(-30vw, 100svh - $header_height - 105vw);
    }
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
        &-1 {
          width: 55vw;
          margin-top: 12vw;
          margin-bottom: $line-dist-pc;
          animation: line-h 2s ease-out 0.5s both;
        }
        &-2 {
          width: 40vw;
          margin-bottom: 11vw;
          animation: line-h 1.8s ease-out 0.7s both;
        }
        &-3 {
          width: 10vw;
          margin-bottom: $line-dist-pc;
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
      @include tab {
        border-bottom: 0.5px solid $gray;
        &-1 {
          width: 70vw;
          margin-top: 25vw;
          margin-bottom: $line-dist-tab;
          animation: line-h 2s ease-out 0.5s both;
        }
        &-2 {
          width: 50vw;
          margin-bottom: 35vw;
          animation: line-h 1.8s ease-out 0.7s both;
        }
        &-3 {
          width: 20vw;
          margin-bottom: $line-dist-tab;
          margin-left: 0.5vw;
          animation: line-h 0.5s ease-out 1s both;
        }
        &-4 {
          width: 20vw;
          margin-bottom: 10vw;
          margin-left: 0.5vw;
          animation: line-h 0.5s ease-out 1.2s both;
        }
      }
      @include sp {
        border-bottom: 0.5px solid $gray;
        &-1 {
          width: 88vw;
          margin-top: 30vw;
          margin-bottom: $line-dist-sp;
          animation: line-h 2s ease-out 0.5s both;
        }
        &-2 {
          width: 70vw;
          margin-bottom: 50vw;
          animation: line-h 1.8s ease-out 0.7s both;
        }
        &-3 {
          width: 20vw;
          margin-bottom: $line-dist-sp;
          margin-left: 0.5vw;
          animation: line-h 0.5s ease-out 1s both;
        }
        &-4 {
          width: 20vw;
          margin-bottom: 10vw;
          margin-left: 0.5vw;
          animation: line-h 0.5s ease-out 1.2s both;
        }
      }
    }
    &-v {
      @include pc {
        border-left: 1px solid $gray;
        &-1 {
          height: 29vw;
          margin-left: 2vw;
          margin-right: $line-dist-pc;
          animation: line-v 1s ease-out both;
        }
        &-2 {
          height: 25vw;
          margin-right: 3vw;
          animation: line-v 1s ease-out 0.2s both;
        }
        &-3 {
          height: 10vw;
          margin-right: $line-dist-pc;
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
      @include tab {
        border-left: 0.5px solid $gray;
        &-1 {
          height: 75vw;
          margin-left: 2vw;
          margin-right: $line-dist-tab;
          animation: line-v 1s ease-out both;
        }
        &-2 {
          height: 60vw;
          margin-right: 8vw;
          animation: line-v 1s ease-out 0.2s both;
        }
        &-3 {
          height: 20vw;
          margin-right: $line-dist-tab;
          animation: line-v 0.5s ease-out 0.5s both;
        }
        &-4 {
          height: 18vw;
          margin-right: 53vw;
          animation: line-v 0.5s ease-out 0.7s both;
        }
        &-5 {
          height: 6vw;
          margin-bottom: 47vw;
          animation: line-v-5 0.3s ease-out 2.2s both;
        }
      }
      @include sp {
        border-left: 0.5px solid $gray;
        &-1 {
          height: 95vw;
          margin-left: 2vw;
          margin-right: $line-dist-sp;
          animation: line-v 1s ease-out both;
        }
        &-2 {
          height: 85vw;
          margin-right: 7vw;
          animation: line-v 1s ease-out 0.2s both;
        }
        &-3 {
          height: 20vw;
          margin-right: $line-dist-sp;
          animation: line-v 0.5s ease-out 0.5s both;
        }
        &-4 {
          height: 16vw;
          margin-right: 70vw;
          animation: line-v 0.5s ease-out 0.7s both;
        }
        &-5 {
          height: 6vw;
          margin-bottom: 62vw;
          animation: line-v-5 0.3s ease-out 2.2s both;
        }
      }
    }
  }
  .logo {
    position: absolute;
    display: block;
    @include pc {
      height: 16vw;
      top: max(11vw, min(21vw, 100svh - $header_height - 44vw));
    }
    @include tab {
      top: max(-7vw, 100svh - $header_height - 82vw);
      height: 22vw;
    }
    @include sp {
      top: max(-28vw, 100svh - $header_height - 103vw);
      height: 28vw;
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
