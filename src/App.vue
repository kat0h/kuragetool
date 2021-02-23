<template>
  <v-app>
    <Wrapper></Wrapper>
  </v-app>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
export default {
  name: 'App',

  components: {
    Wrapper,
  },

  data: () => ({
    drawer: false,
    items: [
      { title: 'アプリ一覧', icon: 'mdi-apps'},
      { title: 'このサイトについて', icon: 'mdi-information'},
    ]
  }),
};
</script>
