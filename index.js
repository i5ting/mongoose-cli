#!/usr/bin/env node

require('shelljs/global');
var fs = require('fs');
var current_path = process.cwd();
var child_process = require('child_process');

if (!which('mc')) {
  echo('Sorry, this script requires mc, you need npm install -g moa-console!');
  exit(1);
}

mkdir('-p', current_path + '/mongoose-console');
// cp('-Rf', __dirname + '/*', current_path + '/mongoose-console');

child_process.exec('cp -rf '+ __dirname + '/*' +' ' + current_path + '/mongoose-console',
  function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});