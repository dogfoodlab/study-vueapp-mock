import Index from '@/views/plugins/Index'
import Vuetify from '@/views/plugins/Vuetify'
import I18n from '@/views/plugins/I18n'

export default {
  path: '/pulgins',
  name: 'plugins',
  component: Index,
  children: [
    {
      path: 'vuetify',
      name: 'plugins/vuetify',
      component: Vuetify
    },
    {
      path: 'i18n',
      name: 'plugins/i18n',
      component: I18n
    }
  ]
}
