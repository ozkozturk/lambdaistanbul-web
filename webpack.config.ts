import * as path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { ForkTsCheckerWebpackPlugin } from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin';

require('dotenv').config();

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  entry: ['react-hot-loader/patch', path.join(__dirname, 'src', 'index.tsx')],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: `http://localhost:${process.env.PORT}/`,
  },
  target: 'web',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts(x?)$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(sv|jp|pn)g$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Lambdaistanbul Web',
      template: 'src/templates/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    hot: true,
    port: parseInt(process.env.PORT, 10),
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
    liveReload: true,
    watchOptions: {
      ignored: '**/node_modules/**',
      aggregateTimeout: 100,
      poll: 200,
    },
  },
  devtool: '#@cheap-module-eval-source-map',
};

export default config;
