const path = require('path');
const fs = require('fs');
const src = _path => path.resolve(__dirname, `./src/${_path}`);

const aliases = {
  '@core': src('./components/core'),
  '@src': src('./'),
  '@styled-components': src('./styled'),
};

const dirs = fs.readdirSync(src(''));
for (const dir of dirs) {
  if (fs.statSync(src(dir)).isDirectory()) {
    aliases[`@${dir}`] = src(dir);
  }
}

module.exports = aliases;
