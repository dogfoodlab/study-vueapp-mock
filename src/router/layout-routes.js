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

export default {
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
}
