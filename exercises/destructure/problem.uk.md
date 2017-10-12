Цей новий синтаксис схожий на деструкцію в Clojure. Він полегшує доступ до властивостей масивів та об'єктів.

Розгляньмо синтаксис за допомогою невеликого прикладу. Найпоширенішим прикладом є обмін значеннями двох змінних:

```javascript
var foo = 123;
var bar = 456;

// обмін значеннями
var tmp = foo;
foo = bar;
bar = tmp;
```

З деструктуризацією це стає простішим:

```javascript
var foo = 123;
var bar = 456;

// swapping of the value
[bar, foo] = [foo, bar];
```

Можна навіть отримати доступ до дочірніх елементів масиву.

```javascript
var [a, [b], [c]] = ['hello', [', '], ['world']];

console.log(a + b + c);// hello, world
// значенням a є "hello", b - ", ", а с - "world"
```

Також цим можна скористатись і для доступу до властивостей об'єктів:

```javascript
var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444
```

# Вправа

Використовуйте деструктуризацію, щоб отримати  `name.family` та `birth.day` з наступного об'єкта JavaScript:

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

// Ваш код тут.

console.log(familyName);
console.log(birthDay);
```
