<template>
  <section class="notifications no-line">
    <h2>お知らせ</h2>
    <section>
      <ANotification v-for="n in notifications" :key="n.content" :date="n.date" :content="n.content" />
    </section>
  </section>
</template>

<script setup lang="ts">
  type Notification = {
    date: string;
    content: string;
  };
  const notifications = [
    {
      date: "2023.12.18",
      content: "ウェブサイトを公開しました。",
    },
  ];
</script>

<style scoped lang="scss">
  .notifications {
    position: relative;
    margin-bottom: 14vw;
    z-index: 9;
  }
  h2 {
    &::after {
      background-color: $white;
      box-shadow: 0px 3px 10px rgba($black, 0.15);
    }
  }
</style>
