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

module.exports.addSetup(function(mode, cb) {
  var x = Math.floor(Math.random() * 100); 
  this.requiredString = ['Symbol.iterator'];
  this.submissionArgs = this.solutionArgs = [x];
  process.nextTick(cb);
});
