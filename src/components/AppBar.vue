<template>
  <v-container>
    <!-- ドロワー -->
    <v-navigation-drawer
    app v-model="drawer" temporary>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="purple">mdi-jellyfish</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="title">
          くらげツール
        </v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 上部のバー -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'Wrapper',

  components: {
  },

  data: () => ({
    drawer: false,
    items: [
      { title: 'アプリ一覧', icon: 'mdi-apps', link: '/'},
      { title: 'このサイトについて', icon: 'mdi-information', link: '/about'},
    ]
  }),
};
</script>
