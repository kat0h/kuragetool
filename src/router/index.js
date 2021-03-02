import Vue from "vue"
import Router from "vue-router"

import TopPage from '@/components/TopPage.vue'
import About from '@/components/AboutPage.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: TopPage },
    { path: '/about', component: About },
  ]
})
