<template>
  <v-container>
    <div
      ref="chart"
      style="width:100%;height:500px;"
    />
  </v-container>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
am4core.useTheme(am4themesAnimated)

export default {
  mounted () {
    // Create chart instance
    const chart = am4core.create(this.$refs.chart, am4charts.XYChart)

    const data = []
    let price = 100
    let quantity = 1000
    for (var i = 0; i < 300; i++) {
      price += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100)
      quantity += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1000)
      data.push({ date: new Date(2000, 1, i), price: price, quantity: quantity })
    }

    const interfaceColors = new am4core.InterfaceColorSet()

    chart.data = data

    // the following line makes value axes to be arranged vertically.
    chart.leftAxesContainer.layout = 'vertical'

    // uncomment this line if you want to change order of axes
    // chart.bottomAxesContainer.reverseOrder = true;
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0
    dateAxis.renderer.ticks.template.length = 8
    dateAxis.renderer.ticks.template.strokeOpacity = 0.1
    dateAxis.renderer.grid.template.disabled = true
    dateAxis.renderer.ticks.template.disabled = false
    dateAxis.renderer.ticks.template.strokeOpacity = 0.2

    // these two lines makes the axis to be initially zoomed-in
    // dateAxis.start = 0.7;
    // dateAxis.keepSelection = true;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.zIndex = 1
    valueAxis.renderer.baseGrid.disabled = true

    // Set up axis
    valueAxis.renderer.inside = true
    valueAxis.height = am4core.percent(60)
    valueAxis.renderer.labels.template.verticalCenter = 'bottom'
    valueAxis.renderer.labels.template.padding(2, 2, 2, 2)
    // valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.renderer.fontSize = '0.8em'

    // uncomment these lines to fill plot area of this axis with some color
    valueAxis.renderer.gridContainer.background.fill = interfaceColors.getFor('alternativeBackground')
    valueAxis.renderer.gridContainer.background.fillOpacity = 0.05

    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.dateX = 'date'
    series.dataFields.valueY = 'price'
    series.tooltipText = '{valueY.value}'
    series.name = 'Series 1'

    const valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis2.tooltip.disabled = true

    // this makes gap between panels
    valueAxis2.marginTop = 30
    valueAxis2.renderer.baseGrid.disabled = true
    valueAxis2.renderer.inside = true
    valueAxis2.height = am4core.percent(40)
    valueAxis2.zIndex = 3
    valueAxis2.renderer.labels.template.verticalCenter = 'bottom'
    valueAxis2.renderer.labels.template.padding(2, 2, 2, 2)
    // valueAxis2.renderer.maxLabelPosition = 0.95;
    valueAxis2.renderer.fontSize = '0.8em'

    // uncomment these lines to fill plot area of this axis with some color
    valueAxis2.renderer.gridContainer.background.fill = interfaceColors.getFor('alternativeBackground')
    valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05

    const series2 = chart.series.push(new am4charts.ColumnSeries())
    series2.columns.template.width = am4core.percent(50)
    series2.dataFields.dateX = 'date'
    series2.dataFields.valueY = 'quantity'
    series2.yAxis = valueAxis2
    series2.tooltipText = '{valueY.value}'
    series2.name = 'Series 2'

    chart.cursor = new am4charts.XYCursor()
    chart.cursor.xAxis = dateAxis

    const scrollbarX = new am4charts.XYChartScrollbar()
    scrollbarX.series.push(series)
    scrollbarX.marginBottom = 20
    chart.scrollbarX = scrollbarX

    // Set property.
    this.amcharts.chart = chart
  },
  beforeDestroy () {
    if (this.amcharts.chart) {
      this.amcharts.chart.dispose()
    }
  },
  data () {
    return {
      amcharts: Object.seal({ chart: undefined })
    }
  }
}
</script>
