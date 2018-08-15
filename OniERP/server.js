var express = require('express');
var app = express(); 

// serves files from the root directory
app.use(express.static(__dirname + "/dist"));
// app.use(app.router);

app.listen(3000, function () {    
  console.log('Listening at http://localhost:3000');  
});