<template>
  <section>
    <AScrollAnchorHeading text="審査委員" />
    <MTabContent>
      <template #first>
        <AJudge v-for="judge in judges1" :key="judge.name" :judge="judge" />
      </template>
      <template #second>
        <AJudge v-for="judge in judges2" :key="judge.name" :judge="judge" />
      </template>
    </MTabContent>
  </section>
</template>

<script setup lang="ts">
  const judges1 = [
    {
      image: "ishigami.png",
      name: "石上純也",
      post: "審査委員",
      desc: ["建築家", "石上純也建築設計事務所主宰"],
    },
    {
      image: "kosaka.png",
      name: "小阪淳",
      post: "審査委員",
      desc: ["美術家", "早稲田大学非常勤講師"],
    },
    {
      image: "suemitsu.png",
      name: "末光弘和",
      post: "審査委員",
      desc: ["建築家", "SUEP.共同主宰", "九州大学大学院准教授"],
    },
    {
      image: "hayano.png",
      name: "早野洋介",
      post: "審査委員",
      desc: ["建築家", "MADアーキテクツ共同主宰"],
    },
    {
      image: "fujimura.png",
      name: "藤村龍至",
      post: "審査委員",
      desc: ["建築家", "RFA主宰", "東京藝術大学建築科准教授"],
    },
  ];
  const judges2 = [
    {
      image: "ishigami.png",
      name: "石上純也",
      post: "審査委員長",
      desc: ["建築家", "石上純也建築設計事務所主宰"],
    },
    {
      image: "kosaka.png",
      name: "小阪淳",
      post: "審査委員",
      desc: ["美術家", "早稲田大学非常勤講師"],
    },
    {
      image: "suemitsu.png",
      name: "末光弘和",
      post: "審査委員",
      desc: ["建築家", "SUEP.共同主宰", "九州大学大学院准教授"],
    },
    {
      image: "hayano.png",
      name: "早野洋介",
      post: "審査委員",
      desc: ["建築家", "MADアーキテクツ共同主宰"],
    },
    {
      image: "fujimura.png",
      name: "藤村龍至",
      post: "審査委員",
      desc: ["建築家", "RFA主宰", "東京藝術大学建築科准教授"],
    },
  ];
</script>

<style scoped lang="scss">
  img {
    height: 300px;
  }
</style>
