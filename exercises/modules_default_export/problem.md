名前付きのexportは明示的にexportするものを選択できるものの、毎回 export って書かなきゃいけないのは面倒な時もあります。

```javascript
export const greeting = 'Hello';
export const name = 'Babel';
export const version = 'v5.0';
```

このような場合基本的に一つのファイルに対して、一つのオブジェクトだけを export して、書くことが多いです。

```javascript
// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export const object = {
  greeting: greeting,
  name: name,
  version: version
};
```

また、importする側は、exportされている対象の名前を知る必要があります。

```javascript
import {object} from './Message';
console.log(
  object.greeting + ' ' + object.name + ' ' + object.version); //Hello Babel v5.0
```


default 構文を使うと、これを解決できます。

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

また、import側は下記のようになります。

```javascript
import Message from './Message';
console.log(
  Message.greeting + ' ' + Message.name + ' ' + Message.version); //Hello Babel v5.0
```

これは、ちょうど commonjs で `module.exports` を使って以下のように書くのと似ています。

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

node.jsでmoduleを切り分けるのと同様にES6でもこの`export default`を扱うと簡単にモジュールを切り分けることが可能です。

# 問題

ここで、前回記述した export で書かれたMath.jsと実行用のJSファイルを export default と import を使って書き換えてみましょう。

```javascript
// Math.js
exports.PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
exports.sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
exports.square(x) {
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

また検証する時と実行するときには、moduleの参照元と実行ファイルの２つを下記の順序で渡してください。

```
# 試しに実行する時の例
$ tower-of-babel run Main.js Math.js

# 検証する時の例
$ tower-of-babel verify Main.js Math.js
```
