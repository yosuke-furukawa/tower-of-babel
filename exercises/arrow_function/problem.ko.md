ES6에서부터, 화살표 함수가 사양에 추가되었습니다.
이 화살표 함수를 사용하면 익명 함수를 짧게 표기할 수 있습니다.

```javascript
setTimeout(function(){
  console.log('Test');
}, 100);

```

지금까지 위의 표기 방식을 사용했습니다만, 이제부터는 밑에 있는 표기 방식을 사용할 수 있습니다.

```javascript
setTimeout(()=>{console.log('Test');}, 100);
```

```javascript
// (x) => {}로 함수 정의가 됨
// 지금까지는 var square = function(x) { return x * x; };
var square = (x) => {
  return x * x;
};
console.log(square(4)); //16

// 인수가 하나일 경우 괄호 생략 가능, 몸통에 한 줄밖에 없다면 return도 생략 가능
var square2 = x => x * x;
console.log(square2(4)); //16
```

# 문제

커맨드 라인 인수에서 임의의 수의 문자열을 받아, 최초의 한 문자만 취해, 결합하는 함수를 만들어 봅시다.

```javascript
var inputs = process.argv.slice(2);
var result = inputs.map(/* 여기에서 화살표 함수를 사용해 한 문자만 취합니다.*/)
                   .reduce(/* 여기에서 화살표 함수를 사용해 문자열을 합칩니다.*/);
console.log(result);
```
예를 들어 ["Hello", "Arrow", "Function"] 의 경우, 결과로 "HAF"라는 문자열이 나옵니다.

```shell
$ babel-node program.js Hi this is yosuke 
Htiy
```
