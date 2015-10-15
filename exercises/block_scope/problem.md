Two new keywords called `let` and `const` allow the definition of variables in a block scope. Traditional variables defined with `var` have always been defined for the whole function scope. The restriction of a block scope means that `let`/`const` are defined to be used within curly braces `{ ... }`.

Variables defined with `let` are changeable but `const` doesn't allow reassignments. `const` is much like Java's `final` keyword.

```javascript
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; Can't do that, will result in a SyntaxError
}

// a = 20、a is defined with `var` so it is accessible outside of the scope
console.log(a);
// variables defined with `let` are not available. This will result in: ReferenceError b is not defined
console.log(b);
// Same goes for const: tmp is not defined
console.log(tmp);
```

Using `let` and `const` is recommended because it's harder to leak variables to outer scopes.

# Exercise

Modify this file by choosing either `var`, `let` or `const` to make the code behave as described in the comments

```javascript
'use strict';
// This variable `a` should be accessible outside of the block scope.
var|let|const a = 5;

// This variable `b` should not be reassignable.
var|let|const b = process.argv[2];

if (a === 5) {
  // This variable `c` should only be valid in this block.
  var|let|const c = 4;
  console.log(c);  // 4

  // This variable `b` should only be valid in this block and should not be reassignable.
  var|let|const b = 8;
  console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
  // Trying to change the value of `c`
  c = 1000;
} catch (e) {
  // but an `c is not defined` error should occur.
  console.log(e);
}
```
