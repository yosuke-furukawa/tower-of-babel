"use strict";

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelProcessor = require('../babel-processor');

module.exports = comparestdout(execute(babelProcessor(filecheck(exercise))));

module.exports.addSetup(function(mode, cb) {
  var args = "";
  for (var i = 0; i < 100; i++) {
    args += Math.floor(Math.random() * 100) + ","; 
  }
  args = args.substring(0, args.length - 1);
  this.requiredString = ['...'];
  this.submissionArgs = this.solutionArgs = [args];
  process.nextTick(cb);
});
