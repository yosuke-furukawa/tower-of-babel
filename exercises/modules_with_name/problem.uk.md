Until now it hasn't been possible to split up your code into modules in JavaScript.

У node.js/io.js зазвичай використовують модулі `commonjs`, але у браузері ви мали використовувати інші рішення, такі як require.js або browserify, або були змушені створювати власні глобальні простори імен.

З ES6 ви зможете використовувати ключові слова `export` та `import`, які спеціально розроблені для створення модулів.

По суті, вони виглядають дуже схожими на модулі `commonjs`. За допомогою `export` ви можете вказати об'єкти для експорту, а замість `require` ви можете використовувати `import` для імпорту об'єкта.

Використання `export` виглядає так:

```javascript
// Message.js
export const message = 'Hello Babel';
```

А імпортувати цей модуль з подальшим його використання, ви можете наступним чином:

```javascript
import {message} from './Message';
console.log(message); // Hello Babel
```

З використанням `common.js`, цей самий модуль буде написано так:

```javascript
exports.message = 'Hello Babel';
```

```javascript
var message = require('./Message').message;
console.log(message); // Hello Babel
```

# Вправа

Перепишіть наступний модуль та виконуваний файл за допомогою модуля EcmaScript 6:

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

Переконайтеся, що ви передаєте як виконуваний файл, так і файл модуля, для запуску та перевірки вашого рішення.

```
$ tower-of-babel run|verify <executable file> <module file>

# Приклад запуску конвертованого модуля
$ tower-of-babel run Main.js Math.js

# Приклад перевіркіи конвертованого модуля
$ tower-of-babel verify Main.js Math.js
```
