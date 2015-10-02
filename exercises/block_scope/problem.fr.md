Les deux nouveaux mots-clefs `let` et `const` permettent de définir des variables dont la portée est limitée à un bloc contrairement aux variables traditionnelles déclarées avec `var` qui ont une portée sur l'ensemble de la fonction. Cette limitation de la portée signifie que `let` et `const` doivent être utilisés au sein d'accolades `{ ... }`.

Les variables définies avec `let` peuvent être modifiées alors que `const` empêche toute nouvelle assignation. `const` est plus ou moins équivalent au mot-clef `final` qu'on peut trouver dans le langage Java.

```javascript
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; Vous ne pouvez pas faire ça, cela entraînerait une SyntaxError
}

// a = 20; a est déclarée avec `var`, elle est donc accessible à l'extérieur de son scope
console.log(a);
// les variables définies avec `let` ne sont plus accessible. Cette ligne engendre ceci : ReferenceError b is not defined
console.log(b);
// Idem ici pour `const` : tmp is not defined
console.log(tmp);
```

L'utilisation de `let` et `const` est recommandée car rend plus difficile la fuite de variables à l'extérieur du bloc où elles ont été définies.

# Exercice

Modifiez ce fichier en choisissant parmi `var`, `let` ou `const` afin que le code se comporte de la manière décrite dans les commentaires.

```javascript
'use strict';
// Cette variable `a` doit être accessible à l'extérieur du scope de bloc.
var|let|const a = 5;

// Cette variable `b` ne doit pas pouvoir être réassignée.
var|let|const b = process.argv[2];

if (a === 5) {
  // Cette variable `c` ne devrait être valide que dans son bloc.
  var|let|const c = 4;
  console.log(c);  // 4

  // Cette variable `b` ne devrait être valide que dans son bloc.
  var|let|const b = 8;
  console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
  // Tentative de changement de la valeur de `c`
  c = 1000;
} catch (e) {
  // mais une erreur `c is not defined` devrait apparaître.
  console.log(e);
}
```
