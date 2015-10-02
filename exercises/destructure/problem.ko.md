디스트럭처링이라는 기능이 있습니다. Clojure에 있는 기능으로, 이것을 이용하면 배열이나 객체에서 설정한 값을 뽑기 쉬워집니다.

예를 하나 들어보도록 하겠습니다. 값을 스왑할 때 여태까지는 일단 값을 변수에 넣어 교환하고 있었습니다.

```javascript
var hoge = 123;
var fuga = 456;

// 값을 스왑
var tmp = hoge;
hoge = fuga;
fuga = tmp;
```

디스트럭처링을 사용하면 이것을 더 간단하게 할 수 있습니다.

```javascript
var hoge = 123;
var fuga = 456;

// 값을 스왑
[fuga, hoge] = [hoge, fuga];
```

이게 끝입니다. 배열에 2개의 값을 넣어 왼쪽의 변수를 교환하는 것만으로 구현 가능합니다.

이것 말고도 배열에서 임의의 요소를 취할 수도 있습니다.

```javascript
var [a, [b], [c]] = ['hello', [', '], ['world']];

console.log(a + b + c); //hello, world (a에 "hello", b에 ",", c에 "world"가 들어있음)
```

또, 객체의 값을 취할 때도 사용가능합니다.

```javascript
var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444
```

# 문제

밑의 JSON에서 디스트럭처링을 사용해 name.family와 birth.day를 뽑아보세요.

```javascript
var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};
// 여기서 디스트럭처링을 사용해 name.family를 familyName에,
// birth.day를 birthDay에 넣어 봅시다.


console.log(familyName);
console.log(birthDay);
```
