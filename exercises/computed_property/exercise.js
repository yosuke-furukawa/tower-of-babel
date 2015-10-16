"use strict";

import exercise       from 'workshopper-exercise';
import filecheck      from 'workshopper-exercise/filecheck';
import execute        from 'workshopper-exercise/execute';
import comparestdout  from 'workshopper-exercise/comparestdout';
import babelProcessor from '../babel-processor';

var obj = comparestdout(execute(babelProcessor(filecheck(exercise()))));

obj.addSetup(function(mode, cb) {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);
  this.submissionArgs = this.solutionArgs = [x, y];
  process.nextTick(cb);
});

export default obj;
