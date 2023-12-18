<template>
  <div v-show="active" class="transparent-back" @click="$emit('close')"></div>
  <nav :class="{ closed: !active }">
    <div class="list">
      <ALinkList class="link" v-for="str in list" :key="str" to="/" @click="onClick(str)">{{ str }}</ALinkList>
      <div class="media-icons only-sp">
        <a class="ig-logo media-icon" href="https://www.instagram.com/glcompetition2023/" target="_blank" rel="noopener noreferrer"></a>
        <a class="x-logo media-icon" href="https://twitter.com/ground_level_" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <NuxtLink class="about-us only-sp" to="/about-us" @click="onClickAboutUs">団体について</NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const props = defineProps<{
    active: boolean;
  }>();

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  const list = ["課題文", "応募要項", "審査委員", "審査について", "賞・副賞", "注意事項", "応募", "SNSアカウント", "協賛"];

  const onClick = (str: string) => {
    scrollToEle(str);
    if (window.innerWidth <= 600) {
      emits("close");
    }
  };
  const onClickAboutUs = () => {
    if (window.innerWidth <= 600) {
      emits("close");
    }
  };
</script>

<style scoped lang="scss">
  nav {
    position: absolute;
    top: $header-height;
    right: 0;
    height: calc(100vh - $header-height);
    background-color: $header_black;
    box-shadow: -5px 0px 10px rgba($black, 0.25);
    transition: transform 0.3s;
    @include notsp {
      width: 300px;
    }
    @include sp {
      width: 100vw;
    }
  }
  .closed {
    transform: translate(120%, 0);
  }
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    @include notsp {
      margin: 30px 20%;
      height: calc(100svh - $header-height - 60px);
    }
    @include sp {
      margin: 50px 5%;
      height: calc(100svh - $header-height - 100px);
    }
  }
  .link {
    @include notsp {
      width: 100%;
    }
    @include sp {
      width: 40%;
    }
  }
  .transparent-back {
    position: absolute;
    top: $header-height;
    left: 0;
    width: 100vw;
    height: calc(100dvh - $header-height);
    @include sp {
      display: none;
    }
  }

  .about-us {
    font-size: 17px;
    color: $text_white;
    line-height: 20px;
    text-decoration: none;
    &::after {
      display: block;
      position: absolute;
      content: "";
      width: 60px;
      height: 5px;
      border-right: 2px solid $text_white;
      border-bottom: 1px solid $text_white;
      transform: translate(45px, -3px) skew(45deg);
      transition:
        width 0.3s,
        transform 0.3s;
    }
    &:hover {
      filter: drop-shadow(0 0 3px rgba($text_white, 0.5));
      &::after {
        width: 100px;
        transform: translate(5px, -3px) skew(45deg);
      }
    }
  }
  .media-icons {
    display: flex;
    width: 40%;
  }
  .media-icon {
    display: block;
    height: 32px;
    width: 40px;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.3s;
    &:hover {
      transform-origin: 50% 50%;
      transform: scale(1.05);
      filter: drop-shadow(0 0 3px rgba($text_white, 0.3));
    }
  }

  .ig-logo {
    margin-inline: 15px;
    background-image: url("@/assets/images/ig_logo.svg");
    background-size: 30px;
  }
  .x-logo {
    margin-left: 15px;
    background-image: url("@/assets/images/x_logo.svg");
    background-size: 30px;
  }
  .only-sp {
    @include notsp {
      display: none;
    }
  }
</style>
