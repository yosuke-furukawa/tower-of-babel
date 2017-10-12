У ES6 була додана декларація функцій зі стрілкою. За допомогою стрілок можна написати лаконічніші декларації для малих функцій.

```javascript
setTimeout(function(){
  console.log('Test');
}, 100);

```

Код, що написано вище, може написати й так:

```javascript
setTimeout(()=>{console.log('Test');}, 100);
```

```javascript
// (x) => {} стає функцією
// Раніше ви мали б написати так: var square = function(x) { return x * x; };
var square = (x) => {
  return x * x;
};
console.log(square(4)); //16

// Без дужок можна навіть пропустити повернення (return) виразу
var square2 = x => x * x;
console.log(square2(4)); //16
```

# Вправа

Обробіть змінні, які передаються через `process.argv` так,  щоб утворилась абревіатура.

```javascript
var inputs = process.argv.slice(2);
var result = inputs.map(/* Тут ваш код, що використовує стрілкову функцію */)
                   .reduce(/* Тут ваш код, що використовує стрілкову функцію */);
console.log(result);
```

Наприклад, у випадку ["Hello", "Arrow", "Function"] слід повернути "HAF". Ось повний приклад:

```shell
$ babel-node program.js Hi this is yosuke
HTIY
```
