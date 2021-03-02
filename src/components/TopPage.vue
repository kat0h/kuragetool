<template>
  <div>
      <v-container>
        <v-row dense>
          <v-col cols="12" v-for="appcard in appcards" :key="appcard.title">
            <app-icon-card :title="appcard.title" :image="appcard.image" :link="appcard.link"></app-icon-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import AppIconCard from './AppIconCard.vue';
export default {
  components: { AppIconCard },
  name: 'TopPage',
  data: () => ({
      appcards: [
        { title: "太文字メーカー", image: require("@/assets/app_icons/hutomoji_maker.png"), link: "/app/hutomoji"},
        { title: "日付計算", image: require("@/assets/app_icons/date_calc.png"), link: ""},
        { title: "ローマ数字変換", image: require("@/assets/app_icons/roma.png"), link: ""},
        { title: "タイマー", image: require("@/assets/app_icons/timer.png"), link: ""},
        { title: "ストップウォッチ", image: require("@/assets/app_icons/stopwatch.png"), link: ""},
        { title: "合計計算", image: require("@/assets/app_icons/sum_calc.png"), link: ""},
        { title: "アイコン加工", image: require("@/assets/app_icons/icon_manufact.png"), link: ""},
        { title: "Youtubeループ", image: require("@/assets/app_icons/youtube_loop.png"), link: ""},
        { title: "点字AA", image: require("@/assets/app_icons/tenji_aa.png"), link: ""},
        { title: "電気代計算", image: require("@/assets/app_icons/elec_calc.png"), link: ""},
        { title: "〜までの日数", image: require("@/assets/app_icons/date_hoge.png"), link: ""},
        { title: "QRコード作成", image: require("@/assets/app_icons/make_qr.png"), link: ""},
        { title: "QRコード読み取り", image: require("@/assets/app_icons/read_qr.png"), link: ""},
        { title: "文字数計測", image: require("@/assets/app_icons/word_count.png"), link: ""},
        { title: "突然の死", image: require("@/assets/app_icons/suddenly_death.png"), link: ""},
        { title: "壁紙加工", image: require("@/assets/app_icons/wallpaper_manufact.png"), link: ""},
        { title: "AmazonURLクリーナー", image: require("@/assets/app_icons/amazon_url_cleaner.png"), link: ""},
        { title: "カラーパレット", image: require("@/assets/app_icons/color_palatte.png"), link: ""},
      ]
  }),
};

</script>
