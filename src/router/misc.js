import Misc from '@/views/misc/Misc'
import RangeSlider1 from '@/views/misc/RangeSlider1'

export default {
  path: '/misc',
  name: 'misc',
  component: Misc,
  children: [
    {
      path: 'range-slider-1',
      name: 'misc/range-slider-1',
      component: RangeSlider1
    },
    {
      path: 'range-slider-2',
      name: 'misc/range-slider-2',
      component: RangeSlider1
    }
  ]
}
