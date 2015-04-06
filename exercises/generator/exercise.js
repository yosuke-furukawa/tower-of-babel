"use strict";

var fs = require('fs');
var path = require('path');
var os = require("os");

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelProcessor = require('../babel-processor');

module.exports = comparestdout(execute(babelProcessor(filecheck(exercise))));
var tmpDir = path.resolve(os.tmpDir(), "_babel_" + process.pid);

module.exports.addSetup(function(mode, cb) {
  var x = Math.floor(Math.random() * 100); 
  fs.mkdirSync(tmpDir);
  fs.symlinkSync(path.resolve(__dirname + '/../../node_modules'), tmpDir + '/node_modules');
  this.submissionArgs = this.solutionArgs = [x];
  process.nextTick(cb);
});
