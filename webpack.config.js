var path = require("path");
var webpack = require("webpack");

const context = path.resolve(__dirname, 'webpack_src');

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

plugins = plugins.concat(process.env.NODE_ENV === 'production'
  ? prodPlugins
  : devPlugins);

// include plugins config
module.exports = {
  context: __dirname,
  entry: "./webpack_src/Root.js",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    rules: [
      {
        include: path.resolve(__dirname, './webpack_src'),
        loader: 'babel-loader',
        query: {
          plugins: [
            '@babel/transform-react-jsx',
            [
              'react-css-modules',
              {
                context
              }
            ]
          ]
        },
        test: /\.(js|jsx)$/
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
