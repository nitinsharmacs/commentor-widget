const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const plugins = [new MiniCssExtractPlugin({filename: 'commentor.css'})];

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: 'commentor.js',
    path: path.resolve('./build'),
    clean: true,
    publicPath: '',
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
  },
  plugins,
  mode: 'production',
  optimization: {},
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
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
