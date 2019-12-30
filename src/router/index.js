import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Layouts from '@/views/Layouts'
import LayoutBaseline from '@/views/layouts/Baseline'
import LayoutBaselineFlipped from '@/views/layouts/BaselineFlipped'
import LayoutCentered from '@/views/layouts/Centered'
import LayoutComplex from '@/views/layouts/Complex'
import LayoutDark from '@/views/layouts/Dark'
import LayoutGoogleContacts from '@/views/layouts/GoogleContacts'
import LayoutGoogleKeep from '@/views/layouts/GoogleKeep'
import LayoutGoogleYoutube from '@/views/layouts/GoogleYoutube'
import LayoutSandbox from '@/views/layouts/Sandbox'
import I18n from '@/views/I18n'
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
      component: Layouts,
      children: [
        {
          path: '/baseline',
          name: 'layouts/baseline',
          component: LayoutBaseline
        },
        {
          path: '/baseline-flipped',
          name: 'layouts/baseline-flipped',
          component: LayoutBaselineFlipped
        },
        {
          path: '/centered',
          name: 'layouts/centered',
          component: LayoutCentered
        },
        {
          path: '/complex',
          name: 'layouts/complex',
          component: LayoutComplex
        },
        {
          path: '/dark',
          name: 'layouts/dark',
          component: LayoutDark
        },
        {
          path: '/google-contacts',
          name: 'layouts/google-contacts',
          component: LayoutGoogleContacts
        },
        {
          path: '/google-keep',
          name: 'layouts/google-keep',
          component: LayoutGoogleKeep
        },
        {
          path: '/google-youtube',
          name: 'layouts/google-youtube',
          component: LayoutGoogleYoutube
        },
        {
          path: '/sabdbox',
          name: 'layouts/sandbox',
          component: LayoutSandbox
        }
      ]
    },
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
