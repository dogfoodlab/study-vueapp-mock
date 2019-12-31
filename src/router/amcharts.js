import AmCharts from '@/views/amcharts/AmCharts'
import LineGraph from '@/views/amcharts/LineGraph'
import StackedArea from '@/views/amcharts/StackedArea'
import SimpleColumnChart from '@/views/amcharts/SimpleColumnChart'
import SimplePieChart from '@/views/amcharts/SimplePieChart'
import VerticallyStackedAxesChart from '@/views/amcharts/VerticallyStackedAxesChart'
import TransportMetroMap from '@/views/amcharts/TransportMetroMap'
import MapBubbles from '@/views/amcharts/MapBubbles'

export default {
  path: '/amcharts',
  name: 'amcharts',
  component: AmCharts,
  children: [
    {
      path: 'line-graph',
      name: 'amcharts/line-graph',
      component: LineGraph
    },
    {
      path: 'stacked-area',
      name: 'amcharts/stacked-area',
      component: StackedArea
    },
    {
      path: 'simple-column-chart',
      name: 'amcharts/simple-column-chart',
      component: SimpleColumnChart
    },
    {
      path: 'simple-pie-chart',
      name: 'amcharts/simple-pie-chart',
      component: SimplePieChart
    },
    {
      path: 'vertically-stacked-axes-chart',
      name: 'amcharts/vertically-stacked-axes-chart',
      component: VerticallyStackedAxesChart
    },
    {
      path: 'map-bubbles',
      name: 'amcharts/map-bubbles',
      component: MapBubbles
    },
    {
      path: 'transport-metro-map',
      name: 'amcharts/transport-metro-map',
      component: TransportMetroMap
    }
  ]
}
