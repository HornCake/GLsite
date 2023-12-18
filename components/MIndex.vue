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
    z-index: 9;

    @include pc {
      margin-top: calc(7vw + 60px);
      margin-bottom: 80px;
      margin-inline: max(min(6%, 50% - 350px), 50% - 600px);
    }
    @include notpc {
      margin-top: calc(21vw + 60px);
      margin-bottom: 60px;

      margin-inline: 6%;
    }
  }
</style>
