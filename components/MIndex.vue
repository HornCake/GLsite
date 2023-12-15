<template>
  <section class="index">
    <AIndex v-for="str in list" :key="str" @click="onClick(str)">{{ str }}</AIndex>
  </section>
</template>

<script setup lang="ts">
  const list = ["課題文", "応募要項", "審査委員", "審査について", "賞・副賞", "注意事項", "応募", "SNSアカウント", "協賛"];

  const onClick = (str: string) => {
    scrollToEle(str);
  };
</script>

<style scoped lang="scss">
  .index {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 18vw;
    margin-bottom: 7vw;

    z-index: 9;
    @include notsp {
      margin-inline: 6%;
    }
  }
</style>
