<template>
  <div class="button" @click="onClick()">
    <div class="arrow"></div>
    <div class="text">TOP</div>
  </div>
</template>

<script setup lang="ts">
  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
</script>

<style scoped lang="scss">
  .button {
    cursor: pointer;
    position: fixed;
    right: 100px;
    bottom: 50px;
    width: 50px;
    height: 60px;
  }
  .arrow {
    width: 30px;
    height: 30px;
    border-top: 2px solid $black;
    border-left: 2px solid $black;
    box-sizing: border-box;
    transform: translate(10px, 10px) rotate(45deg);
  }
  .text {
    width: 100%;
    text-align: center;
  }
</style>
