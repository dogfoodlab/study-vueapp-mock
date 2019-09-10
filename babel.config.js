module.exports = {
  presets: [
  ],
  env: {
    production: {
      presets: [
        '@vue/app'
      ]
    },
    development: {
      presets: [
        '@vue/app'
      ]
    },
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }]
      ]
    }
  }
}
