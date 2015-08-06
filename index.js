#!/usr/bin/env node

require('shelljs/global');

if (!which('mc')) {
  echo('Sorry, this script requires mc, you need npm install -g moa-console!');
  exit(1);
}

// Copy files to release dir
// mkdir('-p', 'out/Release');

// console.log(npm_path)

var fs = require('fs');

var current_path = process.cwd();


mkdir('-p', current_path + '/mongoose-console');
cp('-Rf', __dirname + '/*', current_path + '/mongoose-console');
