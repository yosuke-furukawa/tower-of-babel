
# Introduzione
Questo è il primo esercizio per imparare ES6 usando babel.

Anche con la potenza dell'ultima versione di node.js, non è possibile usare al momento tutte le caratteristiche di ES6.

Per abilitare la nuova sintassi esiste un pacchetto aggiuntivo chiamato `babel` che puoi installare usando npm:

```shell
$ npm install babel -g
```

Una volta completato questo passo, saranno disponibili due nuovi comandi: `babel` e `babel-node`.
Cominciamo a utilizzare `babel-node`.

Crea un file `program.js` che contenga:

```javascript
console.log(`Ciao Babel`);
```

Una volta salvato, potrai eseguire il programma nel modo seguente:

```shell
$ babel-node program.js
```

Prova ad eseguirlo e verifica che produce `Ciao Babel`.

# Esercizio
Crea un programma javascript che prende il primo argomento dalla riga di comando e lo scrive
immediatamente dopo la stringa `"Ciao "` usando le stringhe modello di ES6.

# Suggerimenti
È possibile passare argomenti ad un programma babel dalla riga di comando come segue:

```
babel-node my-program.js un-argomento
```

Per accedere agli argomenti puoi usare l'array `process.argv`.

**Importante!** L'array `process.argv` non contiene solo gli argomenti ma anche l'ambiente di esecuzione (la prima variabile) e il nome dello script caricato (la seconda variabile)!
Ciò significa che il primo argomento si trova nella terza posizione (ricorda che la prima posizione degli array ha indice `0`):

```javascript
process.argv[2]
```

Le stringhe modello di ES6 sono una nuova maniera di dichiarare le stringhe usando il carattere `\`` come delimitatore. Nelle stringhe modello puoi accedere alle variabili locali in questa maniera:

```javascript
var a = 1;
console.log(`${a}`);
```

Leggi maggiori dettagli sulle stringhe modello qui: http://updates.html5rocks.com/2015/01/ES6-Template-Strings
