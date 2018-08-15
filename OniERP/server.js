var express = require('express');
var app = express(); 

// serves files from the root directory
app.use(express.static(__dirname + "/dist"));
// app.use(app.router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {    
  console.log('Listening at http://localhost:3000');  
});