In ES6 la maniera di definire e accedere ad oggetti letterali è stata migliorata. È possibile ora usare espressioni come nomi di proprietà.

Prima dovevi definire proprietà dinamiche degli oggetti come segue:

```javascript
var prop = "foo";

var obj = {};
obj[prop] = "bar";
```

adesso puoi scrivere come segue in ES6:

```javascript
var prop = "foo";
var obj = {
  [prop]: "bar"
};
```

Questa viene chiamata una `Computed Property`.

L'espressione racchiusa tra `[]` può essere anche una funzione:

```javascript
var obj = {
  // usando una funzione in linea o lambda, con la notazione freccia
  [(()=>"bar" + "baz")()]: "foo"
};
```

In questo caso la stringa usata come chiave viene restituita dalla funzione. Con la nuova sintassi `Computed Property` puoi esprimere proprietà dinamiche senza usare variabili temporanee.

# Esercizio

Riscrivi il codice seguente usando la nuova sintassi `Computed Property`:

```javascript
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {};
obj[evenOrOddKey] = evenOrOdd;
obj[sum] = sum;
console.log(obj);
```

Prova a risolverlo senza l'uso di variabili temporanee.
