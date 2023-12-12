<template>
  <header>
    <div>
      <NuxtLink class="top" to="/">
        <img src="@/assets/images/logo/small.svg" alt="ロゴ" />
        <div>GL competition 2023</div>
      </NuxtLink>
      <div>
        <NuxtLink class="about-us none-on-sp" to="/about-us">団体について</NuxtLink>
        <a class="ig-logo media-icon none-on-sp" href="https://www.instagram.com/_groundlevel_/" target="_blank" rel="noopener noreferrer"></a>
        <a class="x-logo media-icon none-on-sp" href="https://twitter.com/ground_level_" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  const menuActive = ref(false);

  const toggle = () => {
    menuActive.value = !menuActive.value;
  };
</script>

<style scoped lang="scss">
  header {
    position: fixed;
    z-index: 2000;
    width: 100%;
    height: $header-height;
    background-color: $header_black;
    > div {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      box-shadow: 0px 3px 10px rgba($gray, 0.4);
      > div {
        display: flex;
      }
    }
  }
  .top {
    display: flex;
    width: max-content;
    margin: 15px 0 0 15px;
    text-decoration: none;
    color: $text_white;
    transition: transform 0.3s;
    > img {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      background-color: $main;
    }
    > div {
      width: 180px;
      margin-left: 15px;
      line-height: 40px;
      font-family: "Futura";
      font-size: 18px;
    }
    &:hover {
      transform-origin: 50% 50%;
      transform: scale(1.02);
      > img {
        filter: drop-shadow(0 0 3px rgba($main, 0.5));
      }
      > div {
        filter: drop-shadow(0 0 3px rgba($text_white, 0.5));
      }
    }
  }
  .about-us {
    font-size: 17px;
    color: $text_white;
    margin-top: 23px;
    margin-right: 25px;
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
  .media-icon {
    display: block;
    height: 40px;
    width: 40px;
    margin-top: 15px;
    margin-right: 15px;
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
    background-image: url("@/assets/images/ig_logo.svg");
    background-size: 25px 25px;
  }
  .x-logo {
    background-image: url("@/assets/images/x_logo.svg");
    background-size: 25px 25px;
  }

  .none-on-sp {
    @include sp {
      display: none;
    }
  }
</style>
