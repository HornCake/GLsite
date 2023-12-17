<template>
  <footer>© 2023 Ground Level</footer>
</template>

<script setup lang="ts">
  const menuActive = ref(false);

  const toggle = () => {
    menuActive.value = !menuActive.value;
  };
</script>

<style scoped lang="scss">
  footer {
    height: 30px;
    background-color: $header_black;
    color: $text_white;
    font-family: futura-pt, dnp-shuei-gothic-kin-std, sans-serif;
    text-align: center;
    padding-top: 7px;
  }
</style>
