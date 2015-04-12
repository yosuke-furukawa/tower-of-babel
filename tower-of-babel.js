#!/usr/bin/env node

const workshopper = require('workshopper-adventure');
const path        = require('path');

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
  name        : 'tower-of-babel',
  title       : 'Tower of Babel',
  subtitle    : 'Learn ES6 features using babel',
  appDir      : __dirname,
  menuItems   : [],
  languages   : ['ja'],
  exerciseDir : fpath('./exercises/')
})
