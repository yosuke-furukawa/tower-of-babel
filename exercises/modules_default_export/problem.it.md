L'esercizio precedente spiegava il sistema dei moduli, ma esiste un'altra maniera di usare `export`, ovvero `export default`.

Una spiegazione sulla differenza: questo modulo usa `export` come nell'esercizio precedente

```javascript
// Message.js
const greeting = 'Ciao';
const name = 'Babel';
const version = 'v5.0';
export const obj = {
  greeting: greeting,
  name: name,
  version: version
};
```

l'oggetto esportato da questo modulo può essere importato usando il nome come in questo esempio;

```javascript
import {obj} from './Message';
console.log(obj.greeting + ' ' + obj.name + ' ' + obj.version); // Ciao Babel v5.0
```

Puoi ottenere lo stesso risultato usando `export default`:

```javascript
// Message.js
const greeting = 'Ciao';
const name = 'Babel';
const version = 'v5.0';
export default {
  greeting: greeting,
  name: name,
  version: version
};
```

L'importazione cambia leggermente

```javascript
import Message from './Message';
console.log(
  Message.greeting + ' ' + Message.name + ' ' + Message.version); //Ciao Babel v5.0
```

La differenza dovrebbe essere ovvia, ma rivediamola per maggiore chiarezza: quando usi `export default` non hai bisogno di usare le parentesi graffe `{...}` e non devi necessariamente usare il nome delle proprietà esportate.

Scritto in formato `commonjs` sarebbe simile a quanto segue:

```javascript
const greeting = 'Ciao';
const name = 'Babel';
const version = 'v5.0';
module.exports = {
  greeting: greeting,
  name: name,
  version: version
};
```

Quindi puoi usare `export default` per ottenere lo stesso risultato di `module.exports` in Node.js.

# Esercizio

Riscrivi i metodi seguenti che usano la sintassi `export` regolare usando la sintassi `export default`.

```javascript
// Math.js
export const PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
export const sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
export const square = function(x){
  return x * x;
};
```

```javascript
// Main.js
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square} from './Math';
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
```

Assicurati di passare sia il file eseguibile che il file del modulo per eseguire o verificare la tua soluzione.

```
$ tower-of-babel run|verify <file eseguibile> <file del modulo>

# Esempio di esecuzione dei moduli convertiti
$ tower-of-babel run Main.js Math.js

# Esempio di verifica dei moduli convertiti
$ tower-of-babel verify Main.js Math.js
```
