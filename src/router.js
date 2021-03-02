import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: () =>
                import ('./views/Welcome.vue')
        },
        {
            path: '/songs',
            component: () =>
                import ('./views/Songs.vue')
        },
        {
            path: '/song',
            component: () =>
                import ('./views/Song.vue')
        }
    ]
})