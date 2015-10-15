Finora non è stato possibile suddividere il tuo codice in moduli in JavaScript.

In node.js/io.js è comune utilizzare moduli `commonjs` ma nel browser hai dovuto ricorrere ad altre soluzioni come require.js o browserify o sei stato spinto a creare il tuo namespace globale.

Con ES6 sarai in grado di usare le parole chiave `export` e `import` che sono state concepite espressamente per creare moduli.

In sostanza, si tratta di moduli molto simili a quelli di `commonjs`. Con `export` puoi specificare gli oggetti da esportare, e anziché con `require`, puoi importare gli oggetti con `import`.

`export` si usa come segue:

```javascript
// Message.js
export const message = 'Ciao Babel';
```

E per importare il modulo precedente puoi scrivere come segue:

```javascript
import {message} from './Message';
console.log(message); // Ciao Babel
```

Usando `common.js`, lo stesso modulo sarebbe scritto come segue:

```javascript
exports.message = 'Ciao Babel';
```

```javascript
var message = require('./Message').message;
console.log(message); // Ciao Babel
```

# Esercizio

Riscrivi il modulo e il codice eseguibile seguenti usando i moduli di ES6:

(module)
```javascript
exports.PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
exports.sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
exports.square = function(x) {
  return x * x;
};
```

(executable)
```javascript
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = require('./Math').PI;
var sqrt = require('./Math').sqrt;
var square = require('./Math').square;

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
