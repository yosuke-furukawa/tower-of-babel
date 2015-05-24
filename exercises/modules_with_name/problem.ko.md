여태까지의 JavaScript에서는 언어 레벨의 모듈 분할이 불가능 했습니다.

Node.js/io.js에서는 `commonjs`를 내장으로 사용할 수 있습니다만, 브라우저에서는 JavaScript를 모듈화해서 프론트에서 사용할 때는 require.js를 사용하거나, browserify를 사용하거나 해서 라이브러리로 해결하거나, global 공간에 독자적인 이름 공간을 만들어 거기서 확장하는 처리를 했습니다.

ES6에서는 이 모듈화를 하기 위해 전용의 구문 export와 import를 사용할 수 있게 되었습니다.

기본적으로는 commonjs와 비슷합니다. 즉, export로 객체를 import할 수 있게 해서, require 대신 import 구문으로 객체를 사용할 수 있습니다.

export 측은 다음과 같습니다.

```javascript
// Message.js
export const message = 'Hello Babel';
```

또, import 측은 다음과 같습니다.

```javascript
import {message} from './Message';
console.log(message); // Hello Babel
```

이것을 commonjs로 적으면 다음 코드와 같습니다.

```javascript
exports.message = 'Hello Babel';
```

```javascript
var message = require('./Message');
console.log(message); // Hello Babel
```

# 문제

밑의 commonjs로 적힌 모듈을 ES6의 module로 전환해봅시다.

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

또 제출할 때와 실행할 때는 module의 참조할 파일과 실행 파일을 밑의 순서로 넘겨주세요.

```
$ tower-of-babel run|verify <실행 파일> <참조될 module 파일>

# 시험삼아 실행할 경우의 예
$ tower-of-babel run Main.js Math.js

# 제출할 경우의 예
$ tower-of-babel verify Main.js Math.js
```
