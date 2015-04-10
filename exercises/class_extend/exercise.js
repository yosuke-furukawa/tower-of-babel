"use strict";

var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var babelProcessor = require('../babel-processor');

module.exports = comparestdout(execute(babelProcessor(filecheck(exercise))));
var names = ['alice', 'bob', 'charlie', 'dave', 'eva'];

module.exports.addSetup(function(mode, cb) {
  var x = Math.floor(Math.random() * 100); 
  var y = Math.floor(Math.random() * 100); 
  var name = names[Math.floor(Math.random() * names.length)];
  this.requiredString = ['class', 'extends'];
  this.submissionArgs = this.solutionArgs = [x, y, name];
  process.nextTick(cb);
});
