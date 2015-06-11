これまでJavaScriptでは言語レベルでモジュールの分割ができませんでした。

Node.js/io.jsには `commonjs` が組み込みで使えますが、ブラウザでは、JavaScriptをモジュール化してフロントで読み込む際には require.js 使ったり、 browserify 使ったりというライブラリで解決するか、 global空間に独自の名前空間を作ってそこに生やすといった処理がされてきました。

ES6 からはこのモジュール化をするための専用の構文 export と import が使えるようになりました。

基本的には commonjs と似ています、つまり、 export でオブジェクトをimportできるようにして、requireの代わりに import 構文でオブジェクトを利用できるようにします。

export側は下記のようになります。

```javascript
// Message.js
export const message = 'Hello Babel';
```

また、import側は下記のようになります。

```javascript
import {message} from './Message';
console.log(message); // Hello Babel
```

これは、ちょうど commonjs で以下のように書くのと同じです。

```javascript
exports.message = 'Hello Babel';
```

```javascript
var message = require('./Message').message;
console.log(message); // Hello Babel
```

# 問題

ここで、以下のcommonjsで書かれたモジュールを ES6 の module で書き換えてみましょう。

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

また検証する時と実行するときには、moduleの参照元と実行ファイルの２つを下記の順序で渡してください。

```
$ tower-of-babel run|verify <実行ファイル> <moduleの参照元ファイル>

# 試しに実行する時の例
$ tower-of-babel run Main.js Math.js

# 検証する時の例
$ tower-of-babel verify Main.js Math.js
```
