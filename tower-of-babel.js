#!/usr/bin/env node

const workshopper = require('workshopper-adventure');
const path        = require('path');

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
  name        : 'tower-of-babel',
  title       : 'Tower of Babel',
  subtitle    : 'ES6をbabel使って勉強しましょう！',
  appDir      : __dirname,
  languages   : ['en', 'ja', 'ko', 'es', 'fr', 'it'],
  defaultLang : 'ja',
  exerciseDir : fpath('./exercises/')
})
