<template>
  <div class="box-group box-t">
    <div class="box-t-l">
      <div class="box box-t-l-1"></div>
      <div class="box box-t-l-2"></div>
    </div>
    <div class="box-t-r">
      <div class="box box-t-r-1"></div>
      <div class="box box-t-r-2"></div>
    </div>
  </div>
  <div class="box-group box-m">
    <div class="box-m-l">
      <div class="box box-m-l-1"></div>
      <div class="box box-m-l-2"></div>
    </div>
    <div class="box-m-r-b">
      <div class="box box-m-r-b-1"></div>
    </div>
    <div class="box-m-r">
      <div class="box box-m-r-1"></div>
      <div class="box box-m-r-2"></div>
      <div class="box box-m-r-3"></div>
      <div class="box box-m-r-4"></div>
    </div>
  </div>
  <div class="box-group box-b">
    <div class="box-b-l">
      <div class="box box-b-l-1"></div>
      <div class="box box-b-l-2"></div>
      <div class="box box-b-l-3"></div>
    </div>
    <div class="box-b-r">
      <div class="box box-b-r-1"></div>
      <div class="box box-b-r-2"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .box {
    background-color: $background;
    margin: 0;
    border: 1px solid $background;
    box-sizing: border-box;
    &-group {
      position: absolute;
      width: 100vw;
      > div {
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
        position: absolute;
        z-index: 10;
      }
    }
    &-t {
      @include pc {
        &-l {
          top: 0;
          left: 0;
          &-1 {
            width: 30vw;
            height: 7vw;
          }
          &-2 {
            width: 15vw;
            height: 4vw;
          }
        }
        &-r {
          top: 0;
          right: 30vw;
          &-1 {
            width: 10vw;
            height: 7vw;
          }
          &-2 {
            margin-left: auto;
            width: 5vw;
            height: 12vw;
          }
        }
      }
      @include notpc {
        &-l {
          top: 0;
          left: 0;
          &-1 {
            width: 40vw;
            height: 14vw;
          }
          &-2 {
            width: 20vw;
            height: 8vw;
          }
        }
        &-r {
          top: 0;
          right: 20vw;
          &-1 {
            width: 10vw;
            height: 14vw;
          }
          &-2 {
            margin-left: auto;
            width: 5vw;
            height: 24vw;
          }
        }
      }
    }
    &-m {
      position: absolute;
      @include pc {
        top: max(8vw, min(18vw, 100svh - $header_height - 47vw));
        &-l {
          top: 36vw;
          left: 0;
          &-1 {
            width: 10vw;
            height: 6vw;
          }
          &-2 {
            width: 8vw;
            height: 8vw;
          }
        }
        &-r {
          top: 28vw;
          right: 0;
          &-1 {
            width: 32vw;
            height: 6vw;
            margin-left: auto;
          }
          &-2 {
            width: 50vw;
            height: 8vw;
            margin-left: auto;
          }
          &-3 {
            width: 28vw;
            height: 8vw;
            margin-left: auto;
          }
          &-4 {
            width: 12vw;
            height: 2vw;
            margin-left: auto;
          }
          &-b {
            top: 0;
            right: 0;
            &-1 {
              width: 10vw;
              height: 40vw;
              margin-left: auto;
            }
          }
        }
      }
      @include notpc {
        top: max(-10vw, 100svh - $header_height - 85vw);
        &-l {
          top: 75vw;
          left: 0;
          &-1 {
            width: 20vw;
            height: 12vw;
          }
          &-2 {
            width: 16vw;
            height: 16vw;
          }
        }
        &-r {
          top: 60vw;
          right: 0;
          &-1 {
            width: 32vw;
            height: 12vw;
            margin-left: auto;
          }
          &-2 {
            width: 50vw;
            height: 16vw;
            margin-left: auto;
          }
          &-3 {
            width: 28vw;
            height: 16vw;
            margin-left: auto;
          }
          &-4 {
            width: 12vw;
            height: 4vw;
            margin-left: auto;
          }
          &-b {
            top: 0;
            right: 0;
            &-1 {
              width: 10vw;
              height: 80vw;
              margin-left: auto;
            }
          }
        }
      }
    }
    &-b {
      position: absolute;
      bottom: 0;
      @include pc {
        &-l {
          bottom: 0;
          left: 0;
          &-1 {
            width: 7vw;
            height: 3.5vw;
          }
          &-2 {
            width: 18vw;
            height: 2.5vw;
          }
          &-3 {
            width: 25vw;
            height: 3vw;
          }
        }
        &-r {
          > .box {
            margin-left: auto;
          }
          bottom: 0;
          right: 0;
          &-1 {
            width: 7vw;
            height: 3.5vw;
          }
          &-2 {
            width: 25vw;
            height: 3.5vw;
          }
        }
      }
      @include notpc {
        &-l {
          bottom: 0;
          left: 0;
          &-1 {
            width: 7vw;
            height: 7vw;
          }
          &-2 {
            width: 18vw;
            height: 5vw;
          }
          &-3 {
            width: 25vw;
            height: 6vw;
          }
        }
        &-r {
          > .box {
            margin-left: auto;
          }
          bottom: 0;
          right: 0;
          &-1 {
            width: 7vw;
            height: 7vw;
          }
          &-2 {
            width: 25vw;
            height: 7vw;
          }
        }
      }
    }
  }
</style>
