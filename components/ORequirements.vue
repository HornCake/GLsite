<template>
  <section>
    <AScrollAnchorHeading text="応募要項" />
    <section>
      <h3>応募資格</h3>
      <p>
        応募資格は2023年12月18日(月)時点で、4年制大学、短期大学、専門学校、高等専門学校で建築を学んでいる、もしくは建築を学ぶ予定の、
        各教育機関の1回生(1年生)であり、2024年3月12日(火)に開催する公開二次審査・授賞式に出席できることとします。複数人での応募は可能ですが、
        1グループ5人までとします。他の教育機関に所属する学生との共同制作も大いに歓迎します。ただし、メンバー全員が上記条件を満たしてください。 複数作品応募することも可能ですが、作品ごとにエントリー、提出をしてください。
      </p>
    </section>
    <section>
      <h3>応募方法</h3>
      <p>
        応募するには、ページ下部にある<NuxtLink to="/" @click="onClick">エントリーフォーム</NuxtLink
        >から必要事項を入力し、送信してください。<br />フォームを送信すると入力した回答のコピーのメールと、登録番号が記載されたメールの2通が入力したメールアドレスに届きます。登録番号は今後のエスキースや審査の際に使用するので、保存しておいてください。
      </p>
      <p class="note"><b>2023年12月18日(月)~2023年12月31日(日)までにエントリーした方のみGLコンペティション2023実行委員会が用意するTAによるエスキースを受けることが可能です</b>。詳しくは下の「エスキースについて」の項を参照してください。</p>
      <p class="note">エントリーはエントリーフォームでのみ受け付けます。</p>
      <p class="note">交付後の登録番号に関する問い合わせは受け付けません。</p>
    </section>
    <section>
      <h3>エスキースについて</h3>
      <p>
        エスキース会開催期間：<span class="no-pc"><br /></span>2024年1月15日(月)~2024年2月11日(日)
      </p>
      <p>
        <b>2023年12月18日(月)~2023年12月31日(日)までにエントリーした方のみ</b>GLコンペティション2023実行委員会が用意するTAによるエスキースを受けることができます。1対1でZOOMにて行い、1回30分で2回まで受けることが可能です。
        2024年1月1日に送られるエスキースの日程調査に同年1月7日までに回答し、その後、同年1月14日までに送られるエスキース日程を確認してください。指定された日時に事前に送られたZOOMのURLからZOOMに参加することで、エスキースを受けることができます。
      </p>
    </section>
    <section>
      <p class="download"><a :href="ret['GLcompe2023応募要項_20231219.pdf']" target="_blank" rel="noopener noreferrer">応募要項をダウンロード</a></p>
    </section>
  </section>
</template>

<script setup lang="ts">
  const onClick = () => {
    scrollToEle("応募");
  };
  const files = import.meta.glob("../assets/files/*", { eager: true });

  const ret: Record<string, string> = {};

  for (const key in files) {
    ret[key.replace("../assets/files/", "")] = files[key].default as string;
  }
</script>

<style scoped lang="scss">
  .no-pc {
    @include pc {
      display: none;
    }
  }
  .download {
    text-align: center;
    margin-top: 2em;
  }
</style>
