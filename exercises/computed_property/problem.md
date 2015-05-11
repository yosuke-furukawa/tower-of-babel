In ES6 the way to access and define object literals has been improved. It is now possible to use expressions as property names.

Before you had to define dynamic properties of objects like this:

```javascript
var prop = "foo";

var obj = {};
obj[prop] = "bar";
```

can now be written like this in ES6:

```javascript
var prop = "foo";
var obj = {
  [prop]: "bar"
};
```

This is called a `Computed Property`.

The content of `[]` can also be a function:

```javascript
var obj = {
  // using an inline function
  [(()=>"bar" + "baz")()]: "foo"
};
```

In this case the key the string returned by the function. With the new `Computed Property` syntax you can express dynamic properties without using temporary variables.

# Exercise

Rewrite the following code using the new `Computed Property` method:

```javascript
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {};
obj[evenOrOddKey] = evenOrOdd;
obj[sum] = sum;
console.log(obj);
```

Try to solve it without any temporary variable.
