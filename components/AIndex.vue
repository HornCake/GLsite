<template>
  <div class="box">
    <NuxtLink class="link" to="/">
      <div class="upper-lines"></div>
      <slot />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .box {
    display: block;
    @include pc {
      width: 350px;
      margin-bottom: 80px;
    }
    @include tab {
      width: 200px;
      margin-bottom: 60px;
    }
    @include sp {
      width: 160px;
      margin-bottom: 40px;
    }
  }
  .upper-lines {
    display: block;
    width: 350px;
    &::before {
      content: "";
      position: absolute;
      display: block;
      border-bottom: 1px solid $gray;
      transform-origin: 10px center;
      transform: translate(-10px, -10px) scale(0, 1);
      transition: transform 0.2s;
      @include pc {
        width: 100px;
      }
      @include tab {
        width: 85px;
      }
      @include sp {
        width: 80px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      border-bottom: 1px solid $gray;
      transition: transform 0.2s;
      @include pc {
        width: 100px;
        transform-origin: 90px center;
        transform: translate(90px, -10px) scale(0, 1);
      }
      @include tab {
        width: 85px;
        transform-origin: 75px center;
        transform: translate(75px, -10px) scale(0, 1);
      }
      @include sp {
        width: 80px;
        transform-origin: 70px center;
        transform: translate(70px, -10px) scale(0, 1);
      }
    }
  }
  .link {
    position: relative;
    display: block;
    margin-inline: auto;
    color: $text_black;
    height: 40px;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    @include pc {
      width: 180px;
      font-size: 22px;
    }

    @include tab {
      width: 150px;
      font-size: 19px;
    }
    @include sp {
      width: 140px;
      font-size: 18px;
    }
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 50px;
      border-inline: 1px solid $gray;
      transform-origin: center 40px;
      transform: translate(0, -20px) scale(1, 0);
      transition: transform 0.2s 0.1s;
    }
    &::after {
      content: "";
      display: block;
      border-bottom: 1px solid $gray;
      @include pc {
        width: 350px;
        transform: translate(-85px, 0);
      }
      @include tab {
        width: 200px;
        transform: translate(-25px, 0);
      }
      @include sp {
        width: 160px;
        transform: translate(-10px, 0);
      }
    }
    &:hover {
      &::before {
        transform: translate(0, -20px) scale(1);
        transition: transform 0.2s;
      }
      > .upper-lines {
        &::before {
          transform: translate(-10px, -10px) scale(1);
          transition: transform 0.2s 0.1s;
        }
        &::after {
          transition: transform 0.2s 0.1s;
          @include pc {
            transform: translate(90px, -10px) scale(1);
          }
          @include tab {
            transform: translate(75px, -10px) scale(1);
          }
          @include sp {
            transform: translate(70px, -10px) scale(1);
          }
        }
      }
    }
  }
</style>
