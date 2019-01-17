const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  const baseConfig = {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
  }
  return [
    {
      entry: './app1',
      output: {path: path.resolve(__dirname, 'dist'), filename: 'out1.js'},
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '1-[name].css',
          chunkFilename: '1-[id].css',
        }),
      ],
      ...baseConfig,
    },
    {
      entry: './app2',
      output: {path: path.resolve(__dirname, 'dist'), filename: 'out2.js'},
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '2-[name].css',
          chunkFilename: '2-[id].css',
        }),
      ],
      ...baseConfig,
    },
    {
      entry: './app3',
      output: {path: path.resolve(__dirname, 'dist'), filename: 'out3.js'},
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '3-[name].css',
          chunkFilename: '3-[id].css',
        }),
      ],
      ...baseConfig,
    },
  ]
}
