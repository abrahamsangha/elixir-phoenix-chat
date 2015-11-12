var path = require("path");
var join = path.join;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {

  entry: {
    a: "./web/static/js/app.js",
  },

  output: {
    path: "./priv/static/js",
    filename: "bundle.js"
  },

  resolve: {
    packageMains: ['webpack', 'browser', 'web', 'style', 'main'],
    extensions: ["", ".js", ".jsx"],
    alias: {
      phoenix: join(__dirname, 'deps/phoenix/web/static/js/phoenix.js'),
      phoenix_html: join(__dirname, 'deps/phoenix_html/web/static/js/phoenix_html.js')
    }

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
