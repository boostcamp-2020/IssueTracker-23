const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const clientPort = process.env.PORT || 9000;

const config = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true, // 코드 최적화
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],

  devServer: {
    host: 'localhost',
    port: clientPort,
    open: true, // open page when start
  },

  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Route': path.resolve(__dirname, 'src/route/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Public': path.resolve(__dirname, 'public/'),
      '@Config': path.resolve(__dirname, 'src/config/'),
      '@Stores': path.resolve(__dirname, 'src/store/stores/'),
    },
  },
};

module.exports = (env, options) => {
  if (options.mode === 'development') {
    config.devtool = 'source-map';
  }
  return config;
};
