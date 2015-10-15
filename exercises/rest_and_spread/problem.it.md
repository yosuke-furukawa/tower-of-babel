Prima di ES6, se dovevi gestire una quantità variabile di argomenti di una funzione, avresti usato la variabile implicita `arguments` per accedere a più parametri di quelli definiti. Dal momento che `arguments` non è un array, non è possibile chiamare su di esso parecchi metodi utili come `map` o `reduce`.

A partire da ES6 puoi usare `...` anziché `arguments` per i parametri in numero variabile. Con questa sintassi puoi accedere ai parametri rimanenti attraverso un array, non un oggetto.

```javascript
var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

console.log(sum(1,2,3)); // 6
```

È altrettanto possibile chiamare un metodo utilizzando una cosiddetta chiamata `spread` per passare array ad un metodo:

```javascript
var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

var array = [1, 2, 3, 4];
// Questo è equivalente a chiamare `sum(1, 2, 3, 4)`
console.log(sum(...array)); // 10

```

# Esercizio

Calcola la media di tutti i numeri passati al programma usando gli argomenti da riga di comando usando la sintassi `...`.

```javascript
var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// scrivi una funzione chiamata `avg` che calcola la media.

console.log(avg(...args));
```
