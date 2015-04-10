"use strict";

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelProcessor = require('../babel-processor');

module.exports = comparestdout(execute(babelProcessor(filecheck(exercise))));
var names = [
  "Hello", "Babel", "Arrow", "Function", "Sebastian", "Mckenzie", "Yosuke"
];

module.exports.addSetup(function(mode, cb) {
  // Fisher-Yates
  var i = names.length;
  while(i) {
    var j = Math.floor(Math.random() * i);
    var t = names[--i];
    names[i] = names[j];
    names[j] = t;
  }
  this.requiredString = ['=>'];
  this.submissionArgs = this.solutionArgs = names;
  process.nextTick(cb);
});

