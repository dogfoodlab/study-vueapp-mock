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
  methods: {
    sliderDateFormat (valueOfDate) {
      return moment(valueOfDate).format('YYYY-MM-DD HH:mm:ss')
    },
    onChangeRangeSlider (slider) {
      // console.log(slider)
    },
    onUpdateRangeSlider (slider) {
      // console.log(slider)
    }
  },
  data () {
    return {
      slider: {
        min: moment('2020-04-01', 'YYYY-MM-DD').valueOf(),
        max: moment('2021-03-31', 'YYYY-MM-DD').valueOf(),
        from: moment('2020-07-01', 'YYYY-MM-DD').valueOf(),
        to: moment('2020-12-31', 'YYYY-MM-DD').valueOf()
      }
    }
  }
}
</script>
