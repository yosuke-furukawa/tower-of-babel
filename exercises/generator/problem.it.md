Nell'ultimo esercizio hai utilizzato gli `Iterable` per generare dei cicli. Tuttavia l'oggetto Iterable ha richiesto una notevole quantità di codice. Con la nuova sintassi `generator` è possibile fare la stessa cosa con un minore sforzo.

Ecco un esempio della sintassi del generatore:

```javascript
let fibonacci = function*(){
  let pre = 0, cur = 1;
  while (pre < 1000) {
    // Qui distruiamo lo stato precedente
    [pre, cur] = [cur, pre + cur];
    // e cediamo (restituiamo) ogni passo
    yield pre;
  }
}();

for (var n of fibonacci) {
  console.log(n);
}
```

La differenza con altre maniere è la notazione `function*` e l'uso di `yield` dove avresti normalmente usato `return` precedentemente.

# Esercizio

Crea lo stesso algoritmo FizzBuzz come spiegato nell'ultimo esercizio, ma questa volta usando la nuova sintassi `generator`.
