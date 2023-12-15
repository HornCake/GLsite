<template>
  <figure class="judge">
    <img :src="img[judge.image]" :alt="judge.name" />
    <figcaption class="content">
      <h3>{{ judge.name }}</h3>
      <p class="post" :class="{ highlightened: judge.post === '審査委員長' }">{{ judge.post }}</p>
      <p class="desc" v-for="str in judge.desc">{{ str }}</p>
      <p></p>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
  const props = defineProps<{
    judge: {
      image: string;
      name: string;
      post: string;
      desc: Array<string>;
    };
  }>();
  const images = import.meta.glob("../assets/images/judge/*", { eager: true });

  const img: Record<string, string> = {};

  for (const key in images) {
    // @ts-ignore
    img[key.replace("../assets/images/judge/", "")] = images[key].default as string;
  }
</script>

<style scoped lang="scss">
  .judge {
    display: grid;
    width: min(100%, 700px);
    margin-inline: auto;
    @include pc {
      grid-template:
        ". content" 1fr
        "img content" max-content
        ". content" 1fr
        / 4fr 5fr;
    }
    @include notpc {
      grid-template:
        ". content" 1fr
        "img content" max-content
        ". content" 1fr
        / 1fr 2fr;
    }
  }
  h3 {
    @include pc {
      font-size: 22px;
      margin-top: 60px;
    }
    @include notpc {
      font-size: 20px;
      margin-top: 18px;
      margin-bottom: 15px;
    }
  }
  .content {
    grid-area: content;
    @include pc {
      margin-left: 20px;
    }
    @include notpc {
      margin-left: 10px;
    }
  }
  .post {
    width: max-content;
    font-weight: 700;
    @include pc {
      font-size: 20px;
    }
    @include notpc {
      font-size: 17px;
      margin-block: 5px;
    }
    &.highlightened {
      &::after {
        content: "";
        display: block;
        width: 150%;
        border-bottom: 1px solid $gray;
        transform: translate(0, -7px);
      }
    }
  }
  .desc {
    margin-block: 0;
    line-height: 1.5em;
  }
  img {
    grid-area: img;
    margin-left: auto;
    @include pc {
      width: 250px;
      margin-right: 10%;
    }
    @include notpc {
      width: 100%;
    }
  }
</style>
