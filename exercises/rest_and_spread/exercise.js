"use strict";

import exercise       from 'workshopper-exercise';
import filecheck      from 'workshopper-exercise/filecheck';
import execute        from 'workshopper-exercise/execute';
import comparestdout  from 'workshopper-exercise/comparestdout';
import babelProcessor from '../babel-processor';

var obj = comparestdout(execute(babelProcessor(filecheck(exercise()))));

obj.addSetup(function(mode, cb) {
  var args = "";
  for (var i = 0; i < 100; i++) {
    args += Math.floor(Math.random() * 100) + ",";
  }
  args = args.substring(0, args.length - 1);
  this.requiredString = ['...'];
  this.submissionArgs = this.solutionArgs = [args];
  process.nextTick(cb);
});

export default obj;
