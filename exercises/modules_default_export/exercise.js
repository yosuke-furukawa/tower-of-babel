"use strict";

import exercise       from 'workshopper-exercise';
import filecheck      from 'workshopper-exercise/filecheck';
import execute        from 'workshopper-exercise/execute';
import comparestdout  from 'workshopper-exercise/comparestdout';
import babelProcessor from '../babel-processor';

var obj = comparestdout(execute(babelProcessor(filecheck(exercise()))));

obj.addSetup(function(mode, cb) {
  if (process.argv.length !== 5) {
    console.error("USAGE: tower-of-babel run|verify <executeFile> <importFile>");
    throw new Error("invalid arguments");
  }
  this.submissionImportFile = process.argv[4];
  this.requireImportString = ['export', 'default'];
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);
  this.submissionArgs = this.solutionArgs = [x, y];
  this.requiredString = ['import'];
  process.nextTick(cb);
});

export default obj;
