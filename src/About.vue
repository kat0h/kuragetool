<template>
  <v-app>
    <Wrapper></Wrapper>
    <h1>test</h1>
  </v-app>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
export default {
  name: 'About',

  components: {
    Wrapper,
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
