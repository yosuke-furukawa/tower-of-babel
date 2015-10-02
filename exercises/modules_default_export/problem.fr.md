L'exercice précédent a détaillé le système des modules mais il existe une autre façon d'utiliser `export`, à savoir `export default`.

Quelques explications concernant la différence entre les deux : le module suivant utilise `export` tel que nous l'avons vu dans l'exercice précédent.

```javascript
// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export const obj = {
  greeting: greeting,
  name: name,
  version: version
};
```

L'objet que ce module exporte peut être importé en utilisant le nom utilisé comme dans l'exemple suivant :

```javascript
import {obj} from './Message';
console.log(obj.greeting + ' ' + obj.name + ' ' + obj.version); // Hello Babel v5.0
```

Vous pouvez effectuer la même chose en utilisant `export default` :

```javascript
// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export default {
  greeting: greeting,
  name: name,
  version: version
};
```

L'import doit alors changer un peu :

```javascript
import Message from './Message';
console.log(
  Message.greeting + ' ' + Message.name + ' ' + Message.version); //Hello Babel v5.0
```

La différence devrait être évidente mais précisons-la : lorque vous utilisez `export default`, vous n'avez pas besoin d'utiliser d'accolades `{...}` ni de connaître le nom de l'objet exporté lors de la phase d'import.

Ecrit avec une syntaxe `common.js`, cela aurait ressemblé à ceci :

```javascript
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
module.exports = {
  greeting: greeting,
  name: name,
  version: version
};
```

Donc vous pouvez utiliser `export default` exactement de la manière que vous utilisez `module.exports` dans Node.js.

# Exercice

Récrivez les méthodes exportées avec la syntaxe d'export classique mais en utilisant la syntaxe `export default` à la place.

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

Assurez-vous que vous passez bien le fichier exécutable et le fichier du module lorsque vous voulez exécuter ou vérifier votre solution.

```
$ tower-of-babel run|verify <executable file> <module file>

# Example of running the converted modules
$ tower-of-babel run Main.js Math.js

# Example of verifying the converted modules
$ tower-of-babel verify Main.js Math.js
```
