<template>
  <v-container>
    <range-slider
      skin="flat"
      type="double"
      :grid="true"
      :drag_interval="true"
      :min="slider.min"
      :max="slider.max"
      :from="slider.from"
      :to="slider.to"
      :prettify="val => formatDate(val)"
      @change="onChangeRangeSlider"
      @update="onUpdateRangeSlider"
    />
  </v-container>
</template>

<script>
import moment from 'moment'
import RangeSlider from '@/views/misc/components/RangeSlider'

export default {
  components: {
    'range-slider': RangeSlider
  },
  mounted () {
  },
  methods: {
    onChangeRangeSlider (data) {
      // console.log(data)
    },
    onUpdateRangeSlider (data) {
      // console.log(new Date(value))
    },
    formatDate (value) {
      return moment(new Date(value)).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  data () {
    return {
      slider: {
        min: moment('2020-1-1', 'YYYY-MM-DD').toDate().valueOf(),
        max: moment('2020-3-31', 'YYYY-MM-DD').toDate().valueOf(),
        from: moment('2020-2-1', 'YYYY-MM-DD').toDate().valueOf(),
        to: moment('2020-3-1', 'YYYY-MM-DD').toDate().valueOf()
      }
    }
  }
}
</script>
