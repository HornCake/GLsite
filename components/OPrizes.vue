<template>
  <section>
    <AScrollAnchorHeading text="賞・副賞" />
    <section>
      <div class="prizes">
        <div v-for="prize in prizes" :key="prize.name" class="prize">
          <div>
            <h3>{{ prize.name }}</h3>
            <p>賞金{{ prize.money }}万円</p>
            <p class="limit">{{ prize.limit }}組</p>
          </div>
        </div>
      </div>
      <p class="note">審査委員の判断で上記賞金金額の配分を変える場合があります。</p>
      <p class="note">金額はすべて税込み。</p>
    </section>
  </section>
</template>

<script setup lang="ts">
  const prizes = [
    { name: "最優秀賞", money: "10", limit: 1 },
    { name: "優秀賞", money: "5", limit: 3 },
    { name: "佳作", money: "1", limit: 5 },
  ];
</script>

<style scoped lang="scss">
  .prizes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 60px;
    @include pc {
      margin-left: -5%;
      width: 110%;
    }
    @include sp {
      width: 100%;
    }
  }
  .prize {
    display: grid;
    grid-template: ". content ." / 1fr auto 1fr;
    width: 150px;
    @include pc {
      margin-bottom: 60px;
    }
    @include notpc {
      margin-bottom: 40px;
    }
    > div {
      grid-area: content;
      > h3 {
        margin-top: 0;
      }
      > .limit {
        margin-left: 35px;
      }
    }
  }
</style>
