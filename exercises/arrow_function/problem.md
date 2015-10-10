In ES6 the arrow function declaration has been added. With the arrow declaration it is possible to write shorter declarations for small functions.

```javascript
setTimeout(function(){
  console.log('Test');
}, 100);

```

The very same thing as written above can be written like:

```javascript
setTimeout(()=>{console.log('Test');}, 100);
```

```javascript
// (x) => {} becomes a function
// You would have needed to write like this before: var square = function(x) { return x * x; };
var square = (x) => {
  return x * x;
};
console.log(square(4)); //16

// Without braces it is even possible to ommit the return statement
var square2 = x => x * x;
console.log(square2(4)); //16
```

# Exercise

Process the variables that are passed-in through `process.argv` and output the first letter of words in a row.

```javascript
var inputs = process.argv.slice(2);
var result = inputs.map(/* Your code here, using an arrow function */)
                   .reduce(/* Your code here, using an arrow function */);
console.log(result);
```

For example, in case of ["Hello", "Arrow", "Function"] should result in "HAF". Here is a full example:

```shell
$ babel-node program.js Hi this is yosuke
HTIY
```
