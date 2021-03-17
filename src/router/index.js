import Vue from "vue"
import Router from "vue-router"

import TopPage from '@/components/TopPage.vue'
import About from '@/components/AboutPage.vue'

import AppWordCount from '@/components/apps/wordcount.vue'
import AmazonURLClean from '@/components/apps/amazon_clean.vue'
import AppHutomoji from '@/components/apps/hutomoji.vue'
import AppKakushitter from '@/components/apps/kakushitter.vue'

import EtcKakushitter from '@/components/etc/kakushitter'

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        { path: '/', component: TopPage },
        { path: '/about', component: About },
        { path: '/app/wordcount', component: AppWordCount },
        { path: '/app/amazonurl', component: AmazonURLClean },
        { path: '/app/hutomoji', component: AppHutomoji },
        { path: '/app/kakushitter', component: AppKakushitter },
        { path: '/etc/kakushitter', component: EtcKakushitter },
    ]
})

