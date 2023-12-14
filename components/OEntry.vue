<template>
  <section>
    <AScrollAnchorHeading text="応募" />
    <section>
      <p><NuxtLink to="/" @click="onClick">応募要項</NuxtLink>をご確認の上、下のボタンよりエントリーフォームを記入してください。</p>
    </section>
  </section>
</template>

<script setup lang="ts">
  const onClick = () => {
    scrollToEle("応募要項");
  };
</script>

<style scoped lang="scss">
  p {
    text-align: center;
  }
</style>
