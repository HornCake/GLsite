<template>
  <section>
    <AScrollAnchorHeading text="提出物について" />
    <MTabContent>
      <template #first>
        <p>下記の項目に従い、登録番号が記載されたメールにある「一次審査提出フォーム」に必要事項を入力した上で提出してください。</p>
        <ul>
          <li>420mm×594mm(JIS規格A2)1枚または2枚のPDFデータをフォーム内の所定の欄にアップロードしてください。この時、ファイル名は「登録番号.pdf」としてください。</li>
          <li>動画や音声などの提出物がある場合は外部リンクに添付し、フォーム内のリンク貼り付け欄にリンクを貼り付けてください。動画や音声はいずれか1つまでとし、その長さは10分までとします。</li>
        </ul>
        <p class="note">提出物に個人やグループ、大学など個人が特定できることを含めないでください。</p>
      </template>
      <template #second>
        <p>下記の項目に従い、作品を当日公開二次審査の会場に持ち込んでください。当日に持ち込むことが不可能である場合は必ず相談してください。</p>
        <ul>
          <li>プレゼンテーションボードは420mm×594mm(JIS規格A2)の紙1枚以上としてください。</li>
          <li>模型は底面の大きさが594mm×841mm(JIS規格A1)以下としてください。</li>
          <li>上記以外に展示物がある場合には、その内容について2024年3月5日火曜日迄に、一次審査通過時に送付するフォームに入力してください。</li>
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
