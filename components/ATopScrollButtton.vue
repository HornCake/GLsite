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
    z-index: 1000;
    width: 50px;
    height: 60px;
    @include pc {
      right: 100px;
      bottom: 50px;
    }
    @include notpc {
      transform-origin: bottom right;
      transform: scale(0.8);

      right: 50px;
      bottom: 30px;
    }
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
