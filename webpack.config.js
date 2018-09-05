let path = require('path');


let conf = {
  // here we point wppack where to take initial script 
  entry: './src/index.js',
  // point of exit 
  output: {
    // where we are going to put the script
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    // this will point the wp-server to the vitual file that needs to be loaded and will work without dist folder untill we fun build agaain to create one
    publicPath: 'dist/'
  }, 
  // will dispaly the error as overlay so we do not have to look for it with devtools
  devServer: {
    overlay: true
  }, 
  // here we can include css less etc ... here we declere whick extension what it will do
  module: {
    rules: [
      {
          test: /\.js$/,
          // we installed below and can find in devdepnd in the pck.json file 
          loader: 'babel-loader',
          // if we bring the ready code from node that has been babeled we do not need to run it again ! it's not nessesary
          exclude: '/node_modules/'
      }
    ]
  }
};

module.exports = conf;