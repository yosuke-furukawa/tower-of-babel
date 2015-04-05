"use strict";

var fs = require('fs');
var path = require('path');
var os = require("os");
var babel = require("babel-core");

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelModuleProcessor = require('../babel-module-processor');

module.exports = comparestdout(execute(babelModuleProcessor(filecheck(exercise))));
var tmpDir = path.resolve(os.tmpDir(), "_babel_" + process.pid);

module.exports.addSetup(function(mode, cb) {
  if (process.argv.length < 4) {
    console.error("USAGE: tower-of-babel run|verify <executeFile> <importFile>");
  }
  var executeFile = process.argv[3];
  var importFile = process.argv[4];
  var importFileName = path.basename(importFile);

  fs.mkdirSync(tmpDir);
  var contents = fs.readFileSync(importFile, {encoding: 'utf-8'});
  var transpiled = babel.transform(contents);
  fs.writeFileSync(tmpDir + "/" + importFileName, transpiled.code);

  var x = Math.floor(Math.random() * 100); 
  var y = Math.floor(Math.random() * 100); 
  this.submissionArgs = this.solutionArgs = [x, y];
  process.nextTick(cb);
});
