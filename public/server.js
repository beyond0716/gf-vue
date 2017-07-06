'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8000/', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// 这里配置：请求http://localhost:9090/api，
// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
var proxy = {
    path: "/api/*",
    target: "https://cnodejs.org",
    host: "cnodejs.org"
}
//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    proxy:proxy,
    // https: true,
    quiet: false,
    noInfo: false,
    watchOptions: {
        aggregateTimeout: 100,
        poll: 1000
    },
    stats: { colors: true,progress:true }
});
server.listen(8000);