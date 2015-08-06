#!/usr/bin/env node

require('shelljs/global');

var child_process = require('child_process');


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
// cp('-Rf', __dirname + '/*', current_path + '/mongoose-console');

child_process.exec('cp -rf '+ __dirname + '/*' +' ' + current_path + '/mongoose-console',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});