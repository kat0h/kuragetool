<template>
  <v-app>

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
        <!-- アプリ一覧 -->
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            アプリ一覧
          </v-list-item-content>
        </v-list-item>
        <!-- このサイトについて -->
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            このサイトについて
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 上部のバー -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
