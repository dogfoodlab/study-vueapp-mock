import Home from '@/views/layouts/Home'
import Baseline from '@/views/layouts/Baseline'
import BaselineFlipped from '@/views/layouts/BaselineFlipped'
import Centered from '@/views/layouts/Centered'
import Complex from '@/views/layouts/Complex'
import Dark from '@/views/layouts/Dark'
import GoogleContacts from '@/views/layouts/GoogleContacts'
import GoogleKeep from '@/views/layouts/GoogleKeep'
import GoogleYoutube from '@/views/layouts/GoogleYoutube'
import Sandbox from '@/views/layouts/Sandbox'

export default {
  path: '/layouts',
  name: 'layouts',
  component: Home,
  children: [
    {
      path: 'baseline',
      name: 'layouts/baseline',
      component: Baseline
    },
    {
      path: 'baseline-flipped',
      name: 'layouts/baseline-flipped',
      component: BaselineFlipped
    },
    {
      path: 'centered',
      name: 'layouts/centered',
      component: Centered
    },
    {
      path: 'complex',
      name: 'layouts/complex',
      component: Complex
    },
    {
      path: 'dark',
      name: 'layouts/dark',
      component: Dark
    },
    {
      path: 'google-contacts',
      name: 'layouts/google-contacts',
      component: GoogleContacts
    },
    {
      path: 'google-keep',
      name: 'layouts/google-keep',
      component: GoogleKeep
    },
    {
      path: 'google-youtube',
      name: 'layouts/google-youtube',
      component: GoogleYoutube
    },
    {
      path: 'sabdbox',
      name: 'layouts/sandbox',
      component: Sandbox
    }
  ]
}
