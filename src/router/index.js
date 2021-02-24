import Vue from "vue"
import Router from "vue-router"

import Top from '@/Top.vue'
import About from '@/About.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: '/', component: Top },
    { path: '/about', component: About },
  ]
})

