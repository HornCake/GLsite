<template>
  <section>
    <AScrollAnchorHeading text="課題文" />
    <section>
      <div class="subtitle">THEME</div>
      <div class="theme">「GROUND LEVEL」</div>
      <p>第1回のテーマは「GROUND LEVEL」です。グラウンドレベルから構想される建築はどのように描かれるでしょうか。</p>
      <p>
        「グラウンドレベル」は、断面詳細図などで示される、標準地盤面の位置あるいは高さです。建築物を建築する際には様々な作業の基準となり、比喩としてスタート地点、物事の原点（グラウンドゼロ）と解釈してもよいでしょう。
        <br />希望にあふれた未来を構想する基準線となり、善・正義・欲望・価値・所有・美・力など、建築行為の基盤となる衝動を受け止めるのもまた、グラウンドレベルです。右や左というよりも、天と地へ向かう垂直方向へ想像力を広げ、テレストリアル（地球上）の建築を構想するきっかけとしても良いでしょう。
      </p>
      <p>これからの時代に繋がる、おおらかで鋭い「グラウンドレベルの建築」を構想してください。敷地や機能、面積などは構想しようとする建築にふさわしくなるように設定してください。皆さんのご提案を楽しみにお待ちしています。</p>
    </section>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  h2 {
    @include pc {
      margin-bottom: 80px;
    }
    @include notpc {
      margin-bottom: 50px;
    }
  }
  .subtitle {
    width: max-content;
    margin-inline: auto;
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    color: $text_yellow;
    text-align: center;
    @include pc {
      font-size: 16px;
      line-height: 18px;
    }
    @include notpc {
      font-size: 14px;
      line-height: 14px;
    }
  }
  .theme {
    width: max-content;
    margin-inline: auto;
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    text-align: center;
    @include pc {
      font-size: 45px;
      line-height: 55px;
      margin-bottom: 70px;
    }
    @include notpc {
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 50px;
    }
  }
</style>
