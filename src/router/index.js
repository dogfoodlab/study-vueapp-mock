import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Layouts from '@/router/layouts'
import Highcharts from '@/router/highcharts'
import AmCharts from '@/router/amcharts'
import Misc from '@/router/misc'
import Plugins from '@/router/plugins'

Vue.use(VueRouter)

export default new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { ...Layouts },
    { ...Highcharts },
    { ...AmCharts },
    { ...Misc },
    { ...Plugins },
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
