const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const destination = path.resolve(__dirname, 'dist');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'none',
  context: __dirname,
  entry: `${src}/index.js`,
  output: {
    filename: `[contentHash].js`,
    path: destination,
    libraryTarget: 'this',
  },
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: isProduction
            ? false
            : {
                warnings: true,
                drop_console: false,
                drop_debugger: false,
              },
          mangle: {},
          output: {
            beautify: !isProduction,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
          failOnError: false,
          fix: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/**/*.html',
          flatten: true,
          to: destination,
        },
        {
          from: './appsscript.json',
          to: destination,
        },
      ],
    }),
    new GasPlugin(),
  ],
};
