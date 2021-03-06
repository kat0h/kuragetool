<template>
    <v-card outlined :to="link">
    <v-card-text>
        <v-avatar tile>
            <v-img :src="image"></v-img>
        </v-avatar>
        {{ title }}
    </v-card-text>
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
