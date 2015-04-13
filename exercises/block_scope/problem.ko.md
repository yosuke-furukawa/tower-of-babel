`let`, `const` 라는 새로운 변수 선언을 할 수 있게 되었습니다. 이것은 블록 스코프 안에서 사용합니다. 여태까지의 JavaScript의 경우 변수를 보존하는 스코프를 구현하기 위해 함수로 감쌀 필요가 있었습니다. 하지만 let/const를 사용하면, 함수가 아닌 중괄호 `{ ... }`로 감싼 영역이 스코프가 됩니다.

let은 재대입을 할 수 있는 변수이지만 const는 재대입이 불가능한 변수입니다. const는 Java에서는 final이 하던 역할을 합니다.

```javascript
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; 재대입이 안 되고 SyntaxError가 됨.
}

// a = 20、a는 var로 선언했으므로 블록 스코프 밖에서도 참조 가능.
console.log(a);
// let으로 정의한 b는 블록 스코프 밖에서는 참조할 수 없음. ReferenceError b is not defined가 됨.
console.log(b);
// const도 스코프 안에서만 유효. tmp is not defined
console.log(tmp);
```

let/const를 가능하면 사용하는 쪽이 실수로 스코프 밖에서 변수에 접근할 수 없도록 방지할 수 있습니다.

# 문제

실제로 let와 const를 사용해 예상대로 동작하는지 봅시다.

```javascript
'use strict';
// 변수 a는 블록 스코프 안에서도 밖에서도 재이용할 수 있는 변수입니다. 변수 선언 방법은 (var|let|const) 중에 어느 것을 사용해야 할지 생각해보세요.
var|let|const a = 5;

// 변수 b는 재이용할 수 없는 변수입니다. 변수 선언 방법은 (var|let|const) 중에 어느 것을 사용해야 할지 생각해보세요.
var|let|const b = process.argv[2];

if (a === 5) {
  // 변수 c는 재이용 가능합니다만, 이 블록 안에서만 유효한 변수입니다. 변수 선언 방법은 (var|let|const) 중에 어느 것을 사용해야 할지 생각해보세요.
  var|let|const c = 4;
  console.log(c);  // 4

  // 변수 b는 블록 안에서만 유효한 변수입니다. 변수 선언 방법은 (var|let|const) 중에 어느 것을 사용해야 할지 생각해보세요.
  var|let|const b = 8;
  console.log(b); // 8
} 

console.log(a); // 5
console.log(b);
try {
  // 여기서 c의 값을 변경해 봅시다.
  c = 1000;
} catch (e) {
  // c is not defined 에러가 발생하는 것을 확인해보세요.
  console.log(e);
}
```
