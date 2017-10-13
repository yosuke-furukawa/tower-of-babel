До ES6, коли ви мали справу зі змінною кількістю параметрів, вам слід було б використати змінну `arguments` щоб обробити більше параметрів ніж ви передали. Але оскільки `arguments` не є масивом, використання декотрих методів (як map або reduce) не було можливим.

З ES6 ви можете використовувати `... ` замість `arguments` для залишкових параметрів. За допомогою `... ` ви можете отримати доступ до залишкових параметрів через масив, а не об'єкт.

```javascript
var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

console.log(sum(1,2,3)); // 6
```

Тепер також можна викликати метод, використовуючи так званий `spread call`, щоб передавати масиви до методу:

```javascript
var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

var array = [1, 2, 3, 4];
// This is like calling `sum(1, 2, 3, 4)`
console.log(sum(...array)); // 10

```

# Вправа

Обчислити середнє арифметичне всіх чисел, що передаються як аргументи  командного рядка за допомогою синтаксису `...`

```javascript
var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// Тут напишіть функцію під назвою "avg", яка обчислює середнє арифметичне.

console.log(avg(...args));
```
