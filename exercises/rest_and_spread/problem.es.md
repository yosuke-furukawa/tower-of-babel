Anteriormente a ES6, para utilizar una cantidad indeterminada de parámetros no definidos por nosotros teniamos que hacerlo mediante la variable `arguments`. Como esta variable no era un Array no podíamos aplicarle algunos de los métodos como `map` o `reduce`.

A partir de ahora con ES6 podemos utilizar `...` como parámetro en lugar de hacerlo con la variable `arguments`. De esta forma podremos acceder a resto de parámetros mediante un Array, no de un Objeto.

```javascript
var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

console.log(sum(1,2,3)); // 6
```
También es posible llamar a un método mediante el ya conocido operador de propagación para pasar Arrays a un método:

```javascript
var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

var array = [1, 2, 3, 4];
// This is like calling `sum(1, 2, 3, 4)`
console.log(sum(...array)); // 10

```

# Ejercicio

Calcula el promedio de todos los números pasados usando los argumentos de línea de comandos mediante la sintaxis del operador de propagación `...`.

```javascript
var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// A continuación escribe una función llamada `avg` que calcule el promedio.

console.log(avg(...args));
```
