In ES6 è stata aggiunta la maniera di iterare sugli elementi di un array usando la sintassi `for of`. Vediamo un esempio:

```javascript
var res = [];
// La riga seguente utilizza la sintassi for-of.
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]
```

Quindi, qual è la differenza con la classica sintassi `for`? Diversamente dal `for`, la sintassi `for of` non si limita agli array. Fintanto che qualcosa può essere ripetuto, fintanto che si tratti di un `Iterable`, può essere usato con il `for of`.

Per rendere qualcosa iterable devi usare `Symbol.Iterator`. Ecco un esempio di come usare `Symbol.Iterator`:

```javascript
// calcoliamo la sequenza di Fibonacci fino al millesimo numero
var fibonacci = {
  // Crea un metodo che possiede la funzione Symbol.iterator.
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    // L'oggetto iterator risultante deve possedere un metodo `next`:
    return {
      next() {
        // Il risultato di `next` deve essere un oggetto con la proprietà `done` che afferma se l'iterazione è completa o meno.
        [pre, cur] = [cur, pre + cur];
        if (pre < 1000)  return { done: false, value: pre };
        return { done: true };
      }
    }
  }
}

// Il valore attuale del numero di Fibonacci viene contenuto in `n`.
for (var n of fibonacci) {
  console.log(n);
}
```

# Esercizio

Crea un oggetto iterabile che compie il calcolo FizzBuzz per una quantità data di numeri.

# Suggerimenti

## Il problema FizzBuzz

Elenca i numeri tra 1 e il valore massimo (passato tramite `process.argv`). Tuttavia, per ciascun numero che sia divisibile per 3 devi scrivere `Fizz`, per ciascun numero divisibile per 5 devi scrivere `Buzz`, e per ciascun numero divisibile sia per 3 che per 5 devi scrivere `FizzBuzz`.

Ecco un esempio.

```javascript
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // qui comincia la logica FizzBuzz
    // Suggerimento：
    // Quando hai completato, devi restituire un oggetto con la proprietà
    // `done: true`, ma prima devi restituire `done: false`
  }
}

for (var n of FizzBuzz) {
  console.log(n);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// ...
}

```
