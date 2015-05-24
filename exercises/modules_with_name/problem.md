Until now it hasn't been possible to split up your code into modules in JavaScript.

In node.js/io.js it's common to use `commonjs` modules but in the browser you had to use other solutions like require.js or browserify or were forced to create your own global namespaces.

From ES6  you will be able to use the `export` and `import` keywords that are specially designed for creating modules.

Basically, they look a lot like `commonjs` modules. With `export` you can specify the objects to be exported and instead of `require` you can use `import` to import the object.

Using export looks like this:

```javascript
// Message.js
export const message = 'Hello Babel';
```

And to import that module you can use it like this:

```javascript
import {message} from './Message';
console.log(message); // Hello Babel
```

Using `common.js` the same module would be written like this:

```javascript
exports.message = 'Hello Babel';
```

```javascript
var message = require('./Message').message;
console.log(message); // Hello Babel
```

# Exercise

Rewrite the following module & executable using EcmaScript 6 module:

(module)
```javascript
exports.PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
exports.sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
exports.square = function(x) {
  return x * x;
};
```

(executable)
```javascript
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = require('./Math').PI;
var sqrt = require('./Math').sqrt;
var square = require('./Math').square;

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
```

Make sure you pass in both the executable file and the module file to run/verify your solution.

```
$ tower-of-babel run|verify <executable file> <module file>

# Example of running the converted modules
$ tower-of-babel run Main.js Math.js

# Example of verifying the converted modules
$ tower-of-babel verify Main.js Math.js
```
