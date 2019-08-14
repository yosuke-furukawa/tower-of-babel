tower-of-babel
================

![2015-04-05 23 56 39](https://cloud.githubusercontent.com/assets/555645/6997242/a65df93c-dbef-11e4-9bf8-f39331c56d1f.png)

tower-of-babel will show you through a series of exercises that introduce you to ES6 features.
This exercises use [babel](http://babeljs.io/). babel allows you to write code with ES6 syntax.


# How to use

- Create new directory

```bash
$ mkdir tower-of-babel-solutions && cd tower-of-babel-solutions
```

- Initialize the new project

```bash
$ npm init -y
```

- Install tower-of-babel local (becouse we can)

```bash
$ npm i tower-of-babel
```

- Install babel and babel features

```bash
$ npm i babel-cli babel-preset-es2015
```

- Create .babelrc file with necessary config

```bash
$ echo '{ "presets": ["es2015"] }' > .babelrc
```

- And run it from node_modules
```bash
$ ./node_modules/tower-of-babel/tower-of-babel.js
```
