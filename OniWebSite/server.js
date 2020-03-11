const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const result = dotenv.config()

if (result.error) {
  throw result.error
}

app.use(express.static(path.join(__dirname, 'dist')));

const routes = require('./routes.js');
app.use('/', routes);

const PORT = result.parsed.PORT || 8080;
app.listen(PORT, function() {
  console.log(`Server Running on port ${PORT}`);
});
