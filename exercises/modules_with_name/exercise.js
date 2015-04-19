"use strict";

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelProcessor = require('../babel-processor');

module.exports = comparestdout(execute(babelProcessor(filecheck(exercise))));

module.exports.addSetup(function(mode, cb) {
  if (process.argv.length !== 5) {
    console.error("USAGE: tower-of-babel run|verify <executeFile> <importFile>");
    throw new Error("invalid arguments");
  }
  this.submissionImportFile = process.argv[4];
  this.requireImportString = ['export'];
  var x = Math.floor(Math.random() * 100); 
  var y = Math.floor(Math.random() * 100); 
  this.requiredString = ['import'];
  this.submissionArgs = this.solutionArgs = [x, y];
  process.nextTick(cb);
});
