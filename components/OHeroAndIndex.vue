<template>
  <section class="y-bg no-line">
    <ACrossLines />
    <AWhiteBoxes />
    <MHero />
    <section class="index">
      <AIndex v-for="str in list" :key="str" @click="onClick(str)">{{ str }}</AIndex>
    </section>
    <h1 class="en">GL コンペティション 2023</h1>
  </section>
</template>

<script setup lang="ts">
  const list = ["課題文", "応募要項", "講評者", "審査について", "賞・副賞", "注意事項", "応募", "SNSアカウント", "協賛"];

  const onClick = (str: string) => {
    scrollToEle(str);
  };
</script>

<style scoped lang="scss">
  .y-bg {
    position: relative;
    margin-inline: 0;
    width: 100vw;

    // height: calc(200svh - 80px);
    height: auto;
    background-color: $main;
    overflow: hidden;
  }

  .index {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 18vw;
    z-index: 9;
    @include notsp {
      margin-inline: 6%;
    }
    @include sp {
    }
  }
  h1 {
    margin-bottom: 200px;
  }
</style>
