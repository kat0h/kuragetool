<template>
  <v-card outlined :href="link">
    <v-avatar tile>
      <v-img :src="image"></v-img>
    </v-avatar>
    {{ title }}
  </v-card>
</template>

<script>
export default {
  name: 'AppIconCard',
  props: ['title', 'image', 'link'],
  data: () => ({
  }),
};

</script>
