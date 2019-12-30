import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import LayoutRoutes from '@/router/layout-routes'
import PluginRoutes from '@/router/plugin-routes'

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
    { ...PluginRoutes },
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
