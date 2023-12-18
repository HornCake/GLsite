<template>
  <section>
    <AScrollAnchorHeading text="応募" />
    <section>
      <p><NuxtLink to="/" @click="onClick">応募要項</NuxtLink>をご確認の上、下のボタンよりエントリーフォームを記入してください。</p>

      <a class="button" href="https://forms.gle/bad2nVtmEN2JsUZu6" target="_blank" rel="noopener noreferrer">
        <div class="text">応募する</div>
      </a>
    </section>
  </section>
</template>

<script setup lang="ts">
  const onClick = () => {
    scrollToEle("応募要項");
  };
</script>

<style scoped lang="scss">
  p {
    text-align: center;
  }
  .button {
    cursor: pointer;
    position: relative;
    text-decoration: none;
    display: grid;
    @include pc {
      width: 180px;
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
      width: 140px;
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
        font-size: 30px;
      }
      @include notpc {
        font-size: 25px;
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
