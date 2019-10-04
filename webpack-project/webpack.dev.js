const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const autoprefixer = require('autoprefixer');

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];

  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

  Object.keys(entryFiles).forEach((key) => {
    const entryFile = entryFiles[key];

    const match = entryFile.match(/src\/(.*)\/index\.js/);

    const pageName = match && match[1];

    entry[pageName] = entryFiles[key];

    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
        },
      }),
    );
  });

  return {
    entry,
    htmlWebpackPlugins,
  };
};

const { entry, htmlWebpackPlugins } = setMPA();

// http://43.225.158.43/   ch1688  Mm888888

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /.css$/,
        use: [
          // "style-loader", // 不提取css文件,直接插入head
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['> 1%', 'last 2 versions'],
                }),
              ],
            },
          },
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: true
          //     // localIdentName: '[hash:base64:6]'
          //   }
          // }
        ],
      },
      {
        test: /.less$/,
        use: [
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['> 1%', 'last 2 versions'],
                }),
              ],
            },
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ],
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()].concat(
    htmlWebpackPlugins,
  ),

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  devtool: 'source-map',
};
