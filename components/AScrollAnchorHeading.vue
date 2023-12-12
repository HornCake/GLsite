<template>
  <h2 ref="heading">{{ text }}</h2>
</template>

<script setup lang="ts">
  const props = defineProps<{
    text: string;
  }>();
  const heading = ref<HTMLElement | null>(null);
  onMounted(() => {
    setScrollData(props.text, heading.value);
  });
</script>

<style scoped lang="scss"></style>
