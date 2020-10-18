<template>
  <v-container>
    <div ref="chart" style="width: 100%; height: 500px" />
  </v-container>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
am4core.useTheme(am4themesAnimated)

export default {
  mounted() {
    // Create chart instance
    const chart = am4core.create(this.$refs.chart, am4charts.XYChart)

    // Add data
    const data = []
    let value = 50
    for (let i = 0; i < 300; i++) {
      let date = new Date()
      date.setHours(0, 0, 0, 0)
      date.setDate(i)
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
      data.push({ date: date, value: value })
    }

    chart.data = data

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.minGridDistance = 60
    chart.yAxes.push(new am4charts.ValueAxis())

    // Create series
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = 'value'
    series.dataFields.dateX = 'date'
    series.tooltipText = '{value}'

    series.tooltip.pointerOrientation = 'vertical'

    chart.cursor = new am4charts.XYCursor()
    chart.cursor.snapToSeries = series
    chart.cursor.xAxis = dateAxis

    chart.scrollbarX = new am4core.Scrollbar()
    // chart.scrollbarY = new am4core.Scrollbar()

    // Set property.
    this.F.amcharts.chart = chart
  },
  beforeDestroy() {
    if (this.F.amcharts.chart) {
      this.F.amcharts.chart.dispose()
    }
  },
  data() {
    return {
      F: Object.freeze({
        amcharts: { chart: undefined }
      })
    }
  }
}
</script>
