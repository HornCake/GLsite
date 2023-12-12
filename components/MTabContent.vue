<template>
  <section>
    <div class="tab-wrapper">
      <ATabButton v-for="i in 2" :key="i" :text="text[i - 1]" :active="selected === i - 1" @click="onClick(i - 1)" />
    </div>
    <div class="content-wrapper" ref="wrapper" @scroll="onScroll()">
      <div class="content first" :class="{ invisible: selected === 1 }">
        <slot name="first" />
      </div>
      <div class="content" :class="{ invisible: selected === 0 }">
        <slot name="second" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const text = ref(["一次審査", "二次審査"]);
  const isActive = ref([true, false]);
  const selected = ref(0);

  const wrapper = ref<HTMLElement | null>(null);

  const onClick = (index: number) => {
    wrapper.value?.scrollTo({ left: index * wrapper.value.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const index = Math.round(wrapper.value!.scrollLeft / wrapper.value!.clientWidth);
    selected.value = index;
  };
</script>

<style scoped lang="scss">
  .tab-wrapper {
    display: flex;
    justify-content: space-around;
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    overflow: auto;
    scroll-snap-type: both mandatory;
    // Firefoxへの対応
    scrollbar-width: none;
    //  Google Chrome、Safariへの対応
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .content {
    width: 100%;
    min-width: 100%;
    scroll-snap-align: start;
    opacity: 100%;
    transition: opacity 0.2s;
    &.invisible {
      opacity: 0%;
    }
  }
</style>
