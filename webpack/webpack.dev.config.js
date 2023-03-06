const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./build'),
    clean: true,
    publicPath: '',
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    static: './build',
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Commentor',
      inject: 'body',
      template: './public/index.html',
      minify: false,
    }),
  ],
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
