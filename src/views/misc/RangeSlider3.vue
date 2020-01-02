<template>
  <v-container
    pl-12
    pr-12
  >

    <range-slider
      skin="flat"
      type="double"
      :grid="true"
      :drag_interval="true"
      :min="slider.min"
      :max="slider.max"
      :from="slider.from"
      :to="slider.to"
      :prettify="valueOfDate => sliderDateFormat(valueOfDate)"
      @change="onChangeRangeSlider"
      @update="onUpdateRangeSlider"
      @finish="onFinishRangeSlider"
    />

    <br />

    <div
      ref="chart"
      style="width:100%;height:400px;"
    />

    <br />

    <v-data-table
      dense
      :headers="datatable.headers"
      :items="datatable.items"
      :items-per-page="datatable.itemsPerPage"
    ></v-data-table>

    <blockquote class="blockquote caption text-right">
      Data credit：US Geological Survey<br />
      Department of the Interior / USGS
    </blockquote>

  </v-container>
</template>

<!--
https://earthquake.usgs.gov/earthquakes/search/
https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits
-->

<script>
import axios from 'axios'
import moment from 'moment'
import 'moment-timezone'
import csvSync from 'csv/lib/sync'
import Enumerable from 'linq'
import RangeSlider from '@/views/misc/components/RangeSlider'

import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow'
am4core.useTheme(am4themesAnimated)

export default {
  components: {
    'range-slider': RangeSlider
  },
  async mounted () {
    //
    // World map
    //
    const chart = am4core.create(this.$refs.chart, am4maps.MapChart)
    const title = chart.titles.create()
    title.text = '[bold font-size: 20]Earthquake Catalog[/]\nsource: USGS'
    title.textAlign = 'middle'

    // Set map definition
    chart.geodata = am4geodataWorldLow

    // Set projection
    chart.projection = new am4maps.projections.Miller()

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries())
    polygonSeries.exclude = ['AQ']
    polygonSeries.useGeodata = true
    polygonSeries.nonScalingStroke = true
    polygonSeries.strokeWidth = 0.5

    // Create map image series
    const imageSeries = chart.series.push(new am4maps.MapImageSeries())
    // imageSeries.data =
    imageSeries.dataFields.value = 'magN'

    // Create image template
    const imageTemplate = imageSeries.mapImages.template
    imageTemplate.propertyFields.latitude = 'latitudeN'
    imageTemplate.propertyFields.longitude = 'longitudeN'
    imageTemplate.nonScaling = true
    imageTemplate.layout = 'absolute'

    // Create value pointer
    const circle = imageTemplate.createChild(am4core.Circle)
    circle.fillOpacity = 0.7
    // circle.propertyFields.fill = 'color'
    circle.tooltipText = '{time}\n{place}\nMagnitude:{magN}\nDepth:{depthN}'

    imageSeries.heatRules.push({
      'target': circle,
      'property': 'radius',
      'min': 4,
      'max': 20,
      'dataField': 'value'
    })

    this.F.amcharts.chart = chart
    this.F.amcharts.imageSeries = imageSeries

    //
    // Data source
    //
    const response = await axios.get('/data/Earthquake201912.csv')
    const csv = response.data
    const source = csvSync.parse(csv, {
      columns: true,
      on_record: (record) => {
        record.latitudeN = Number.parseFloat(record.latitude)
        record.longitudeN = Number.parseFloat(record.longitude)
        record.magN = Number.parseFloat(record.mag)
        record.depthN = Number.parseFloat(record.depth)
        return record
      }
    })

    this.F.data.source = Object.freeze(source)

    //
    // Data table
    //
    const minTime = Enumerable.from(this.F.data.source).min(x => x.time)
    const maxTime = Enumerable.from(this.F.data.source).max(x => x.time)

    this.slider.min = moment(minTime).valueOf()
    this.slider.max = moment(maxTime).valueOf()
    this.slider.from = moment(minTime).valueOf()
    this.slider.to = moment(maxTime).valueOf()

    // Initial data
    const items =
        Enumerable
          .from(this.F.data.source)
          .where(x => minTime <= x.time)
          .where(x => x.time <= maxTime)
          .toArray()

    // Bind data
    this.datatable.items = items
    this.F.amcharts.imageSeries.data = items
  },
  beforeDestroy () {
    if (this.F.amcharts.chart) {
      this.F.amcharts.imageSeries = undefined
      this.F.amcharts.chart.dispose()
      this.F.amcharts.chart = undefined
    }
  },
  methods: {
    sliderDateFormat (valueOfDate) {
      return moment(valueOfDate).tz('UTC').format()
    },
    onChangeRangeSlider (slider) {
      // console.log(slider)
    },
    onUpdateRangeSlider (slider) {
      // console.log(slider)
    },
    onFinishRangeSlider (slider) {
      // Conditions
      const fromTime = moment(slider.from).tz('UTC').format()
      const toTime = moment(slider.to).tz('UTC').format()

      // Filter items
      const items =
        Enumerable
          .from(this.F.data.source)
          .where(x => fromTime <= x.time)
          .where(x => x.time <= toTime)
          .toArray()

      // Bind data
      this.datatable.items = items
      this.F.amcharts.imageSeries.data = items
    }
  },
  data () {
    return {
      F: Object.freeze({
        data: { source: undefined },
        amcharts: { chart: undefined, imageSeries: undefined }
      }),
      slider: {
        min: moment('2015-01-01T00:00:00Z').valueOf(),
        max: moment('2025-12-31T23:59:59Z').valueOf(),
        from: moment('2015-01-01T00:00:00Z').valueOf(),
        to: moment('2025-12-31T23:59:59Z').valueOf()
      },
      datatable: {
        headers: [
          { text: 'time', value: 'time' },
          { text: 'latitude', value: 'latitude' },
          { text: 'longitude', value: 'longitude' },
          { text: 'depth', value: 'depth' },
          { text: 'mag', value: 'mag' },
          { text: 'place', value: 'place' }
        ],
        items: [],
        itemsPerPage: 5
      }
    }
  }
}
</script>
