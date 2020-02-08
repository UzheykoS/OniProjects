const path = require('path');
const fs = require('fs');
const src = _path => path.resolve(__dirname, `../src/${_path}`);

const aliases = {
  '@common': src('./components/common'),
  '@src': src('./'),
};

const dirs = fs.readdirSync(src(''));
for (let dir of dirs) {
  if (fs.statSync(src(dir)).isDirectory()) {
    aliases[dir] = src(dir);
    aliases[`@${dir}`] = src(dir);
  }
}

module.exports = aliases;
