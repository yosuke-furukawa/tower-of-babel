Le due nuove parole chiave `let` e `const` permettono la definizione di variabili con visibilità limitata ad un blocco. Le variabili tradizionali definite con `var` sono state sempre visibili all'interno dell'intera funzione. La restrizione della visibilità ad un blocco significa che le variabili definite con `let`/`const` sono visibili soltanto all'interno delle parentesi graffe `{ ... }`.

Le variabili definite con `let` sono mutevoli, ma `const` non permette ulteriori assegnamenti. `const` somiglia molto alla parola chiave `final` di Java.

```javascript
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; Non è permesso, risulterebbe in un errore SyntaxError
}

// a = 20; a è definito con `var` quindi è accessibile al di fuori del blocco
console.log(a);
// le variabili definite con `let` non sono disponibili. Questa istruzione produrrà un errore: ReferenceError b is not defined
console.log(b);
// Stesso discorso per const: tmp is not defined
console.log(tmp);
```

Usare `let` e `const` è consigliato perché rende più difficile rendere le variabili visibili all'esterno del blocco in cui vengono usate.

# Esercizio

Modifica questo file scegliendo tra `var`, `let` e `const` per fare in modo che il codice si comporti come richiesto dai commenti

```javascript
'use strict';
// Questa variabile `a` deve essere accessibile al di fuori del blocco.
var|let|const a = 5;

// Questa variabile `b` non deve potere essere riassegnata.
var|let|const b = process.argv[2];

if (a === 5) {
  // Questa variabile `c` deve essere valida soltanto all'interno di questo blocco.
  var|let|const c = 4;
  console.log(c);  // 4

  // Questa variabile `b` deve essere valida soltanto all'interno di questo blocco e non deve potere essere riassegnata.
  var|let|const b = 8;
  console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
  // Proviamo a cambiare il valore di `c`
  c = 1000;
} catch (e) {
  // ma si deve verificare un errore `c is not defined`.
  console.log(e);
}
```
