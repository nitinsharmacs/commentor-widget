const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'static/js/[name].[contenthash].bundle.js',
    chunkFilename: 'static/js/chunk.[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      minify: true,
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].bundle.css',
    }),
  ],
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 1024 * 50, // 3kb
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
    ],
  },
};
