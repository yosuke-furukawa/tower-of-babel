Jusqu'à présent il n'était pas possible de découper votre code en modules en Javascript.

Dans node.js/io.js, il est commun d'utiliser l'approche `common.js` pour écrire les modules mais dans un navigateur il est nécessaire de trouver d'autres solutions comme require.js ou browserify ou bien d'être forcé à créer vos propres namespaces globaux.

Avec ES6, vous avez la possibilite d'utiliser les mots-clefs `export` et `import` qui ont été spécifiquement prévus pour la conception de modules.

Ces mots-clefs ressemblent fortement aux modules `common.js`. Avec `export`, vous pouvez spécifier les objets à exporter et à la place de `require` vous pouvez utilisez `import` pour importer les objets.

Utiliser `export` ressemble à ceci :

```javascript
// Message.js
export const message = 'Hello Babel';
```

Et pour importer ce module vous pouvez le faire de cette manière :

```javascript
import {message} from './Message';
console.log(message); // Hello Babel
```

En utilisant `common.js`, le même module aurait été écrit de cette façon :

```javascript
exports.message = 'Hello Babel';
```

```javascript
var message = require('./Message').message;
console.log(message); // Hello Babel
```

# Exercice

Récrivez les modules et les exécutables suivant avec la syntaxe des modules ES6 :

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

(exécutable)
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

Assurez-vous que vous passez bien le fichier exécutable et le fichier du module lorsque vous voulez exécuter ou vérifier votre solution.

```
$ tower-of-babel run|verify <executable file> <module file>

# Example of running the converted modules
$ tower-of-babel run Main.js Math.js

# Example of verifying the converted modules
$ tower-of-babel verify Main.js Math.js
```
