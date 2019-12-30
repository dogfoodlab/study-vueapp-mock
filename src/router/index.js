import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import LayoutHome from '@/views/layouts/Home'
import LayoutBaseline from '@/views/layouts/Baseline'
import LayoutBaselineFlipped from '@/views/layouts/BaselineFlipped'
import LayoutCentered from '@/views/layouts/Centered'
import LayoutComplex from '@/views/layouts/Complex'
import LayoutDark from '@/views/layouts/Dark'
import LayoutGoogleContacts from '@/views/layouts/GoogleContacts'
import LayoutGoogleKeep from '@/views/layouts/GoogleKeep'
import LayoutGoogleYoutube from '@/views/layouts/GoogleYoutube'
import LayoutSandbox from '@/views/layouts/Sandbox'
import Vuetify from '@/views/Vuetify'

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
    {
      path: '/layouts',
      name: 'layouts',
      component: LayoutHome
    },
    {
      path: '/layouts/baseline',
      name: 'layouts/baseline',
      component: LayoutBaseline
    },
    {
      path: '/layouts/baseline-flipped',
      name: 'layouts/baseline-flipped',
      component: LayoutBaselineFlipped
    },
    {
      path: '/layouts/centered',
      name: 'layouts/centered',
      component: LayoutCentered
    },
    {
      path: '/layouts/complex',
      name: 'layouts/complex',
      component: LayoutComplex
    },
    {
      path: '/layouts/dark',
      name: 'layouts/dark',
      component: LayoutDark
    },
    {
      path: '/layouts/google-contacts',
      name: 'layouts/google-contacts',
      component: LayoutGoogleContacts
    },
    {
      path: '/layouts/baseline-google-keep',
      name: 'layouts/google-keep',
      component: LayoutGoogleKeep
    },
    {
      path: '/layouts/google-youtube',
      name: 'layouts/google-youtube',
      component: LayoutGoogleYoutube
    },
    {
      path: '/layouts/sabdbox',
      name: 'layouts/sandbox',
      component: LayoutSandbox
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
