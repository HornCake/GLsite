<template>
  <article>
    <h1>団体について</h1>
    <section class="no-line">
      <ADecoration1 class="deco-1" />
      <h3>▽Ground Level とは</h3>
      <p>▽Ground Levelは建築を学ぼうと志す全ての学部一年生に対して設計と交流の機会を企画する学生団体です。</p>
      <p>
        大学入学当初、建築に目を輝かせた私たちはここまでで様々な分野の基礎を学んできました。しかし建築を学べば学ぶほど、知れば知るほど募るのが建築設計への憧憬でした。そんな想いを形にすべく立ち上がったのが当団体です。
        建築・建設業界を、そして私たち一人一人の人生を、ひとつの建築物と見立てた時、私たちは今まさにGround Levelに立っています。 ここから、あなたの思い描く未来を建築していきましょう。
      </p>
      <p>代表：圓道龍一</p>
      <ADecoration2 class="deco-2" />
    </section>
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
  .deco-1 {
    position: absolute;
    right: 0;
    top: 100px;
    transform: translate(0px, 340px);
  }
  .deco-2 {
    transform: translate(0, 340px);
  }
</style>
