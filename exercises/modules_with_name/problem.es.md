Hasta ahora no ha sido posible dividir tu código Javascript en módulos.

In NodeJS/io se utilizan de forma frecuente módulos de `commonjs` pero para el navegador web son necesarias soluciones como las que ofrecen `require.js` y `browserify` o nos veíamos obligados a crear nuestro propio *namespace* global.

En ES6 podemos utilizar funcionalidades como `import` y `export` que están especialmente diseñadas para crear este tipo de módulos.

Básicamente funcionan como los módulos de `commonjs`. Mediante `export` podemos especificar los objetos que expondrá nuestra aplicación y en lugar de usar `require` para importarlos lo haremos con `import`.

Para usar `export` lo haremos así:

```javascript
// Message.js
export const message = 'Hello Babel';
```
Y para importar un módulo haremos:

```javascript
import {message} from './Message';
console.log(message); // Hello Babel
```
Con la sintaxis de `common.js` el mismo módulo se escribiría así:

```javascript
exports.message = 'Hello Babel';
```

```javascript
var message = require('./Message').message;
console.log(message); // Hello Babel
```

# Ejercicio

Refactoriza el siguiente módulo y su ejecutable utilizando módulos de ECMAScript 6:
(módulo)

```javascript
exports.PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
exports.sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
exports.square = function(x) {
  return x * x;
};
```

(ejecutable)

```javascript
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = require('./Math').PI;
var sqrt = require('./Math').sqrt;
var square = require('./Math').square;

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
```
Asegúrate de que pasas ambos; el archivo ejecutable y el del módulo a ejecutar/verificar de tu solución.

```
$ tower-of-babel run|verify <executable file> <module file>

# Example of running the converted modules
$ tower-of-babel run Main.js Math.js

# Example of verifying the converted modules
$ tower-of-babel verify Main.js Math.js
```
