const express = require('express');
const app = express(); 
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

const routes = require('./routes.js');
app.use('/', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {    
  console.log(`Server Running on port ${PORT}`);  
});