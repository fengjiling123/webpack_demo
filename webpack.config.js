const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "./src/index.js")
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "js/[name].js"
  },
  devServer: {
    contentBase: "./build"
  },
  resolve: {
    alias: { "@": "./src" }, //配置别名，映射导入路径
    extensions: [".js", ".jsx"]
    // modules:['./src/components','node_modules'], //Webpack 去哪些目录下寻找第三方模块
    // descriptionFiles: ['package.json'], //配置描述第三方模块的文件名称，也就是  package.json  文件。默认package.json
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: "pre", // ？？？
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" }, //style-loader 将css最终写入html文件
          {
            loader: "css-loader", //用于在js中require、import 等方法引入css
            options: {
              modules: false, //是否开启css-modules模式，默认false  true时css不生效？？？
              localIdentName: "[name]-[local]-[hash:base64:5]" //设置css-modules模式下local类名的命名
            }
          },
          {
            loader: "postcss-loader", //将css加上浏览器hack
            options: {
              plugins: loader => {
                require("autoprefixer"); //浏览器兼容
              }
            }
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("测试webpack搭建"),
    new HtmlWebpackPlugin({
      template: "./index.html", //源模板文件
      // favicon:'', //指定页面图标
      filename: "index.html", //输出文件路径  相对于webpackConfig.output.path路径而言的
      inject: "body", //1.true或者body：所有JavaScript资源插入到body元素的底部 2.header 3.false 不插入
      hash: true,
      cache: true, //是否需要缓存
      // chunks: ["main"], //设置引入木块，不设置时默认引入全部
      // excludeChunks:[], //排除的模板
      minify: {
        removeComments: true, //去除注释
        caseSensitive: false, //大小写不明感
        removeEmptyAttributes: true, //去除空属性
        collapseWhitespace: true //去除空格
      }
    })
  ]
};
