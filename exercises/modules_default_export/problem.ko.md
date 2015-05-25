전에 모듈에 관한 설명을 했습니다만, export에는 두 종류가 있습니다. 일반적인 export와 default export입니다.
차이에 관해 설명하겠습니다. 밑의 JavaScript는 전의 이름을 쓰는 export를 사용하고 있습니다.

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

또, import하는 쪽은 export한 대상의 이름을 지정합니다.

```javascript
import {obj} from './Message';
console.log(obj.greeting + ' ' + obj.name + ' ' + obj.version); // Hello Babel v5.0
```

default export는 이것과 다르게, export할 때에 `export default` 구문을 붙여 공개합니다. 이렇게 사용할 수 있습니다.

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

또, import하는 쪽은 이렇게 됩니다.

```javascript
import Message from './Message';
console.log(
  Message.greeting + ' ' + Message.name + ' ' + Message.version); //Hello Babel v5.0
```

앞의 것과의 차이를 아시겠나요? default export로 export한 경우는, import할 때 import의 대상을 대괄호 `{...}`로 감쌀 필요가 없이, export된 대상의 이름을 알 필요가 없습니다.

이것은 commonjs의 `module.exports`를 사용해 밑에 있는 것처럼 적었을 때와 비슷합니다.

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

Node.js에서 module.exports를 사용해 module을 분리하는  것처럼 ES6에서도 이 `export default`를 사용해 간단히 모듈을 분리할 수 있습니다.

# 문제

여기서, 전에 적은 export로 적은 Math.js와 실행용의 JS 파일을 export default와 import를 사용해 변환해 봅시다.

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

또 제출할 때와 실행할 때는 module의 참조할 파일과 실행 파일을 밑의 순서로 넘겨주세요.

```
$ tower-of-babel run|verify <실행 파일> <참조될 module 파일>

# 시험삼아 실행할 경우의 예
$ tower-of-babel run Main.js Math.js

# 제출할 경우의 예
$ tower-of-babel verify Main.js Math.js
```
