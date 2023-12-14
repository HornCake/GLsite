<template>
  <section>
    <AScrollAnchorHeading text="SNSアカウント" />
    <section>
      <div class="icons">
        <a class="media-icon" href="https://www.instagram.com/_groundlevel_/" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/ig_logo.svg" alt="Instagram" />
          <p>@_groundlevel_</p>
        </a>
        <a class="media-icon" href="https://twitter.com/ground_level_" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/x_logo.svg" alt="Instagram" />
          <p>@ground_level_</p>
        </a>
      </div>
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
    margin: 0;
    text-align: center;
  }
  .icons {
    display: flex;
    justify-content: center;
  }
  .media-icon {
    display: block;
    height: max-content;
    > img {
      mix-blend-mode: difference;
    }
    @include pc {
      width: 150px;
      margin-inline: 30px;
      > img {
        height: 60px;
        width: 60px;
        margin-block: 30px;
        margin-inline: 45px;
      }
    }
    @include notpc {
      width: 150px;
      // margin-inline: 30px;
      > img {
        height: 40px;
        width: 40px;
        margin-block: 20px;
        margin-inline: 55px;
      }
    }
  }
</style>
