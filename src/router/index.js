import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import I18n from '@/views/I18n'
import Vuetify from '@/views/Vuetify'
import LayoutRoutes from '@/router/layout-routes'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { ...LayoutRoutes },
    {
      path: '/i18n',
      name: 'i18n',
      component: I18n
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: Vuetify
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About')
    }
  ]
})
