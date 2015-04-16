전에 본 것처럼 for-of문을 만들면, 임의의 Iterable한 객체를 반복할 수 있습니다. 하지만, 이미 알고 계신 것처럼, Iterable 객체를 만들려면 조금 공부가 필요합니다. 이번에는 이 Iterable 객체를 만들기 쉽게 하기 위한 `generator`의 사용법을 배워봅시다.

generator를 사용한 fibonacci는 다음과 같습니다.

```javascript
let fibonacci = function*(){
  let currentValue = 0, nextValue = 1;
  while (currentValue < 1000) {
    // 여기서 destructuring으로 값을 스왑함
    [currentValue, nextValue] = [nextValue, currentValue + nextValue];
    // yield로 값을 반환
    yield currentValue;
  }
}();

for (var n of fibonacci) {
  console.log(n);
}
```

앞의 것과의 차이를 아시겠나요? 함수 `function*`이 들어있습니다. 또, `return`을 사용하던 곳이 `yield`로 바뀌었습니다.

# 문제

그럼 여기서, 아까 작성한 FizzBuzz 문제를 generator로 바꿔봅시다.

