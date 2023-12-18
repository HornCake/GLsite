<template>
  <div>
    <OHeader />
    <main>
      <article>
        <div class="group">
          <div class="bg">
            <div class="lines">
              <div class="cross-line cross-line-1"></div>
              <div class="cross-line cross-line-2"></div>
            </div>
            <div class="error">ERROR</div>
            <NuxtLink href="/" class="button">トップに戻る</NuxtLink>
          </div>
          <div class="boxes">
            <div class="box box-1"></div>
            <div class="box box-2"></div>
            <div class="box box-3"></div>
            <div class="box box-4"></div>
            <div class="box box-5"></div>
            <div class="box box-6"></div>
            <div class="box box-7"></div>
            <div class="box box-8"></div>
            <div class="box box-9"></div>
            <div class="box box-10"></div>
            <div class="box box-11"></div>
            <div class="box box-12"></div>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
  useHead({
    script: [
      {
        src: "https://use.typekit.net/nhz2ruy.js",
      },
    ],
  });
  onMounted(() => {
    try {
      // @ts-ignore
      Typekit.load({ async: true });
    } catch (e) {
      console.log(e);
    }
  });
</script>

<style scoped lang="scss">
  article {
    display: grid;
    place-items: center;
    position: relative;
    padding-top: $header-height;
    height: calc(100svh - $header-height);
    overflow: hidden;
  }
  .error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: bold;
    color: $text_yellow;
  }
  .group {
    position: relative;
    @include pc {
      width: 70vw;
      height: 70svh;
    }
    @include notpc {
      width: 100vw;
      height: 70svh;
    }
    clip-path: polygon(20% 5%, 20% 19%, 12% 19%, 12% 43%, 15% 43%, 15% 55%, 7% 55%, 7% 77%, 24% 77%, 24% 90%, 76% 90%, 76% 83%, 86% 83%, 86% 62%, 92% 62%, 92% 41%, 83% 41%, 83% 19%, 80% 19%, 80% 5%);
  }
  .boxes {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 0px 10px rgba($black, 0.15));
  }
  .bg {
    display: grid;
    place-items: center;
    grid-template:
      "." 1fr
      "error" 4fr
      "button" 4fr
      "." 1fr
      /1fr;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $main;
  }
  .error {
    grid-area: error;
    font-family: futura-pt, dnp-shuei-gothic-kin-std, sans-serif;
    font-weight: 700;
    color: $text_yellow;
    text-shadow: 0px 5px 5px rgba($black, 0.1);
    @include pc {
      font-size: 70px;
    }
    @include notpc {
      font-size: 50px;
    }
  }
  .button {
    position: relative;
    cursor: pointer;
    position: relative;
    z-index: 9;
    padding: 15px 30px;
    grid-area: button;
    font-family: hiragino-kaku-gothic-pron, sans-serif;
    font-weight: 700;
    color: $text_black;
    background-color: $background;
    box-shadow: 0px 5px 5px rgba($black, 0.1);
    transform: translate(0, -5px);
    text-decoration: none;
    transition:
      transform 0.4s,
      box-shadow 0.4s,
      color 0.4s,
      background-color 0.4s 0.2s;

    @include pc {
      font-size: 30px;
    }
    @include notpc {
      font-size: 20px;
    }
    &:hover {
      transform: translate(0, 0);
      color: $text_white;
      background-color: $header_black;
      box-shadow: none;
      transition:
        transform 0.4s,
        box-shadow 0.4s,
        color 0.4s 0.2s,
        background-color 0.4s;
    }
  }
  .lines {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .cross-line {
    position: absolute;
    background-image: url("@/assets/images/cross_lines.svg");
    background-repeat: repeat;
    margin: 0;
    @include pc {
      background-size: 4vw 4vw;
      &-1 {
        width: 28vw;
        height: 20vw;
      }
      &-2 {
        bottom: 0;
        right: 0;
        width: 32vw;
        height: 16vw;
      }
    }
    @include notpc {
      background-size: 8vw 8vw;

      &-1 {
        width: 32vw;
        height: 32vw;
      }
      &-2 {
        bottom: 0;
        right: 0;
        width: 32vw;
        height: 36vw;
      }
    }
  }
  .box {
    position: absolute;
    background-color: $background;
    &-1 {
      width: 100%;
      height: 5%;
    }
    &-2 {
      width: 100%;
      height: 5%;
      bottom: 0;
    }
    &-3 {
      width: 20%;
      height: 14%;
      top: 5%;
    }
    &-4 {
      width: 12%;
      height: 24%;
      top: 19%;
    }
    &-5 {
      width: 15%;
      height: 12%;
      top: 43%;
    }
    &-6 {
      width: 7%;
      height: 22%;
      top: 55%;
    }
    &-7 {
      width: 24%;
      height: 18%;
      top: 77%;
    }
    &-8 {
      width: 20%;
      height: 14%;
      top: 5%;
      right: 0;
    }
    &-9 {
      width: 17%;
      height: 22%;
      top: 19%;
      right: 0;
    }
    &-10 {
      width: 8%;
      height: 21%;
      top: 41%;
      right: 0;
    }
    &-11 {
      width: 14%;
      height: 21%;
      top: 62%;
      right: 0;
    }
    &-12 {
      width: 24%;
      height: 12%;
      top: 83%;
      right: 0;
    }
  }
</style>
