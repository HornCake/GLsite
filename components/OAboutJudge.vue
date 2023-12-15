<template>
  <section>
    <AScrollAnchorHeading text="審査について" />
    <MTabContent>
      <template #first>
        <p>一次審査は上の「審査委員」の項に記載されている5名の審査委員により、公開二次審査に進む15作品を決定します。一次審査通過者には個別に連絡し、二次審査の詳細について説明します。</p>
        <h3>日程</h3>
        <p>
          一次審査提出期間：<span class="no-pc"><br /></span>2023年12月11日(月)~2024年2月11日(日)23時59分59秒(日本標準時)
        </p>
        <p>
          一次審査結果発表：<span class="no-pc"><br /></span>2024年2月下旬(審査委員のコメントと共に公式サイト上で公開)
        </p>
      </template>
      <template #second>
        <p>
          一次審査通過者は公開二次審査にて5分以内の日本語によるプレゼンテーションを行い、審査委員の講評を受けます。二次審査の結果は同日に行われる授賞式で発表し、賞金を授与します。また二次審査の作品と結果、審査委員のコメントは本サイトでも公開する予定です。公開二次審査・授賞式についてはライブ配信も行います。ライブ配信の詳細は後日、同様に本サイトにて公開する予定です。
        </p>
        <h3>日程</h3>
        <p>
          公開二次審査日時：<span class="no-pc"><br /></span>2024年3月未定 13:00~17:00予定
        </p>
        <p>
          授賞式：<span class="no-pc"><br /></span>公開二次審査と同日 17:15~17:45予定
        </p>
        <p>
          懇親会：<span class="no-pc"><br /></span>公開二次審査と同日 18:00~20:00予定
        </p>
      </template>
    </MTabContent>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .no-pc {
    @include pc {
      display: none;
    }
  }
</style>
