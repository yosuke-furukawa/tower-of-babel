En el ejercicio anterior vimos como funciona el sistema de módulos. Ahora veremos como utilizarlos de otra forma mediante `export default`.

Nota sobre las diferencias: este módulo utiliza `export` del mismo modo que en el ejercicio anterior.

```javascript
// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export const obj = {
  greeting: greeting,
  name: name,
  version: version
};
```
el Objeto que exporta este módulo puede ser importado mediante su nombre:

```javascript
import {obj} from './Message';
console.log(obj.greeting + ' ' + obj.name + ' ' + obj.version); // Hello Babel v5.0
```
Podemos obtener el mismo resultado usando `export default`:

```javascript
// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export default {
  greeting: greeting,
  name: name,
  version: version
};
```

La forma de importar entonces varía ligeramente:

```javascript
import Message from './Message';
console.log(
  Message.greeting + ' ' + Message.name + ' ' + Message.version); //Hello Babel v5.0
```

La diferencia es bastante evidente. Como nota aclaratoria: Si usamos `export default` no necesitamos añadir las llaves `{...}` y no necesitas saber el nombre del método exportado.

Con la sintaxis de `common.js` quedaría así:

```javascript
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
module.exports = {
  greeting: greeting,
  name: name,
  version: version
};
```
De modo que puedes usar `export default` tal y como lo harías usando `module.exports` en Node.js.

# Ejercicio

Refactoriza los métodos que usan el `export` regular por la sintaxis `export default`.

```javascript
// Math.js
export const PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
export const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
export const square = function(x){
  return x * x;
};
```

```javascript
// Main.js
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square} from './Math';
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
```
Asegúrate de que pasas ambos; el archivo ejecutable y el del módulo a ejecutar/verificar de tu solución.

```
$ tower-of-babel run|verify <executable file> <module file>

# Ejemplo de como ejecutar los módulos convertidos
$ tower-of-babel run Main.js Math.js

# Ejemplo para verificar los módulos convertidos
$ tower-of-babel verify Main.js Math.js
```
