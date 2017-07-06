var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      // excluding some local linked packages.
      // for normal use cases only node_modules is needed.
      exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      loader: 'babel'
    }, {
      test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash:7]'
      }
    }]
  },
  resolve: {
    root: [path.join(__dirname, '../node_modules')],
    modulesDirectories: ['.', 'node_modules'],
    fallback: [path.join(__dirname, '../node_modules')],
    extensions: ['', '.js', '.vue'],
    alias: {
      'api': 'src/core/api.js',
      'tool': 'src/core/tool.js',
      'ui': 'src/core/ui.js'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  externals: {
    'jquery': 'jQuery',
    'react': 'React',
    'dialog': 'dialog'
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  // vue-loader configurations
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      // you can also include <style lang="less"> or other langauges
      less: ExtractTextPlugin.extract("css!less")
    },
    // configure autoprefixer
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
