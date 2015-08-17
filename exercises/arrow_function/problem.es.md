En ES6 se ha introducido la declaración de funciones arrow (flecha). Este tipo de declaración nos permite escribir declaraciones de funciones más cortas para funciones sencillas.

```javascript
setTimeout(function(){
  console.log('Test');
}, 100);

```
Este mismo código quedaría expresado de la siguiente manera:

```javascript
setTimeout(()=>{console.log('Test');}, 100);
```

```javascript
// (x) => {} becomes a function
// You would have needed to write like this before: var square = function(x) { return x * x; };
var square = (x) => {
  return x * x;
};
console.log(square(4)); //16

// Without braces it is even possible to ommit the return statement
var square2 = x => x * x;
console.log(square2(4)); //16
```

# Ejercicio

Procesa las variables que se pasan mediante `process.argv` y retorna la primera letra de cada palabra en una línea.

```javascript
var inputs = process.argv.slice(2);
var result = inputs.map(/* Your code here, using an arrow function */)
                   .reduce(/* Your code here, using an arrow function */);
console.log(result);
```

Por ejemplo, en el caso de ["Hello", "Arrow", "Function"] ha de retornar "HAF". Aquí tienes un ejemplo:

```shell
$ babel-node program.js Hi this is yosuke
Htiy
```
