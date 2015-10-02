가변 길이의 매개변수를 받는 함수를 만드는 경우, 이제까지는 `arguments`라는 배열 비슷한 객체를 가지고 구현해 왔습니다. 하지만, `arguments`가 배열 비슷한 객체긴 하지만, 배열은 아닙니다. 즉, 배열의 메소드인 reduce나 map 같은 메소드는 사용할 수 없었습니다.


ES6에서는 이 `arguments`를 사용하지 않고도 인수에 `...`를 붙여 가변 길이의 매개변수를 처리할 수 있게 되었습니다. 이 기능을 Rest 매개변수라고 부릅니다. Rest 매개변수를 사용함으로써, 배열 비슷한 객체가 아닌 배열으로 가변 길이의 매개변수를 받을 수 있습니다.

```javascript
var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

console.log(sum(1,2,3)); // 6
```

또 함수를 부를 때 배열의 객체를 가변 길이 매개변수에 변환하는 것도 가능합니다. 이것을 Spread 콜이라 부릅니다.

```javascript

var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

var array = [1, 2, 3, 4];
// 배열에서 sum(1,2,3,4)로 호출하는 것과 동일
console.log(sum(...array)); // 10

```

# 문제

JavaScript에서 이 가변 길이 매개변수인 Rest 매개변수 호출을 사용해, 평균을 구하는 함수를 만들어 봅시다.

```javascript
var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

// 여기에 평균을 구하는 avg 함수를 만듦.
// 만들 때 REST 매개변수를 사용해야 함.

console.log(avg(...args));
```
