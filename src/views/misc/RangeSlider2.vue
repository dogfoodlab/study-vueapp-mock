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

export default {
  components: {
    'range-slider': RangeSlider
  },
  async mounted () {
    const response = await axios.get('/data/Earthquake201912.csv')
    const csv = response.data
    const source = csvSync.parse(csv, { columns: true })
    this.F.data.source = source

    const minTime = Enumerable.from(this.F.data.source).min(x => x.time)
    const maxTime = Enumerable.from(this.F.data.source).max(x => x.time)

    this.slider.min = moment(minTime).valueOf()
    this.slider.max = moment(maxTime).valueOf()
    this.slider.from = moment(minTime).valueOf()
    this.slider.to = moment(maxTime).valueOf()

    const items =
        Enumerable
          .from(this.F.data.source)
          .where(x => minTime <= x.time)
          .where(x => x.time <= maxTime)
          .toArray()

    this.datatable.items = items
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
      const fromTime = moment(slider.from).tz('UTC').format()
      const toTime = moment(slider.to).tz('UTC').format()

      const items =
        Enumerable
          .from(this.F.data.source)
          .where(x => fromTime <= x.time)
          .where(x => x.time <= toTime)
          .toArray()

      this.datatable.items = items
    }
  },
  data () {
    return {
      F: Object.freeze({
        data: { source: undefined }
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
        itemsPerPage: 15
      }
    }
  }
}
</script>
