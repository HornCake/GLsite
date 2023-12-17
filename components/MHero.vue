<template>
  <section class="hero">
    <ALogoAndLines />
    <div class="slogan">
      <div class="slogan-1">
        <img class="white" src="@/assets/images/slogan_white_1.svg" alt="スローガンの影" />
        <img src="@/assets/images/slogan_1.svg" alt="スローガン" />
      </div>
      <div class="slogan-2">
        <img class="white" src="@/assets/images/slogan_white_2.svg" alt="スローガンの影" />
        <img src="@/assets/images/slogan_2.svg" alt="スローガン" />
      </div>
    </div>
    <div class="scroll-box"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .hero {
    @include pc {
      // height: max(50vw, min(70vw, 100svh - $header_height + 5vw));
      height: max(60vw, min(70vw, 100svh - $header_height + 5vw));
    }
    @include notpc {
      height: max(98vw, 100svh - $header_height + 23vw);
    }
  }
  .slogan {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    position: absolute;
    z-index: 11;
    > div {
      position: relative;
      &.slogan-1 {
        animation: slogan-1 1s ease-out 2.5s both;
      }
      &.slogan-2 {
        animation: slogan-2 1s ease-out 3s both;
      }
      > img {
        position: absolute;
        &.white {
          animation: slogan-white 0.5s ease-out 3.5s both;
        }
      }
    }
    @include pc {
      right: 16vw;

      top: max(7vw, min(17vw, 100svh - $header_height - 48vw));
      > div {
        width: 13vw;
      }
      > .slogan-2 {
        margin-top: 13vw;
      }
    }
    @include tab {
      right: 10vw;
      top: max(-5vw, 100svh - $header_height - 80vw);
      > div {
        width: 22vw;
      }

      > .slogan-2 {
        margin-top: 22vw;
      }
    }
    @include sp {
      right: 7vw;
      top: max(5vw, 100svh - $header_height - 70vw);
      > div {
        width: 25vw;
      }

      > .slogan-2 {
        margin-top: 12vw;
      }
    }
  }
  .scroll-box {
    position: absolute;
    z-index: 10;
    transform-origin: center;
    opacity: 1;
    box-sizing: border-box;
    animation: scroll-box 1s ease-out 4.5s both;
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      transform-origin: bottom right;
      transform: translate(0, 50%) rotate(45deg);
      animation:
        scroll-arrow 1s ease-out 5.5s both,
        scroll-arrow-loop 2s ease-in-out 6.5s infinite;
    }
    &::after {
      content: "";
      display: block;
      transform-origin: center;
      background-image: url("@/assets/images/scroll.svg");
      background-position: center;
      background-repeat: no-repeat;
      animation: scroll-box 1s ease-out 4.5s both;
    }
    @include pc {
      width: 3vw;
      height: 3vw;
      left: 25vw;
      top: max(45.5vw, min(55.5vw, 100svh - $header_height - 9.5vw));
      border: 0.12vw solid $white;
      &::before {
        border-right: 0.3vw solid $white;
        border-bottom: 0.3vw solid $white;
      }
      &::after {
        margin-left: 4.2vw;
        height: 2.76vw;
        width: 7vw;
      }
    }
    @include notpc {
      width: 8vw;
      height: 8vw;
      left: 30vw;
      top: max(65vw, 100svh - $header_height - 10vw);
      border: 0.3vw solid $white;
      &::before {
        border-right: 0.8vw solid $white;
        border-bottom: 0.8vw solid $white;
      }
      &:after {
        position: absolute;
        top: -8vw;
        left: -3vw;
        height: 8vw;
        width: 14vw;
      }
    }
  }

  .index {
    margin-inline: 30%;
  }
  @keyframes slogan-1 {
    0% {
      opacity: 0;
      transform: translate(0, -3vw);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes slogan-2 {
    0% {
      opacity: 0;
      transform: translate(0, 3vw);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes slogan-white {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    100% {
      opacity: 1;
      transform: translate(1vw, 1vw);
    }
  }
  @keyframes scroll-box {
    0% {
      opacity: 0;
      transform: translate(0, 4vw);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes scroll-arrow {
    0% {
      transform: translate(0, 50%) rotate(45deg) scale(0);
    }
    30% {
      transform: translate(0, 50%) rotate(45deg) scale(1);
    }
    50% {
      transform: translate(0, 50%) rotate(45deg) scale(1);
    }
    100% {
      transform: translate(0, 35%) rotate(45deg) scale(1);
    }
  }
  @keyframes scroll-arrow-loop {
    0% {
      transform: translate(0, 35%) rotate(45deg);
    }
    50% {
      transform: translate(0, 65%) rotate(45deg);
    }
    100% {
      transform: translate(0, 35%) rotate(45deg);
    }
  }
</style>
