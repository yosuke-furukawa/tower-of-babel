ES6에서, 객체 리터럴의 표기 방식이 조금 바뀝니다. 객체의 속성 "이름"에 식을 평가할 수 있게 됩니다.

여태까지는, 속성 이름에 동적인 값을 넣을 경우 밑에 있는 것과 같아집니다.

```javascript
var prop = "hoge";

var obj = {};
obj[prop] = "fuga";
```

이제 ES6에서는 이렇게 됩니다.

```javascript
var prop = "hoge";
var obj = {
  [prop]: "fuga"
};
```

이것은 Computed Property라고 불입니다.

`[]`로 감싼 키는 식을 평가하는 것이 가능하기 때문에 아래와 같은 것도 할 수 있습니다.

```javascript
var obj = {
  // 함수를 만들어 안에서 실행함.
  [(()=>"hoge" + "fuga")()]: "foo"
};
```

동적인 키를 전환하는 경우에도 Computed Property를 잘 사용하면 연산 결과를 임시 변수에 넣지 않아도 됩니다.

# 문제

밑의 객체를 Computed Property를 사용해 전환해 봅시다.

```javascript
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {};
obj[evenOrOddKey] = evenOrOdd;
obj[sum] = sum;
console.log(obj);
```

가능하면, 임시변수를 전혀 사용하지 않고 표현해 보세요.
