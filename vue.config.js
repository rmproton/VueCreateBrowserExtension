const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    }
  },
  configureWebpack: {
    devtool: 'cheap-module-source-map'
  }
})
