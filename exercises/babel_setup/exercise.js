"use strict";

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelProcessor = require('../babel-processor');

module.exports = comparestdout(execute(babelProcessor(filecheck(exercise))));

var names = ['ES6', 'Babel', '6to5', 'transpiler', 'ES2015'];
module.exports.addSetup(function(mode, cb) {
  var name = names[Math.floor(Math.random() * names.length)];
  this.requiredString = ['`', '$'];
  this.submissionArgs = this.solutionArgs = [name];
  process.nextTick(cb);
});
