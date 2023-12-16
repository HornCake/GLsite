<template>
  <div class="notification">
    <div class="date">{{ date }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    date: string;
    content: string;
  }>();
</script>

<style scoped lang="scss">
  .notification {
    display: grid;
    grid-template:
      ". date content ." auto
      "u u u u" 0.5px
      / 5% 3fr 7fr 5%;
    width: min(90%, 800px);
    margin-inline: auto;
    color: $text_black;
    font-family: "fot-tsukuardgothic-std", sans-serif;
    font-weight: 400;
    font-style: normal;
    @include pc {
      font-size: 18px;
      margin-bottom: 60px;
    }
    @include tab {
      font-size: 16px;
      margin-bottom: 45px;
    }
    @include sp {
      font-size: 12px;
      margin-bottom: 30px;
    }
    &::after {
      content: "";
      grid-area: u;
      border-bottom: 0.5px solid $gray;
      width: 100%;
    }
  }
  .date {
    position: relative;
    grid-area: date;
    text-align: center;
    &::before {
      content: "";
      position: absolute;
      display: block;
      border-right: 0.5px solid $gray;
      @include pc {
        height: calc(100% + 60px);
      }
      @include tab {
        height: calc(100% + 45px);
      }
      @include sp {
        height: calc(100% + 30px);
      }
    }
    &::after {
      content: "";
      position: absolute;
      right: 0;
      display: block;
      border-right: 0.5px solid $gray;
      @include pc {
        height: calc(100% + 15px);
        transform: translate(0, -20px);
      }
      @include tab {
        height: calc(100% + 7.5px);
        transform: translate(0, -15px);
      }
      @include sp {
        height: 100%;
        transform: translate(0, -10px);
      }
    }
  }
  .content {
    position: relative;
    width: 90%;
    margin-left: 10%;
    grid-area: content;
    // line-height: 45px;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      display: block;
      border-right: 0.1px solid $gray;
      @include pc {
        height: calc(100% + 60px);
        transform: translate(0, calc(-100% + 60px));
      }
      @include tab {
        height: calc(100% + 45px);
        transform: translate(0, calc(-100% + 45px));
      }
      @include sp {
        height: calc(100% + 30px);
        transform: translate(0, calc(-100% + 30px));
      }
    }
  }
  h2 {
    &::after {
      background-color: $white;
      box-shadow: 0px 3px 10px rgba($black, 0.15);
    }
  }
</style>
