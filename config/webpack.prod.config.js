const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(config, {
 
  plugins: [
    new CleanWebpackPlugin() //打包前删除build文件夹下文件
  ]
});
