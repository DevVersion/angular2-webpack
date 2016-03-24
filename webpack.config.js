module.exports = {
  debug: true,

  entry: {
    app: "./app/boot"
  },

  output: {
    path: __dirname + "/", 
    filename: "[name].js" 
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
        { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/}
    ]
  }
};