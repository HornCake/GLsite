<template>
  <section>
    <AScrollAnchorHeading text="提出物について" />
    <MTabContent>
      <template #first>
        <p>下記の項目に従い、登録番号が記載されたメールにある「一次審査提出フォーム」に必要事項を入力た上で提出してください。</p>
        <ul>
          <li>420mm×594mm(JIS規格A2)1枚または2枚のPDFデータをフォーム内の所定の欄にアップロードしてください。この時、ファイル名は「登録番号.pdf」としてください。</li>
          <li>動画や音声などの提出物がある場合は外部リンクに添付し、フォーム内のリンク貼り付け欄にリンクを貼り付けてください。動画や音声はいずれか1つまでとし、その長さは10分までとします。</li>
        </ul>
        <p class="note">提出物に個人やグループ、大学など個人が特定できることを含めないでください。</p>
      </template>
      <template #second>
        <p>
          下記の項目に従い、郵送の場合、必着で、公開二次審査会場(HILLSIDE PLAZA、詳細は「<NuxtLink to="/" @click="onClick">審査について</NuxtLink
          >」)の住所まで送付してください。当日会場に持ち込む場合は公開二次審査当日(3月12日)に、作品を持って会場に来てください。基本的には当日持参するようにお願いします。
        </p>
        <ul>
          <li>420mm×594mm(JIS規格A2)の紙1枚以上のプレゼンテーションボード。</li>
          <li>底面を594mm×841mm(JIS規格A1)の模型。</li>
          <li>また、上記以外に展示物がある場合には、その内容について、開催日(3月12日)一週間前迄に連絡してください。</li>
        </ul>
      </template>
    </MTabContent>
  </section>
</template>

<script setup lang="ts">
  const onClick = () => {
    scrollToEle("審査について");
  };
</script>

<style scoped lang="scss"></style>
