
# Introduction
This is the first exercise to learn ES6 using babel.

Even with the power of the latest version of node.js, it isn't possible right now to use all of the features from ES6.

To enable a lot of the new grammar, there is an additional package called `babel` which you can install using:

```shell
$ npm install babel-cli -g
```

Once you have done that, two new commands become available: `babel` and `babel-node`.
Let's starting by using `babel-node`.

Please create a `program.js` file that contains:

```javascript
console.log(`Hello Babel`);
```

Once you saved, it you will be able to run the program like this:

```shell
$ babel-node program.js
```

Try to run it and make sure it shows `Hello Babel`.

# Exercise
Create a javascript program that takes the first command-line argument and
outputs it right after a `"Hello "` String using ES6 template strings.

# Hints
It is possible to pass command-line arguments to a babel program like this:

```
babel-node my-program.js an-argument
```

To access the arguments you can use the `process.argv` array.

**Important!** The `process.argv` array contains not just the arguments but also the runtime (first variable) and the script file loaded (second variable)!
This means the first argument is stored at the third position:

```javascript
process.argv[2]
```

ES6 template strings are a new way to declare strings using the `\`` character. In template strings you can access local variables like this:

```javascript
var a = 1;
console.log(`${a}`);
```

Read more about template strings here: http://updates.html5rocks.com/2015/01/ES6-Template-Strings
