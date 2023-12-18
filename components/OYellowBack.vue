<template>
  <section class="y-bg no-line">
    <ACrossLines />
    <AWhiteBoxes />
    <MHero />
    <MIndex />
    <MNotification />
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
    width: 100%;

    // height: calc(200svh - 80px);
    height: auto;
    background-color: $main;
    overflow: hidden;
  }

  h1 {
    width: max-content;
    font-family: futura-pt, dnp-shuei-gothic-kin-std, sans-serif;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: $white;
    text-shadow: 0px 5px 5px rgba($black, 0.15);
    @include pc {
      font-size: 70px;
      margin: 0 auto 14vw auto;
    }
    @include tab {
      font-size: 45px;
      margin: 0 auto 30vw auto;
    }
    @include sp {
      font-size: 25px;
      margin: 0 auto 30vw auto;
    }
  }
</style>
