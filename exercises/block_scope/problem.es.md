Dos nuevas definiciones de variables llamadas `let` y `const` aportan un ámbito de bloque a las variables. La definición de variable tradicional `var` está disponible en todo el ámbito de la función. La restricción del ámbito de las variables `let`/`const` a nivel de bloque nos indica que han de sólo están disponibles dentro de las llaves `{ ... }` en las que son declaradas.

Mientras que podemos reasignar el contenido de las variables definidas con `let`, las definidas mediante `const` no nos permiten hacerlo. `const` se parece mucho a la palabra reservada `final` de Java.

```javascript
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; No puedes reasignar una const, devolverá SyntaxError
}

// a = 20、a está definida como `var` de forma que es accesible fuera del ámbito.
console.log(a);
// las variables definidas con `let` no lo están. Esto nos devolverá: ReferenceError b is not defined
console.log(b);
// Lo mismo ocurre con const: tmp is not defined
console.log(tmp);
```

Se recomienda usar `let` y `const` ya que resulta más difícil que una variable salga de su ámbito de declaración de forma accidental.

# Ejercício

Refactoriza este archivo usando `var`, `let` o `const` de forma que el código se comporte tal y como está especificado en los comentarios:

```javascript
'use strict';
// La variable `a` ha de estar accesible fuera del ámbito de bloque.
var|let|const a = 5;

// La variable `b` no ha de poder ser reasignada.
var|let|const b = process.argv[2];

if (a === 5) {
  // La variable `c` ha de estar disponible sólo en este bloque.
  var|let|const c = 4;
  console.log(c);  // 4

  // La variable `b` ha de estar disponible sólo en este bloque.
  var|let|const b = 8;
  console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
  // Intenta reasignar el valor de `c`
  c = 1000;
} catch (e) {
  // Has de obtener el siguiente error: `c is not defined`
  console.log(e);
}
```
