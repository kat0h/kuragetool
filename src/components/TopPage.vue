<template>
  <div id="TopPage">
    <h1>アプリ一覧</h1>
    <ul>
      <li
      v-for="appcard in appcards"
      :key="appcard.title"
      >
        {{ appcard.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopPage',
  data: () => ({
      appcards: [
        {title: "大文字メーカー"},
        {title: "日付計算"},
        {title: "ローマ数字変換"},
        {title: "タイマー"},
        {title: "ストップウォッチ"},
        {title: "合計計算"},
        {title: "アイコン加工"},
        {title: "Youtubeループ"},
        {title: "点字AA"},
        {title: "電気代計算"},
        {title: "〜までの日数"},
        {title: "QRコード作成"},
        {title: "QRコード読み取り"},
        {title: "文字数計測"},
        {title: "突然の死"},
        {title: "壁紙加工"},
        {title: "AmazonURLクリーナー"},
        {title: "カラーパレット"},
      ],
  }),
};
