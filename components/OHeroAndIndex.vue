<template>
  <section class="y-bg no-line">
    <ACrossLines />
    <AWhiteBoxes />
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
    <!-- <div class="slogan">叫べ、一年。</div> -->

    <section class="hero"></section>
    <h1 class="en">GL コンペティション 2023</h1>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .y-bg {
    position: relative;
    margin-inline: 0;
    width: 100vw;

    height: calc(200svh - 80px);
    background-color: $main;
    overflow: hidden;
  }
  .hero {
    height: calc(100svh - 80px);
  }
  .slogan {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    position: absolute;
    z-index: 11;
    top: max(7vw, min(17vw, 100svh - 80px - 48vw));
    right: 16vw;
    > div {
      position: relative;
      width: 13vw;
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
    > .slogan-2 {
      margin-top: 13vw;
    }
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
</style>
