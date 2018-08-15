var express = require('express');
var app = express(); 

// serves files from the root directory
app.use(express.static(__dirname + "/dist"));
// app.use(app.router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {    
  console.log('Listening at http://localhost:3000');  
});



// Webpack Dev Server for Hot module reloading
// Comment it out during production
// const webpack = require(`webpack`);
// const WebpackDevServer = require(`webpack-dev-server`);
// const config = require(`./webpack.dev`);

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true,
//   stats: {colors: true}
// }).listen(3001, `localhost`, function (err, result) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log(`Listening at http://localhost:3001/`);
// });