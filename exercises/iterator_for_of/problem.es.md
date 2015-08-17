En ES6 se a añadido la funcionalidad de iterar un Array mediante `for of`. Miremos un ejemplo:

```javascript
var res = [];
// La siguiente línea contiene la sintaxis de `for of`
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]
```

Entonces, ¿Cual és la diferencia con la sintaxis clásica de `for`? A diferencia de `for`, con la sintaxis `for of` no estamos limitados a los Arrays. En cualquier elemento que pueda repetirse, o sea iterable podemos utilizar `for of`.

Para hacer que algo sea iterable hemos de utilizar `Symbol.Iterator`. Veamos a continuación un ejemplo de como usarlo:

```javascript
// Calculamos la secuencia de fibonacci para los primeros 1.000 números
var fibonacci = {
  // Creamos un método con una función que contenga Symbol.iterator.
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    // El Objeto iterador resultante ha de tener un método `next`:
    return {
      next() {
        // El resultado de `next` ha de ser otro Objeto con la propiedad `done` que indica si el iterador ha acabado o no.
        [pre, cur] = [cur, pre + cur];
        if (pre < 1000)  return { done: false, value: pre };
        return { done: true };
      }
    }
  }
}

// El valor de la propiedad resultado será `n`.
for (var n of fibonacci) {
  console.log(n);
}
```

# Ejercicio

Crea un Objeto iterable que haga el cálculo FizzBuzz para una cantidad de números dados.

# Nota

## Problema FizzBuzz

Lista los números del 1 al máximo (pasados mediante `process.argv`). Además, por cada número que sea divisible entre 3 lo reemplazas por la palabra `Fizz` y por cada número divisible entre 5 por `Buzz`. Por cada número dibisible por 3 y por 5 has de reemplazarlo por `FizzBuzz`.

Ejemplo:

```javascript
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // Aquí has de poner la lógica FizzBuzz
    // Nota:
    // Recuerda retornar un Objeto cuando acabe
    // con la propiedad `done: true` pero antes
    // inicialízala a `done: false`.
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
