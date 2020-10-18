<template>
  <v-container pl-12 pr-12>
    <range-slider
      :debug="true"
      skin="flat"
      type="double"
      :show_control="true"
      :play_step="3600 * 4 * 1000"
      :play_wait_min="500"
      :play_wait_max="2000"
      :play_wait="1000"
      :grid="true"
      :drag_interval="true"
      :min="slider1.min"
      :max="slider1.max"
      :from="slider1.from"
      :to="slider1.to"
      :step="3600 * 4 * 1000"
      :prettify="sliderDateFormat"
      @update="onUpdateRangeSlider"
      @finish="onFinishRangeSlider"
      v-model="slider1Model"
    />

    <v-row>
      <v-col>
        <v-text-field label="min" v-model="slider1Model.min"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="max" v-model="slider1Model.max"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="from" v-model="slider1Model.from"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="to" v-model="slider1Model.to"></v-text-field>
      </v-col>
    </v-row>

    <range-slider
      :debug="true"
      skin="flat"
      :show_control="true"
      :grid="true"
      :drag_interval="true"
      :min="slider2.min"
      :max="slider2.max"
      :from="slider2.from"
      :to="slider2.to"
      @update="onUpdateRangeSlider"
      @finish="onFinishRangeSlider"
      v-model="slider2Model"
    />

    <v-row>
      <v-col>
        <v-text-field label="min" v-model="slider2Model.min"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="max" v-model="slider2Model.max"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="from" v-model="slider2Model.from"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="to" v-model="slider2Model.to"></v-text-field>
      </v-col>
    </v-row>
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
    sliderDateFormat(valueOfDate) {
      return moment(valueOfDate).format('YYYY-MM-DD HH:mm:ss')
    },
    onFinishRangeSlider(data) {
      // console.log('onFinishRangeSlider', data)
    },
    onUpdateRangeSlider(data) {
      // console.log('onUpdateRangeSlider', data)
    }
  },
  data() {
    return {
      slider1: {
        min: moment('2020-04-01', 'YYYY-MM-DD').valueOf(),
        max: moment('2021-03-31', 'YYYY-MM-DD').valueOf(),
        from: moment('2020-07-01', 'YYYY-MM-DD').valueOf(),
        to: moment('2020-12-31', 'YYYY-MM-DD').valueOf()
      },
      slider1Model: {
        min: moment('2001-01-01', 'YYYY-MM-DD').valueOf(),
        max: moment('2020-12-31', 'YYYY-MM-DD').valueOf(),
        from: moment('2010-07-01', 'YYYY-MM-DD').valueOf(),
        to: moment('2016-12-31', 'YYYY-MM-DD').valueOf()
      },
      slider2: {
        min: 0,
        max: 100,
        from: 30,
        to: 40
      },
      slider2Model: {
        min: -200,
        max: 200,
        from: -50,
        to: 50
      }
    }
  }
}
</script>
