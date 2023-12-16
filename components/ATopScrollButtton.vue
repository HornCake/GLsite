<template>
  <div class="button" @click="onClick()" :class="{ 'is-invisible': isInvisible, none: isNone }">
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

  const isInvisible = ref(true);
  const isNone = ref(true);

  onMounted(() => {
    document.addEventListener("scroll", (e: Event) => {
      if (window.scrollY < window.innerHeight / 2) {
        if (isInvisible.value) return;
        setTimeout(() => {
          isNone.value = true;
        }, 300);
        isInvisible.value = true;
      } else {
        if (!isNone.value) return;
        setTimeout(() => {
          isInvisible.value = false;
        }, 10);
        isNone.value = false;
      }
    });
  });
</script>

<style scoped lang="scss">
  .button {
    cursor: pointer;
    position: fixed;
    z-index: 1000;
    width: 50px;
    height: 60px;
    opacity: 1;
    transition: opacity 0.3s;
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
    &.is-invisible {
      opacity: 0;
    }
    &.none {
      display: none;
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
    color: $black;
  }
</style>
