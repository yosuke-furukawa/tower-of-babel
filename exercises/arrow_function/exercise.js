"use strict";

import exercise       from 'workshopper-exercise';
import filecheck      from 'workshopper-exercise/filecheck';
import execute        from 'workshopper-exercise/execute';
import comparestdout  from 'workshopper-exercise/comparestdout';
import babelProcessor from '../babel-processor';

var obj = comparestdout(execute(babelProcessor(filecheck(exercise()))));

var names = [
  "Hello", "Babel", "Arrow", "Function", "Sebastian", "Mckenzie", "Yosuke"
];

obj.addSetup(function(mode, cb) {
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

export default obj;
