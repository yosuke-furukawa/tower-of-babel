В попередній вправі пояснювалась модульна система, проте є й інший спосіб використання `export`, і це `export default`.

Дещо про різницю: наступний модуль використовує `export`, як у попередній вправі

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

об'єкт, який експортує цей модуль, може бути імпортований за допомогою імені, як у цьому прикладі;

```javascript
import {obj} from './Message';
console.log(obj.greeting + ' ' + obj.name + ' ' + obj.version); // Hello Babel v5.0
```

Ви можете досягти цього ж, використовуючи 'export default':

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

Після цього імпорт трохи змінюється

```javascript
import Message from './Message';
console.log(
  Message.greeting + ' ' + Message.name + ' ' + Message.version); //Hello Babel v5.0
```

Хоча різниця й досить очевидна, однак давайте роз'яснімо: коли ви використовуєте `export default`, вам не потрібно ані використовувати фігурні скобки `{...}`, ані знати ім'я експортованого методу.

Написане в `common.js`, це буде виглядати так:

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

Таким чином, ви можете використовувати `export default` так само, як ви використовуєте `module.exports` у Node.js.

# Вправа

Перепишіть наступні методи, які використовують звичайний експорт, за допомогою синтаксису `export default`.

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

Переконайтеся, що ви передаєте як виконуваний файл, так і файл модуля, для запуску та перевірки вашого рішення.

```
$ tower-of-babel run|verify <executable file> <module file>

# Приклад запуску конвертованого модуля
$ tower-of-babel run Main.js Math.js

# Приклад перевіркіи конвертованого модуля
$ tower-of-babel verify Main.js Math.js
```
