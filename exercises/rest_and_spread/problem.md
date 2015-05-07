If you had to deal with an variable amount of parameters you would have had to use the `arguments` variable to process more parameters that you defined. But since `arguments` is not an array several methods (like map or reduce) could not be used.

Since ES6 you can use `...` instead of `arguments` for the variable parameters. With this you can access the rest parameters through an array, not an object.

```javascript
var sum = function(...args){
  let sum = args.reduce( (sum, n) => sum + n );
  return sum;
};

console.log(sum(1,2,3)); // 6
```

It is also now possible to call a method using a so-called `spread call` to pass arrays to amethod:

```javascript
var sum = function(...args){
  let sum = args.reduce( (sum, n) => sum + n );
  return sum;
};

var array = [1, 2, 3, 4];
// This is like calling `sum(1, 2, 3, 4)`
console.log(sum(...array)); // 10

```

# Exercise

Calculate the average of all the numbers passed in using command line arguments using the `...` syntax.

```javascript
var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

// write a function called `avg` here that calculates the average.

console.log(avg(...args));
```
