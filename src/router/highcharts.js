import HighCharts from '@/views/highcharts/HighCharts'
import LineBasic from '@/views/highcharts/LineBasic'
import AreaBasic from '@/views/highcharts/AreaBasic'
import BarBasic from '@/views/highcharts/BarBasic'
import PieBasic from '@/views/highcharts/PieBasic'

export default {
  path: '/highcharts',
  name: 'highcharts',
  component: HighCharts,
  children: [
    {
      path: 'line-basic',
      name: 'highcharts/line-basic',
      component: LineBasic
    },
    {
      path: 'area-basic',
      name: 'highcharts/area-basic',
      component: AreaBasic
    },
    {
      path: 'bar-basic',
      name: 'highcharts/bar-basic',
      component: BarBasic
    },
    {
      path: 'pie-basic',
      name: 'highcharts/pie-basic',
      component: PieBasic
    }
  ]
}
