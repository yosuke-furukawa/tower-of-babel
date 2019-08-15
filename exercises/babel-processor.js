"use strict";
var babel = require("@babel/core");
var fs = require("fs");
var q = require("q");
var path = require("path");
var os = require("os");
var rimraf = require("rimraf");

var tmpDir = os.tmpdir ? path.resolve(os.tmpdir(), "_babel_" + process.pid) : path.resolve(os.tmpDir(), "_babel_" + process.pid);

module.exports = function (exercise) {
    exercise.addProcessor(processor);
    exercise.addCleanup(cleanup);

    return exercise;
};

function processor(mode, callback) {
    var exercise = this;

    q.nfcall(fs.mkdir, tmpDir).then(function () {
      return q.nfcall(
        fs.symlink,
        path.resolve(__dirname + '/../node_modules'),
        tmpDir + '/node_modules');
    })
    .then(function(){
      if (exercise.submissionImportFile) {
        return writeTranspiled(exercise.submissionImportFile, exercise.requireImportString);
      }
    })
    .then(function() {
      return q.nfcall(exercise.getSolutionFiles.bind(exercise));
    })
    .then(function(solutions) {
      var transpilations = solutions.filter(function (solution) {
        return solution !== exercise.solution;
      }).map(function (solution) {
        return writeTranspiled(solution, exercise.requireImportString);
      });
      return q.all(transpilations);
    })
    .then(function() {
      return q.all([
        writeTranspiled(exercise.submission, exercise.requiredString),
        writeTranspiled(exercise.solution, exercise.requiredString)
      ]);
    })
    .spread(function (newSubmission, newSolution) {
      exercise.submission = newSubmission;
      exercise.solution = newSolution;
    })
    .nodeify(callback);
}

function cleanup(mode, passed, callback) {
    rimraf(tmpDir, callback);
}

function writeTranspiled(filename, requiredString) {
  return readFile(filename).then(function (contents) {
    checkES6(contents, requiredString);
    var newFilename = path.resolve(tmpDir, path.basename(filename));
    return transpile(contents, filename).then(function (transpiled) {
      return writeFile(newFilename, transpiled.code).thenResolve(newFilename);
    });
  });
}

function checkES6(contents, requiredString) {
  if (typeof requiredString === 'string') {
    requiredString = [requiredString];
  }
  if (Array.isArray(requiredString)) {
    requiredString.forEach(function(r){
      if (contents.indexOf(r) < 0) {
        throw new Error('Wrong, your script does not use ES6 feature.');
      }
    });
  }
}

function readFile(filename) {
    return q.nfcall(fs.readFile, filename, { encoding: "utf8" });
}

function writeFile(filename, contents) {
    return q.nfcall(fs.writeFile, filename, contents, { encoding: "utf8" });
}

var transpile = q.fbind(function (contents, filename) {
    var transpiled = babel.transformSync(contents, {
        filename: filename,
        presets: ["@babel/env"],
    });

    return transpiled;
});
