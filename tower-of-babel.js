#!/usr/bin/env babel-node

import workshopper from 'workshopper-adventure';
import path from 'path';

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
  name        : 'tower-of-babel',
  title       : 'Tower of Babel',
  subtitle    : 'ES6をbabel使って勉強しましょう！',
  appDir      : __dirname,
  languages   : ['en', 'ja', 'ko', 'es', 'fr', 'it', 'uk'],
  defaultLang : 'ja',
  exerciseDir : fpath('./exercises/')
})
