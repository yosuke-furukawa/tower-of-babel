"use strict";

import fs             from 'fs';
import path           from 'path';
import os             from 'os';

import exercise       from 'workshopper-exercise';
import filecheck      from 'workshopper-exercise/filecheck';
import execute        from 'workshopper-exercise/execute';
import comparestdout  from 'workshopper-exercise/comparestdout';
import babelProcessor from '../babel-processor';

var obj = comparestdout(execute(babelProcessor(filecheck(exercise()))));

obj.addSetup(function(mode, cb) {
  var x = Math.floor(Math.random() * 100);
  this.requiredString = ['yield'];
  this.submissionArgs = this.solutionArgs = [x];
  process.nextTick(cb);
});

export default obj;
