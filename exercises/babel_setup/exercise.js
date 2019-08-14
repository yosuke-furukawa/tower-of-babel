"use strict";

import exercise       from 'workshopper-exercise';
import filecheck      from 'workshopper-exercise/filecheck';
import execute        from 'workshopper-exercise/execute';
import comparestdout  from 'workshopper-exercise/comparestdout';
import babelProcessor from '../babel-processor';

var obj = comparestdout(execute(babelProcessor(filecheck(exercise()))));

var names = ['ES6', 'Babel', '6to5', 'transpiler', 'ES2015'];
obj.addSetup(function(mode, cb) {
  var name = names[Math.floor(Math.random() * names.length)];
  this.requiredString = ['`', '$'];
  this.submissionArgs = this.solutionArgs = [name];
  process.nextTick(cb);
});

export default obj;
