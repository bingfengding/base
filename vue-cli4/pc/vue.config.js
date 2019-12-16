
const path = require('path');
const tinyPngWebpackPlugin = require('tinypng-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  publicPath: "./",    // 公共路径
  outputDir: process.env.VUE_APP_TITLE == "test" ? 'distTest' : 'distProd', // 不同的环境打不同包名
  css: {  // 一次配置，全局使用，这个scss 因为每个文件都要引入
    // extract: true,
    sourceMap: false,
    loaderOptions: {
      // sass: {
      //   data: `@import "./src/assets/hotcss/px2rem.scss";`
      // }
    }
  },
  lintOnSave: false,  // 关闭eslint
  productionSourceMap: false,  // map文件
  devServer: {
    port: 8999, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: 'https://admin.oegggo.com/'  // 配置跨域处理,只有一个代理
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // },  // 配置多个代理
  },
  configureWebpack: config => {  // 覆盖webpack默认配置的都在这里
    config.resolve.alias = {
      '@': path.resolve(__dirname, './src'),
      '@s': path.resolve(__dirname, './src/assets/style'),
      '@i': path.resolve(__dirname, './src/assets/images'),
      '@a': path.resolve(__dirname, './src/api'),
      '@u': path.resolve(__dirname, './src/utils'),
    }
    if (process.env.NODE_ENV === "production") {
      config.mode = 'production'
      config.plugins.push(new tinyPngWebpackPlugin({
        key: "WCFG8qPvxbNwjl51mm4bF4r5Tx6QrmvD"
      }))
      if (process.env.VUE_APP_TITLE === "prod") {
        // config.plugins.push(new CompressionPlugin({
        //   test: /\.js$|\.html$|.\css/, //匹配文件名
        //   threshold: 10240,//对超过10k的数据压缩
        //   deleteOriginalAssets: false //不删除源文件
        // }))
      }
    } else {
      config.mode = 'development'
    }
  },
}