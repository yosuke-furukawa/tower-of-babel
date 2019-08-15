#!/usr/bin/env node

const workshopper = require('workshopper-adventure');
const path        = require('path');
const menu        = require('./exercises/menu.json');

function fpath (f) {
  return path.join(__dirname, f)
}

const towerOfBabel = workshopper({
  name        : 'tower-of-babel',
  title       : 'Tower of Babel',
  subtitle    : 'ES6をbabel使って勉強しましょう！',
  appDir      : __dirname,
  languages   : ['en', 'ja', 'ko', 'es', 'fr', 'it', 'uk'],
  defaultLang : 'ja',
  exerciseDir : fpath('./exercises/'),
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer'),
  fail: require('workshopper-adventure/default/fail'),
  pass: require('workshopper-adventure/default/pass')
});

towerOfBabel.addAll(menu);
  
towerOfBabel.execute(process.argv.slice(2));
