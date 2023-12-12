<template>
  <div v-show="active" class="transparent-back" @click="$emit('close')"></div>
  <nav :class="{ closed: !active }">
    <div class="list">
      <ALinkList v-for="str in list" :key="str" to="/" @click="onClick(str)">{{ str }}</ALinkList>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const props = defineProps<{
    active: boolean;
  }>();

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  const list = ["課題文", "応募要項", "講評者", "審査について", "賞・副賞", "注意事項", "応募", "SNSアカウント", "協賛"];

  const onClick = (str: string) => {
    scrollToEle(str);
  };
</script>

<style scoped lang="scss">
  nav {
    position: absolute;
    top: $header-height;
    right: 0;
    height: calc(100dvh - $header-height);
    background-color: $header_black;
    box-shadow: -5px 0px 10px rgba($black, 0.25);
    transition: transform 0.3s;
    @include pc {
      width: 300px;
    }
    @include sp {
      width: 100vw;
    }
  }
  .closed {
    transform: translate(120%, 0);
  }
  .list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 30px 20%;
    height: calc(100% - 60px);
  }
  .transparent-back {
    position: absolute;
    top: $header-height;
    left: 0;
    width: 100vw;
    height: calc(100dvh - $header-height);
    @include sp {
      display: none;
    }
  }
</style>
