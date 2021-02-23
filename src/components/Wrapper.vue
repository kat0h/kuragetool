<template>
  <v-container>
    <!-- ドロワー -->
    <v-navigation-drawer
    app v-model="drawer" temporary>
      <v-list-item>
        <v-list-item-title class="title">
          🐦はとツール
        </v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        link>
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
      { title: 'アプリ一覧', icon: 'mdi-apps'},
      { title: 'このサイトについて', icon: 'mdi-information'},
    ]
  }),
};
</script>
