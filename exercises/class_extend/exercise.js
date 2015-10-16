"use strict";

import exercise       from 'workshopper-exercise';
import filecheck      from 'workshopper-exercise/filecheck';
import execute        from 'workshopper-exercise/execute';
import comparestdout  from 'workshopper-exercise/comparestdout';
import babelProcessor from '../babel-processor';

var obj = comparestdout(execute(babelProcessor(filecheck(exercise()))));

var names = ['alice', 'bob', 'charlie', 'dave', 'eva'];

obj.addSetup(function(mode, cb) {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);
  var name = names[Math.floor(Math.random() * names.length)];
  this.requiredString = ['class', 'extends'];
  this.submissionArgs = this.solutionArgs = [x, y, name];
  process.nextTick(cb);
});

export default obj;
