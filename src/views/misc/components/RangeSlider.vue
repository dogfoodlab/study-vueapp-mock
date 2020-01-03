<template>
  <div>
    <v-container
      ma-0
      pa-0
    >
      <input ref="slider" />
    </v-container>
    <v-container
      ma-0
      pa-0
      v-show="show_control"
    >
      <v-row>
        <v-col cols="auto">
          <v-btn
            outlined
            small
            color="grey"
            @click="togglePlaySlider"
          >
            <v-icon small>{{ internal.isPlaying ? internal.icons.pause : internal.icons.play }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-slider
            label="speed"
            dense
            color="grey lighten-1"
            track-color="grey lighten-1"
            :min="internal.playSpeedMin"
            :max="internal.playSpeedMax"
            v-model="internal.playSpeed"
          ></v-slider>
        </v-col>
      </v-row>
      {{ internal }}
    </v-container>
  </div>
</template>

<script>
import $ from 'jquery'
import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'

const config = Object.freeze({
  // Including Ion.RangeSlider code

  // Ion.RangeSlider
  // version 2.3.1 Build: 382
  // © Denis Ineshin, 2019
  // https://github.com/IonDen
  // Released under MIT licence:

  skin: 'flat',
  type: 'single',

  min: 10,
  max: 100,
  from: null,
  to: null,
  step: 1,

  min_interval: 0,
  max_interval: 0,
  drag_interval: false,

  values: [],
  p_values: [],

  from_fixed: false,
  from_min: null,
  from_max: null,
  from_shadow: false,

  to_fixed: false,
  to_min: null,
  to_max: null,
  to_shadow: false,

  prettify_enabled: true,
  prettify_separator: ' ',
  prettify: null,

  force_edges: false,

  keyboard: true,

  grid: false,
  grid_margin: true,
  grid_num: 4,
  grid_snap: false,

  hide_min_max: false,
  hide_from_to: false,

  prefix: '',
  postfix: '',
  max_postfix: '',
  decorate_both: true,
  values_separator: ' — ',

  input_values_separator: ';',

  disable: false,
  block: false,

  extra_classes: '',

  scope: null,
  onStart: null,
  onChange: null,
  onFinish: null,
  onUpdate: null
})

export default {
  watch: {
    width (val) { this.$el.style.width = this.computedWidth },
    play_step (val) { this.internal.playStep = val },
    play_wait_min (val) { this.internal.playSpeedMax = -1 * val },
    play_wait_max (val) { this.internal.playSpeedMin = -1 * val },
    play_wait (val) { this.internal.playSpeed = -1 * val },
    //
    skin (val) { this.updateSlider('skin', val) },
    type (val) { this.updateSlider('type', val) },
    min (val) { this.updateSlider('min', val) },
    max (val) { this.updateSlider('max', val) },
    from (val) { this.updateSlider('from', val) },
    to (val) { this.updateSlider('to', val) },
    step (val) { this.updateSlider('step', val) },
    min_interval (val) { this.updateSlider('min_interval', val) },
    max_interval (val) { this.updateSlider('max_interval', val) },
    drag_interval (val) { this.updateSlider('drag_interval', val) },
    values (val) { this.updateSlider('values', val) },
    from_fixed (val) { this.updateSlider('from_fixed', val) },
    from_min (val) { this.updateSlider('from_min', val) },
    from_max (val) { this.updateSlider('from_max', val) },
    from_shadow (val) { this.updateSlider('from_shadow', val) },
    to_fixed (val) { this.updateSlider('to_fixed', val) },
    to_min (val) { this.updateSlider('to_min', val) },
    to_max (val) { this.updateSlider('to_max', val) },
    to_shadow (val) { this.updateSlider('to_shadow', val) },
    prettify_enabled (val) { this.updateSlider('prettify_enabled', val) },
    prettify_separator (val) { this.updateSlider('prettify_separator', val) },
    // prettify (val) { this.updateSlider('prettify', val) },
    force_edges (val) { this.updateSlider('force_edges', val) },
    keyboard (val) { this.updateSlider('keyboard', val) },
    grid (val) { this.updateSlider('grid', val) },
    grid_margin (val) { this.updateSlider('grid_margin', val) },
    grid_num (val) { this.updateSlider('grid_num', val) },
    grid_snap (val) { this.updateSlider('grid_snap', val) },
    hide_min_max (val) { this.updateSlider('hide_min_max', val) },
    hide_from_to (val) { this.updateSlider('hide_from_to', val) },
    prefix (val) { this.updateSlider('prefix', val) },
    postfix (val) { this.updateSlider('postfix', val) },
    max_postfix (val) { this.updateSlider('max_postfix', val) },
    decorate_both (val) { this.updateSlider('decorate_both', val) },
    values_separator (val) { this.updateSlider('values_separator', val) },
    input_values_separator (val) { this.updateSlider('input_values_separator', val) },
    disable (val) { this.updateSlider('disable', val) },
    block (val) { this.updateSlider('block', val) },
    extra_classes (val) { this.updateSlider('extra_classes', val) },
    scope (val) { this.updateSlider('scope', val) }
  },
  props: {
    width: { type: String, default: undefined },
    show_control: { type: Boolean, default: false },
    play_step: { type: Number, default: 1 },
    play_wait_min: { type: Number, default: 1000 },
    play_wait_max: { type: Number, default: 3000 },
    play_wait: { type: Number, default: 2000 },
    //
    skin: { type: String, default: config['skin'] },
    type: { type: String, default: config['type'] },
    min: { type: Number, default: config['min'] },
    max: { type: Number, default: config['max'] },
    from: { type: Number, default: config['from'] },
    to: { type: Number, default: config['to'] },
    step: { type: Number, default: config['step'] },
    min_interval: { type: Number, default: config['min_interval'] },
    max_interval: { type: Number, default: config['max_interval'] },
    drag_interval: { type: Boolean, default: config['drag_interval'] },
    values: { type: Array, default: () => config['values'] },
    from_fixed: { type: Boolean, default: config['from_fixed'] },
    from_min: { type: Number, default: config['from_min'] },
    from_max: { type: Number, default: config['from_max'] },
    from_shadow: { type: Boolean, default: config['from_shadow'] },
    to_fixed: { type: Boolean, default: config['to_fixed'] },
    to_min: { type: Number, default: config['to_min'] },
    to_max: { type: Number, default: config['to_max'] },
    to_shadow: { type: Boolean, default: config['to_shadow'] },
    prettify_enabled: { type: Boolean, default: config['prettify_enabled'] },
    prettify_separator: { type: String, default: config['prettify_separator'] },
    prettify: { type: Function, default: config['prettify'] },
    force_edges: { type: Boolean, default: config['force_edges'] },
    keyboard: { type: Boolean, default: config['keyboard'] },
    grid: { type: Boolean, default: config['grid'] },
    grid_margin: { type: Boolean, default: config['grid_margin'] },
    grid_num: { type: Number, default: config['grid_num'] },
    grid_snap: { type: Boolean, default: config['grid_snap'] },
    hide_min_max: { type: Boolean, default: config['hide_min_max'] },
    hide_from_to: { type: Boolean, default: config['hide_from_to'] },
    prefix: { type: String, default: config['prefix'] },
    postfix: { type: String, default: config['postfix'] },
    max_postfix: { type: String, default: config['max_postfix'] },
    decorate_both: { type: Boolean, default: config['decorate_both'] },
    values_separator: { type: String, default: config['values_separator'] },
    input_values_separator: { type: String, default: config['input_values_separator'] },
    disable: { type: Boolean, default: config['disable'] },
    block: { type: Boolean, default: config['block'] },
    extra_classes: { type: String, default: config['extra_classes'] },
    scope: { type: Object, default: () => config['scope'] }
  },
  mounted () {
    this.$el.style.width = this.computedWidth

    $(this.$refs.slider).ionRangeSlider({
      skin: this.skin,
      type: this.type,
      min: this.min,
      max: this.max,
      from: this.from,
      to: this.to,
      step: this.step,
      min_interval: this.min_interval,
      max_interval: this.max_interval,
      drag_interval: this.drag_interval,
      values: this.values,
      from_fixed: this.from_fixed,
      from_min: this.from_min,
      from_max: this.from_max,
      from_shadow: this.from_shadow,
      to_fixed: this.to_fixed,
      to_min: this.to_min,
      to_max: this.to_max,
      to_shadow: this.to_shadow,
      prettify_enabled: this.prettify_enabled,
      prettify_separator: this.prettify_separator,
      prettify: this.prettify,
      force_edges: this.force_edges,
      keyboard: this.keyboard,
      grid: this.grid,
      grid_margin: this.grid_margin,
      grid_num: this.grid_num,
      grid_snap: this.grid_snap,
      hide_min_max: this.hide_min_max,
      hide_from_to: this.hide_from_to,
      prefix: this.prefix,
      postfix: this.postfix,
      max_postfix: this.max_postfix,
      decorate_both: this.decorate_both,
      values_separator: this.values_separator,
      input_values_separator: this.input_values_separator,
      disable: this.disable,
      block: this.block,
      extra_classes: this.extra_classes,
      scope: this.scope,
      onStart: (data) => {
        delete data.input
        delete data.slider
        this.updateInternal(data)
        this.$emit('start', data)
        // console.log('onStart')
      },
      onChange: (data) => {
        this.internal.isPlaying = false
        delete data.input
        delete data.slider
        this.updateInternal(data)
        this.$emit('change', data)
        // console.log('onChange')
      },
      onFinish: (data) => {
        delete data.input
        delete data.slider
        this.updateInternal(data)
        this.$emit('finish', data)
        // console.log('onFinish')
      },
      onUpdate: (data) => {
        delete data.input
        delete data.slider
        this.updateInternal(data)
        this.$emit('update', data)
        // console.log('onUpdate')
      }
    })
    this.F.slider.component = $(this.$refs.slider).data('ionRangeSlider')
  },
  beforeDestroy () {
    if (this.F.slider.component) {
      this.F.slider.component.destroy()
    }
  },
  methods: {
    updateSlider (prop, val) {
      this.F.slider.component.update({ [prop]: val })
    },
    updateInternal (data) {
      this.internal.min = data.min
      this.internal.max = data.max
      this.internal.from = data.from
      this.internal.to = data.to
    },
    togglePlaySlider () {
      if (this.internal.isPlaying === true) {
        this.internal.isPlaying = false
        return
      }

      const data = this.F.slider.component.result

      this.updateInternal({
        min: data.min,
        max: data.max,
        from: data.from,
        to: data.to
      })

      this.internal.isPlaying = true

      this.playSlider()
    },
    playSlider () {
      setTimeout(() => {
        if (this.internal.isPlaying === false) {
          return
        }

        let newFrom = this.internal.from + this.internal.playStep
        let newTo = this.internal.to + this.internal.playStep

        if (this.internal.max <= newTo) {
          const diff = newTo - newFrom
          newTo = this.internal.max
          newFrom = newTo - diff
          this.internal.isPlaying = false
        }

        this.internal.from = newFrom
        this.internal.to = newTo

        this.F.slider.component.update({
          from: this.internal.from,
          to: this.internal.to
        })

        // console.log('playSlider')

        this.playSlider()
      }, -1 * this.internal.playSpeed)
    }
  },
  computed: {
    computedWidth () {
      if (typeof this.width === 'undefined') {
        return this.width
      }
      if (Number.isNaN(Number(this.width))) {
        return this.width
      }
      return this.width + 'px'
    }
  },
  data () {
    return {
      F: Object.freeze({
        slider: {
          component: undefined
        }
      }),
      internal: {
        min: this.min,
        max: this.max,
        from: this.from,
        to: this.to,
        isPlaying: false,
        playStep: this.play_step,
        playSpeedMin: -1 * this.play_wait_max,
        playSpeedMax: -1 * this.play_wait_min,
        playSpeed: -1 * this.play_wait,
        icons: Object.freeze({ play: 'mdi-play', pause: 'mdi-pause' })
      }
    }
  }
}
</script>
