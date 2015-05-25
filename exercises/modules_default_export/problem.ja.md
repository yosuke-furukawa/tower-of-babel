前回、 module について説明しましたが、 export には2種類あります。通常の export と default export です。
この違いについて説明しましょう。下記の JavaScript は前回の名前付き export を使っています。

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

また、importする側は、exportされている対象の名前を指定して下記のようになります。

```javascript
import {obj} from './Message';
console.log(obj.greeting + ' ' + obj.name + ' ' + obj.version); // Hello Babel v5.0
```

default export はこれとは異なり、exportする際に `export default` 構文を付けて公開します。下記のように記述できます。

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

先ほどとの違いが分かるでしょうか。 default export で export した場合は、 import する時にimportの対象をブレース `{...}` で囲む必要はなく、exportされている対象の名前を知る必要はありません。

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

Node.jsでmodule.exportsを使って module を切り分けるのと同様にES6でもこの `export default` を扱うと簡単にモジュールを切り分けることが可能です。

# 問題

ここで、前回記述した export で書かれたMath.jsと実行用のJSファイルを export default と import を使って書き換えてみましょう。

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

また検証する時と実行するときには、moduleの参照元と実行ファイルの２つを下記の順序で渡してください。

```
$ tower-of-babel run|verify <実行ファイル> <moduleの参照元ファイル>

# 試しに実行する時の例
$ tower-of-babel run Main.js Math.js

# 検証する時の例
$ tower-of-babel verify Main.js Math.js
```
