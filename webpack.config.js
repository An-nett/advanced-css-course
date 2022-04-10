const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './index.js',
    natours: './Natours/natours.js',
    trillo: './Trillo/trillo.js',
    nexter: './Nexter/nexter.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'Natours/index.html',
      template: './Natours/index.html',
      chunks: ['natours'],
    }),
    new HtmlWebpackPlugin({
      filename: 'Trillo/index.html',
      template: './Trillo/index.html',
      chunks: ['trillo'],
    }),
    new HtmlWebpackPlugin({
      filename: 'Nexter/index.html',
      template: './Nexter/index.html',
      chunks: ['nexter'],
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'Natours/img'),
          to: path.resolve(__dirname, 'dist/Natours/img'),
        },
        {
          from: path.resolve(__dirname, 'Trillo/img'),
          to: path.resolve(__dirname, 'dist/Trillo/img'),
        },
        {
          from: path.resolve(__dirname, 'Nexter/img'),
          to: path.resolve(__dirname, 'dist/Nexter/img'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
