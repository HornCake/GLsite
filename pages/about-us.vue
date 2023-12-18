<template>
  <article>
    <ADecoration1 class="deco-1" hflip />
    <h1>団体について</h1>
    <section class="no-line">
      <img src="@/assets/images/logo/main.svg" alt="▽Ground Level Logo" />
      <h3>▽Ground Level とは</h3>
      <p>▽Ground Levelは建築を学ぼうと志す全ての学部一年生に対して設計と交流の機会を企画する学生団体です。</p>
      <p>
        大学入学当初、建築に目を輝かせた私たちはここまでで様々な分野の基礎を学んできました。しかし建築を学べば学ぶほど、知れば知るほど募るのが建築設計への憧憬でした。そんな想いを形にすべく立ち上がったのが当団体です。
        建築・建設業界を、そして私たち一人一人の人生を、ひとつの建築物と見立てた時、私たちは今まさにGround Levelに立っています。 ここから、あなたの思い描く未来を建築していきましょう。
      </p>
      <p>代表：圓道龍一</p>

      <NuxtLink class="button" to="/">
        <div class="text">トップページに戻る</div>
      </NuxtLink>
    </section>
    <ADecoration2 class="deco-2" vflip />
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  h1 {
    text-align: center;
    width: max-content;
    &::after {
      content: "";
      display: block;
      background-color: $main;
      margin-inline: auto;
      @include pc {
        width: 100px;
        height: 6px;
        transform: translate(0, 30px);
      }
      @include notpc {
        width: 80px;
        height: 4.5px;
        transform: translate(0, 25px);
      }
    }
    @include pc {
      font-size: 28px;
      margin: 40px auto 120px auto;
    }
    @include notpc {
      font-size: 24px;
      margin: 30px auto 80px auto;
    }
  }
  img {
    display: block;
    width: 80%;
    margin-inline: auto;
    margin-bottom: 100px;
  }
  article {
    position: relative;
  }
  .deco-1 {
    position: absolute;
    right: 0;
    top: 300px;
  }
  .deco-2 {
    position: absolute;
    left: 0;
    bottom: -460px;
  }

  .button {
    cursor: pointer;
    position: relative;
    text-decoration: none;
    display: grid;
    @include pc {
      width: 220px;
      height: 60px;
      margin: 80px auto 50px auto;
      grid-template:
        ". . ." 1fr
        ". text ." auto
        ". . ." 1fr
        "u u u" 3px/
        1fr auto 1fr;
    }
    @include notpc {
      width: 180px;
      height: 50px;
      margin: 50px auto 30px auto;
      grid-template:
        ". . ." 1fr
        ". text ." auto
        ". . ." 1fr
        "u u u" 2px/
        1fr auto 1fr;
    }
    &::after {
      z-index: 1;
      grid-area: u;
      content: "";
      width: 100%;
      height: 100%;
      background-color: $black;
      transform-origin: bottom center;

      transition: transform 0.4s 0.2s;
    }
    > .text {
      z-index: 2;
      grid-area: text;
      line-height: 24px;
      color: $text_black;
      transform-origin: center center;

      transition:
        transform 0.4s,
        color 0.4s;
      font-family: hiragino-kaku-gothic-pron, sans-serif;
      font-weight: 300;
      @include pc {
        font-size: 22px;
      }
      @include notpc {
        font-size: 18px;
      }
    }
    &:hover {
      &::after {
        @include pc {
          transform: scale(1, 20);
        }
        @include notpc {
          transform: scale(1, 25);
        }
        transition: transform 0.4s;
      }
      > .text {
        color: $sub;
        transform: scale(1.05);
        transition:
          transform 0.4s 0.2s,
          color 0.4s 0.2s;
      }
    }
  }
</style>
