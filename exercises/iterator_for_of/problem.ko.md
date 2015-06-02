ES6부터, 새로운 `for of`라는 구문이 추가되었습니다. 이것은 반복을 하는 `for`문의 확장입니다. 다음과 같이 작성합니다.

```javascript
var res = [];
// 여기가 for of 문
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]
```

지금까지의 for문과 무엇이 다른가요? 지금까지의 for in문과는 다르게, of에 넘기는 것은 컬렉션이 아니어도 됩니다.
반복이 가능한 것, Iterable한 것이라면 for of 문으로 반복할 수 있습니다.

Iterable한 것을 만들려면, `Symbol.Iterator`를 사용하세요. `Symbol.Iterator`의 정의는 다음과 같습니다.

```javascript
// 1000까지의 값을 반환하는 fibonacci를 작성
var fibonacci = {
  // Symbol.iterator를 가지는 메소드를 가지는 객체
  [Symbol.iterator]() {
    let currentValue = 0, nextValue = 1;
    // iterator 객체는 next 메소드를 가진 객체를 반환
    return {
      next() {
        // next 안에서 반환 값(value)과 다음에 끝나는지 나타내는 속성(done)을 반환
        if (nextValue > 1000) return { done: true };
        [currentValue, nextValue] = [nextValue, currentValue + nextValue];
        return { done: false, value: currentValue };
      }
    }
  }
}

for (var n of fibonacci) {
  console.log(n);
}
```

# 문제

그럼 여기서, Iterable 객체를 작성해 for-of 반복문으로 돌려봅시다. 100까지 세는 FizzBuzz 문제를 만들어 for-of 반복문을 돌려봅시다.

# 힌트

## FizzBuzz문제

1에서 X까지의 수를 출력하는 프로그램을 작성하세요. 단 3의 배수일 때는 "Fizz"를, 5의 배수일 때는 "Buzz"를 출력하고, 3과 5의 배수일 때는 "FizzBuzz"를 출력해야 합니다.

FizzBuzz는 밑에 있는 것처럼 작성합니다.

```javascript
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // 여기에 FizzBuzz의 계산을 적음
    // 힌트:
    // 연산을 계속하고 싶을 때, 즉 종료 조건인 반복 횟수가 max를 넘기지 않는 경우는
    // done: false의 객체를 반환합니다.
    // 반대로 종료조건을 만족했을 경우는 done: true의 객체를 반환합니다.
  }
}

for (var n of FizzBuzz) {
  console.log(n);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// ...
}

```
