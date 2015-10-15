In ES6 è stata aggiunta la dichiarazione delle funzioni freccia. Con la dichiarazione freccia è possibile scrivere dichiarazioni più concise per funzioni di piccole dimensioni.

```javascript
setTimeout(function(){
  console.log('Prova');
}, 100);

```

La funzione precedente può essere scritta in maniera identica come segue:

```javascript
setTimeout(()=>{console.log('Prova');}, 100);
```

```javascript
// (x) => {} diventa una funzione
// Prima avresti dovuto scriverla così: var square = function(x) { return x * x; };
var square = (x) => {
  return x * x;
};
console.log(square(4)); //16

// Senza le parentesi graffe puoi anche omettere la parola chiave return
var square2 = x => x * x;
console.log(square2(4)); //16
```

# Esercizio

Processa le variabili passate attraverso `process.argv` e restituisci in una sola riga le prime lettere delle parole.

```javascript
var inputs = process.argv.slice(2);
var result = inputs.map(/* Scrivi qui il tuo codice, usando una funzione freccia */)
                   .reduce(/* Scrivi qui il tuo codice, usando una funzione freccia */);
console.log(result);
```

Ad esempio, nel caso di ["Ciao", "Funzione", "Freccia"] il risultato sarebbe "CFF". Ecco un esempio completo:

```shell
$ babel-node program.js Ciao sono Yosuke
CsY
```
