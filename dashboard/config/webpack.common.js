const { VueLoaderPlugin } = require('vue-loader');
const { plugins } = require('../../container/config/webpack.common');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.vue'],
  },

  module: {
    rules: [
      // ✅ Assets
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        type: 'asset/resource',
      },

      // ✅ Vue Single File Components
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      // ✅ Plain CSS (PrimeVue, PrimeFlex, PrimeIcons)
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },

      // ✅ SCSS (your Vue component styles)
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },

      // ✅ JavaScript (Vue code)
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(), // from container webpack.common
  ],
};
