<template>
  <div style="text-align: center">
    <h1>
    文字数カウンター
    </h1>
    <v-container >
      <v-textarea
      filled
      label="計測する文章"
      auto-grow
      v-model="text"
      ></v-textarea>
      <div>
        文字数：{{text.length}}<br>
        原稿用紙：{{Math.floor(text.length/400)+1}}
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AppWordCount',
  data: () => ({
    text: ""
  }),
};

</script>
