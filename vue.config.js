module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/stuffs/'
  : '/',

  transpileDependencies: [
    'vuetify'
  ]
}
