"use strict";

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelProcessor = require('../babel-processor');

module.exports = comparestdout(execute(babelProcessor(filecheck(exercise))));

var names = ['Furukawa', 'Nakajima', 'Kuwahara', 'Sora', 'Ishikawa'];
module.exports.addSetup(function(mode, cb) {
  var name = names[Math.floor(Math.random() * names.length)];
  var day = Math.floor(Math.random() * 31);
  this.submissionArgs = this.solutionArgs = [name, day];
  process.nextTick(cb);
});
