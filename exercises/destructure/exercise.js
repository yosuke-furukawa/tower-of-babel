"use strict";

import exercise       from 'workshopper-exercise';
import filecheck      from 'workshopper-exercise/filecheck';
import execute        from 'workshopper-exercise/execute';
import comparestdout  from 'workshopper-exercise/comparestdout';
import babelProcessor from '../babel-processor';

var obj = comparestdout(execute(babelProcessor(filecheck(exercise()))));

var names = ['Furukawa', 'Nakajima', 'Kuwahara', 'Sora', 'Ishikawa'];

obj.addSetup(function(mode, cb) {
  var name = names[Math.floor(Math.random() * names.length)];
  var day = Math.floor(Math.random() * 31);
  this.submissionArgs = this.solutionArgs = [name, day];
  process.nextTick(cb);
});

export default obj;
