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
    margin: 0;
    @include pc {
      background-size: 4vw 4vw;
    }
    @include notpc {
      background-size: 8vw 8vw;
    }
    &-group {
      position: absolute;
      z-index: 8;
    }
    &-1 {
      top: 0;
      left: 0;
      @include pc {
        &-1 {
          width: 38vw;
          height: 16vw;
          background-position: 2vw 0;
        }
      }
      @include notpc {
        &-1 {
          width: 50vw;
          height: 32vw;
          background-position: 2vw 0;
        }
      }
    }
    &-2 {
      right: 0;
      > .cross-lines {
        margin-left: auto;
      }
      @include pc {
        top: max(3vw, min(13vw, 100svh - $header_height - 52vw));
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
      @include notpc {
        top: max(-25vw, 100svh - $header_height - 100vw);
        &-1 {
          width: 24vw;
          height: 64vw;
        }
        &-2 {
          width: 80vw;
          height: 16vw;
        }
        &-3 {
          width: 96vw;
          height: 24vw;
        }
        &-4 {
          width: 64vw;
          height: 24vw;
        }
        &-5 {
          width: 40vw;
          height: 16vw;
        }
      }
    }
    &-3 {
      bottom: 0;
      @include pc {
        &-1 {
          width: 20vw;
          height: 4vw;
        }
        &-2 {
          width: 44vw;
          height: 12vw;
        }
      }
      @include notpc {
        &-1 {
          width: 24vw;
          height: 8vw;
        }
        &-2 {
          width: 48vw;
          height: 24vw;
        }
      }
    }
  }
</style>
