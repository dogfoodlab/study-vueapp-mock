<template>
  <div>
    <input ref="slider" />
  </div>
</template>

<script>
import $ from 'jquery'
import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'

const config = Object.freeze({
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
    skin (val) { this.update('skin', val) },
    type (val) { this.update('type', val) },
    min (val) { this.update('min', val) },
    max (val) { this.update('max', val) },
    from (val) { this.update('from', val) },
    to (val) { this.update('to', val) },
    step (val) { this.update('step', val) },
    min_interval (val) { this.update('min_interval', val) },
    max_interval (val) { this.update('max_interval', val) },
    drag_interval (val) { this.update('drag_interval', val) },
    values (val) { this.update('values', val) },
    from_fixed (val) { this.update('from_fixed', val) },
    from_min (val) { this.update('from_min', val) },
    from_max (val) { this.update('from_max', val) },
    from_shadow (val) { this.update('from_shadow', val) },
    to_fixed (val) { this.update('to_fixed', val) },
    to_min (val) { this.update('to_min', val) },
    to_max (val) { this.update('to_max', val) },
    to_shadow (val) { this.update('to_shadow', val) },
    prettify_enabled (val) { this.update('prettify_enabled', val) },
    prettify_separator (val) { this.update('prettify_separator', val) },
    prettify (val) { this.update('prettify', val) },
    force_edges (val) { this.update('force_edges', val) },
    keyboard (val) { this.update('keyboard', val) },
    grid (val) { this.update('grid', val) },
    grid_margin (val) { this.update('grid_margin', val) },
    grid_num (val) { this.update('grid_num', val) },
    grid_snap (val) { this.update('grid_snap', val) },
    hide_min_max (val) { this.update('hide_min_max', val) },
    hide_from_to (val) { this.update('hide_from_to', val) },
    prefix (val) { this.update('prefix', val) },
    postfix (val) { this.update('postfix', val) },
    max_postfix (val) { this.update('max_postfix', val) },
    decorate_both (val) { this.update('decorate_both', val) },
    values_separator (val) { this.update('values_separator', val) },
    input_values_separator (val) { this.update('input_values_separator', val) },
    disable (val) { this.update('disable', val) },
    block (val) { this.update('block', val) },
    extra_classes (val) { this.update('extra_classes', val) },
    scope (val) { this.update('scope', val) }
  },
  props: {
    width: { type: String, default: undefined },
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
        this.$emit('start', data)
      },
      onChange: (data) => {
        delete data.input
        delete data.slider
        this.$emit('change', data)
      },
      onFinish: (data) => {
        delete data.input
        delete data.slider
        this.$emit('finish', data)
      },
      onUpdate: (data) => {
        delete data.input
        delete data.slider
        this.$emit('update', data)
      }
    })
    this.F.slider.component = $(this.$refs.slider).data('ionRangeSlider')
  },
  beforeDestroy () {
    if (this.F.slider.component) {
      this.F.slider.component.destroy()
    }
  },
  data () {
    return {
      F: Object.freeze({
        slider: { component: undefined }
      })
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
  methods: {
    update (prop, val) {
      this.F.slider.component.update({ [prop]: val })
    }
  }
}
</script>
