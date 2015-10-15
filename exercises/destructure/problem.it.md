Questa nuova sintassi è simile alla destrutturazione di Clojure. Rende più facile accedere alle proprietà degli array e degli oggetti.

Esaminiamo la sintassi con un piccolo esempio. L'esempio più comune è lo scambio dei valori tra due variabili:

```javascript
var foo = 123;
var bar = 456;

// scambiamo i valori
var tmp = foo;
foo = bar;
bar = tmp;
```

Con la destrutturazione, diventa facile come segue.

```javascript
var foo = 123;
var bar = 456;

// scambiamo i valori
[bar, foo] = [foo, bar];
```

È anche possibile accedere elementi che sono figli dell'array.

```javascript
var [a, [b], [c]] = ['ciao', [', '], ['mondo']];

console.log(a + b + c);// ciao, mondo
// il valore di a è "ciao", quello di b è ", " e quello di c è "mondo"
```

Può anche essere utilizzato per accedere alle proprietà degli oggetti:

```javascript
var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444
```

# Esercizio

Utilizza la destrutturazione per estrarre `name.family` e `birth.day` dal seguente oggetto JavaScript:

```javascript
var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

// Scrivi qui il tuo codice.

console.log(familyName);
console.log(birthDay);
```
