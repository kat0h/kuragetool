<template>
  <div>
      <div v-for="appcard in appcards" :key="appcard.title">
        {{ appcard.title }}
        <img :src="appcard.image"/>
        <br>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TopPage',
  data: () => ({
      appcards: [
        { title: "大文字メーカー", image: require("@/assets/app_icons/omoji_maker.png")},
        { title: "日付計算", image: require("@/assets/app_icons/date_calc.png")},
        { title: "ローマ数字変換", image: require("@/assets/app_icons/roma.png")},
        { title: "タイマー", image: require("@/assets/app_icons/timer.png")},
        { title: "ストップウォッチ", image: require("@/assets/app_icons/stopwatch.png")},
        { title: "合計計算", image: require("@/assets/app_icons/sum_calc.png")},
        { title: "アイコン加工", image: require("@/assets/app_icons/icon_manufact.png")},
        { title: "Youtubeループ", image: require("@/assets/app_icons/youtube_loop.png")},
        { title: "点字AA", image: require("@/assets/app_icons/tenji_aa.png")},
        { title: "電気代計算", image: require("@/assets/app_icons/elec_calc.png")},
        { title: "〜までの日数", image: require("@/assets/app_icons/date_hoge.png")},
        { title: "QRコード作成", image: require("@/assets/app_icons/make_qr.png")},
        { title: "QRコード読み取り", image: require("@/assets/app_icons/read_qr.png")},
        { title: "文字数計測", image: require("@/assets/app_icons/word_count.png")},
        { title: "突然の死", image: require("@/assets/app_icons/suddenly_death.png")},
        { title: "壁紙加工", image: require("@/assets/app_icons/wallpaper_manufact.png")},
        { title: "AmazonURLクリーナー", image: require("@/assets/app_icons/amazon_url_cleaner.png")},
        { title: "カラーパレット", image: require("@/assets/app_icons/color_palatte.png")},
      ]
  }),
};

</script>
