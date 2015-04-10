"use strict";

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelProcessor = require('../babel-processor');

module.exports = comparestdout(execute(babelProcessor(filecheck(exercise))));

module.exports.addSetup(function(mode, cb) {
  var x = Math.floor(Math.random() * 100); 
  var y = Math.floor(Math.random() * 100); 
  this.requiredString = ['let', 'const'];
  this.submissionArgs = this.solutionArgs = [x, y];
  process.nextTick(cb);
});
