var path = require("path");
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');

module.loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel'
  }
]
module.exports = {
  //entry: "./web/static/js/app.js",
  entry: {
    a: "./web/static/js/app.js",
    b: "./deps/phoenix/web/static/js/phoenix.js",
    c: "./deps/phoenix_html/web/static/js/phoenix_html.js",
  },
  output: {
    path: "./priv/static/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          optional: ["runtime"]
        }
      }
    ],
    resolve: {
      extensions: ["", ".js", ".jsx"]
    }
  }
};
