The former exercise explained the module system but there is another way to use `export` and that is `export default`.

Some explanation about the difference: this module uses `export` like in the former exercise

```javascript
// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export const obj = {
  greeting: greeting,
  name: name,
  version: version
};
```

the object that this module exports can be imported using the name as in this example;

```javascript
import {obj} from './Message';
console.log(obj.greeting + ' ' + obj.name + ' ' + obj.version); // Hello Babel v5.0
```

You can achieve the same thing by using `export default`:

```javascript
// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export default {
  greeting: greeting,
  name: name,
  version: version
};
```

The import then changes a little

```javascript
import Message from './Message';
console.log(
  Message.greeting + ' ' + Message.name + ' ' + Message.version); //Hello Babel v5.0
```

The difference should be obvious but lets make it clear: When you use `export default` you do not need to use the curly braces `{...}` and you don't need to know the name of the exported method.

Written in `common.js` it would look like this:

```javascript
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
module.exports = {
  greeting: greeting,
  name: name,
  version: version
};
```

So, you can use `export default` just like you would use `module.exports` in Node.js.

# Exercise

Rewrite the methods that use the regular export here to the `export default` syntax.

```javascript
// Math.js
export const PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
export const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
export const square = function(x){
  return x * x;
};
```

```javascript
// Main.js
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square} from './Math';
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
