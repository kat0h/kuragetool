<template>
  <div>
    <h1>
    文字数カウント
    </h1>
    <v-container >
      <v-textarea
      filled
      label="計測する文章"
      auto-grow
      :value="text"
      ></v-textarea>
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

<style>
div {
  text-align: center;
}
</style>
